"use client";

import React, { useRef, useMemo, useCallback, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import "./watercolor.css";

export interface WatercolorProps {
  /** Container width */
  width?: string | number;
  /** Container height */
  height?: string | number;
  /** Additional CSS classes */
  className?: string;
  /** Content rendered above the effect */
  children?: React.ReactNode;
  /** Animation speed multiplier */
  speed?: number;
  /** Pattern scale / zoom */
  scale?: number;
  /** Number of noise octaves (1-8) */
  octaves?: number;
  /** Amplitude decay per octave */
  persistence?: number;
  /** Frequency multiplier per octave */
  lacunarity?: number;
  /** Primary flow drift speed */
  driftSpeed?: number;
  /** Secondary warp drift speed */
  warpSpeed?: number;
  /** First color hex */
  color1?: string;
  /** Second color hex */
  color2?: string;
  /** Color intensity multiplier */
  colorGain?: number;
  /** Saturation adjustment */
  saturation?: number;
  /** Brightness offset */
  brightness?: number;
  /** Master opacity */
  opacity?: number;
  /** Enable cursor interaction to intensify warp and contrast near pointer */
  cursorInteraction?: boolean;
  /** Cursor effect strength multiplier (0–3) */
  cursorIntensity?: number;
}

const VERTEX_SHADER = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const FRAGMENT_SHADER = `
precision highp float;

uniform float uTime;
uniform vec2 uRes;
uniform float uSpeed;
uniform float uScale;
uniform int uOctaves;
uniform float uPersist;
uniform float uLacun;
uniform float uDrift;
uniform float uWarp;
uniform vec3 uCol1;
uniform vec3 uCol2;
uniform float uGain;
uniform float uSat;
uniform float uBright;
uniform float uAlpha;
uniform vec2 uPointer;
uniform float uCursorActive;
uniform float uCursorIntensity;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(41.713, 83.457))) * 35718.549);
}

float vnoise(vec2 p) {
  vec2 g = floor(p);
  vec2 f = fract(p);
  vec2 w = f * f * (3.0 - 2.0 * f);

  float tl = hash(g);
  float tr = hash(g + vec2(1.0, 0.0));
  float bl = hash(g + vec2(0.0, 1.0));
  float br = hash(g + vec2(1.0, 1.0));

  return mix(mix(tl, tr, w.x), mix(bl, br, w.x), w.y);
}

float layers(vec2 p) {
  float total = 0.0;
  float amp = 0.5;
  float angle = 0.47;
  float ca = cos(angle), sa = sin(angle);
  mat2 bend = mat2(ca, -sa, sa, ca);

  for (int k = 0; k < 8; k++) {
    if (k >= uOctaves) break;
    total += amp * vnoise(p);
    p = bend * p * uLacun + 193.7;
    amp *= uPersist;
  }

  return total;
}

void main() {
  vec2 coord = (gl_FragCoord.xy * 2.0 - uRes) / uRes.y;
  coord *= uScale;

  float t = uTime * uSpeed;

  vec2 pointerCoord = (uPointer * 2.0 - 1.0) * vec2(uRes.x / uRes.y, 1.0) * uScale;
  float cursorDist = length(coord - pointerCoord);
  float cursorInfluence = smoothstep(0.8, 0.0, cursorDist) * uCursorActive * uCursorIntensity;

  vec2 cursorDir = normalize(coord - pointerCoord + 0.001);
  vec2 warpedCoord = coord + cursorDir * cursorInfluence * 0.12;

  float q = layers(warpedCoord + t * uDrift);
  float r = layers(warpedCoord + q * (1.0 + cursorInfluence * 0.08) + t * uWarp);

  float blend = r * uGain;
  vec3 raw = mix(uCol1, uCol2, smoothstep(0.3, 0.7, blend));

  float luma = dot(raw, vec3(0.299, 0.587, 0.114));
  vec3 col = mix(vec3(luma), raw, uSat) + uBright;
  col = clamp(col, 0.0, 1.0);

  gl_FragColor = vec4(col, uAlpha);
}
`;

function parseHexColor(hex: string): [number, number, number] {
  const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!match) return [0, 0, 0];
  return [
    parseInt(match[1], 16) / 255,
    parseInt(match[2], 16) / 255,
    parseInt(match[3], 16) / 255,
  ];
}

interface WatercolorSceneProps {
  speed: number;
  scale: number;
  octaves: number;
  persistence: number;
  lacunarity: number;
  driftSpeed: number;
  warpSpeed: number;
  col1Rgb: [number, number, number];
  col2Rgb: [number, number, number];
  colorGain: number;
  saturation: number;
  brightness: number;
  opacity: number;
  pointer: [number, number];
  cursorInteraction: boolean;
  cursorIntensity: number;
}

const WatercolorScene: React.FC<WatercolorSceneProps> = ({
  speed,
  scale,
  octaves,
  persistence,
  lacunarity,
  driftSpeed,
  warpSpeed,
  col1Rgb,
  col2Rgb,
  colorGain,
  saturation,
  brightness,
  opacity,
  pointer,
  cursorInteraction,
  cursorIntensity,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size, viewport } = useThree();
  const smoothPointer = useRef(new THREE.Vector2(0.5, 0.5));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uRes: { value: new THREE.Vector2(1, 1) },
      uSpeed: { value: 1 },
      uScale: { value: 1 },
      uOctaves: { value: 6 },
      uPersist: { value: 0.6 },
      uLacun: { value: 2.0 },
      uDrift: { value: 0.1 },
      uWarp: { value: 0.3 },
      uCol1: { value: new THREE.Vector3(0.1, 0.1, 0.1) },
      uCol2: { value: new THREE.Vector3(0.9, 0.9, 0.9) },
      uGain: { value: 0.95 },
      uSat: { value: 0.7 },
      uBright: { value: 0.1 },
      uAlpha: { value: 1 },
      uPointer: { value: new THREE.Vector2(0.5, 0.5) },
      uCursorActive: { value: 0 },
      uCursorIntensity: { value: 1 },
    }),
    [],
  );

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const mat = meshRef.current.material as THREE.ShaderMaterial;

    mat.uniforms.uTime.value = state.clock.elapsedTime;
    mat.uniforms.uRes.value.set(
      size.width * viewport.dpr,
      size.height * viewport.dpr,
    );
    mat.uniforms.uSpeed.value = speed;
    mat.uniforms.uScale.value = scale;
    mat.uniforms.uOctaves.value = octaves;
    mat.uniforms.uPersist.value = persistence;
    mat.uniforms.uLacun.value = lacunarity;
    mat.uniforms.uDrift.value = driftSpeed;
    mat.uniforms.uWarp.value = warpSpeed;
    mat.uniforms.uCol1.value.set(...col1Rgb);
    mat.uniforms.uCol2.value.set(...col2Rgb);
    mat.uniforms.uGain.value = colorGain;
    mat.uniforms.uSat.value = saturation;
    mat.uniforms.uBright.value = brightness;
    mat.uniforms.uAlpha.value = opacity;
    mat.uniforms.uCursorActive.value = cursorInteraction ? 1 : 0;
    mat.uniforms.uCursorIntensity.value = cursorIntensity;

    const ease = 1 - Math.exp(-delta / 0.15);
    smoothPointer.current.x += (pointer[0] - smoothPointer.current.x) * ease;
    smoothPointer.current.y += (pointer[1] - smoothPointer.current.y) * ease;
    mat.uniforms.uPointer.value.set(
      smoothPointer.current.x,
      smoothPointer.current.y,
    );
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={VERTEX_SHADER}
        fragmentShader={FRAGMENT_SHADER}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  );
};

const Watercolor: React.FC<WatercolorProps> = ({
  width = "100%",
  height = "100%",
  className = "",
  children,
  speed = 0.6,
  scale = 0.6,
  octaves = 6,
  persistence = 0.6,
  lacunarity = 2.4,
  driftSpeed = 0.04,
  warpSpeed = 0.08,
  color1 = "#0a0a0a",
  color2 = "#e0e0e0",
  colorGain = 1,
  saturation = 0,
  brightness = 0.15,
  opacity = 1,
  cursorInteraction = false,
  cursorIntensity = 1,
}) => {
  const col1Rgb = useMemo(() => parseHexColor(color1), [color1]);
  const col2Rgb = useMemo(() => parseHexColor(color2), [color2]);

  const containerRef = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState<[number, number]>([0.5, 0.5]);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!cursorInteraction) return;
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const nx = (e.clientX - rect.left) / rect.width;
      const ny = 1 - (e.clientY - rect.top) / rect.height;
      setPointer([nx, ny]);
    },
    [cursorInteraction],
  );

  return (
    <div
      ref={containerRef}
      className={`watercolor-container ${className}`}
      style={{ width, height }}
      onPointerMove={handlePointerMove}
    >
      <Canvas
        className="watercolor-canvas"
        orthographic
        camera={{
          position: [0, 0, 1],
          zoom: 1,
          left: -1,
          right: 1,
          top: 1,
          bottom: -1,
        }}
        gl={{ antialias: true, alpha: true }}
      >
        <WatercolorScene
          speed={speed}
          scale={scale}
          octaves={octaves}
          persistence={persistence}
          lacunarity={lacunarity}
          driftSpeed={driftSpeed}
          warpSpeed={warpSpeed}
          col1Rgb={col1Rgb}
          col2Rgb={col2Rgb}
          colorGain={colorGain}
          saturation={saturation}
          brightness={brightness}
          opacity={opacity}
          pointer={pointer}
          cursorInteraction={cursorInteraction}
          cursorIntensity={cursorIntensity}
        />
      </Canvas>
      {children && <div className="watercolor-content">{children}</div>}
    </div>
  );
};

Watercolor.displayName = "Watercolor";

export default Watercolor;
