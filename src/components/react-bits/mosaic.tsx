"use client";

import { useEffect, useRef, useMemo, useCallback } from "react";
import * as THREE from "three";
import { cn } from "../../lib/utils";

export interface MosaicProps {
  /** Width of the component in pixels or CSS value */
  width?: number | string;
  /** Height of the component in pixels or CSS value */
  height?: number | string;
  /** Animation speed multiplier */
  speed?: number;
  /** Mosaic source variant */
  variant?: "shader" | "video";
  /** Video source URL (required when variant="video") */
  videoSrc?: string;
  /** Primary wave color in hex format */
  color1?: string;
  /** Secondary wave color in hex format */
  color2?: string;
  /** Accent wave color in hex format */
  color3?: string;
  /** Pixel/mosaic tile size (1-50) */
  pixelSize?: number;
  /** Mosaic border intensity (0-1) */
  borderIntensity?: number;
  /** Overall effect opacity (0-1) */
  opacity?: number;
  /** Wave intensity/amplitude (0-2) */
  waveIntensity?: number;
  /** Wave width/thickness (0.1-5) */
  waveWidth?: number;
  /** Rendering quality */
  quality?: "low" | "medium" | "high";
  /** Additional CSS classes */
  className?: string;
  /** Content to render on top of the effect */
  children?: React.ReactNode;
}

const Mosaic: React.FC<MosaicProps> = ({
  width = "100%",
  height = "100%",
  speed = 1.0,
  variant = "shader",
  videoSrc,
  color1 = "#FF0033",
  color2 = "#00FF66",
  color3 = "#0066FF",
  pixelSize = 10.0,
  borderIntensity = 0.8,
  opacity = 1.0,
  waveIntensity = 1.0,
  waveWidth = 1.0,
  quality = "high",
  className,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoTextureRef = useRef<THREE.VideoTexture | null>(null);

  const hexToRgb = useCallback((hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16) / 255,
          g: parseInt(result[2], 16) / 255,
          b: parseInt(result[3], 16) / 255,
        }
      : { r: 1, g: 0, b: 0.2 };
  }, []);

  const rgbColor1 = useMemo(() => hexToRgb(color1), [color1, hexToRgb]);
  const rgbColor2 = useMemo(() => hexToRgb(color2), [color2, hexToRgb]);
  const rgbColor3 = useMemo(() => hexToRgb(color3), [color3, hexToRgb]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const rect = container.getBoundingClientRect();
    const actualWidth = rect.width;
    const actualHeight = rect.height;

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);

    let qualityMultiplier = 1.0;
    if (quality === "low") qualityMultiplier = 0.5;
    else if (quality === "medium") qualityMultiplier = 0.75;
    else if (quality === "high") qualityMultiplier = 1.0;

    const pixelRatio = Math.min(window.devicePixelRatio * qualityMultiplier, 2);
    renderer.setSize(actualWidth, actualHeight, false);
    renderer.setPixelRatio(pixelRatio);

    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";

    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const bufferWidth = actualWidth * pixelRatio;
    const bufferHeight = actualHeight * pixelRatio;

    let videoTexture: THREE.VideoTexture | null = null;
    if (variant === "video" && videoSrc) {
      const video = document.createElement("video");
      video.src = videoSrc;
      video.crossOrigin = "anonymous";
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.play();
      videoRef.current = video;

      videoTexture = new THREE.VideoTexture(video);
      videoTexture.minFilter = THREE.LinearFilter;
      videoTexture.magFilter = THREE.LinearFilter;
      videoTextureRef.current = videoTexture;
    }

    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector3(bufferWidth, bufferHeight, 1.0) },
      uColor1: {
        value: new THREE.Vector3(rgbColor1.r, rgbColor1.g, rgbColor1.b),
      },
      uColor2: {
        value: new THREE.Vector3(rgbColor2.r, rgbColor2.g, rgbColor2.b),
      },
      uColor3: {
        value: new THREE.Vector3(rgbColor3.r, rgbColor3.g, rgbColor3.b),
      },
      uPixelSize: { value: Math.max(1, Math.min(50, pixelSize)) },
      uBorderIntensity: { value: Math.max(0, Math.min(1, borderIntensity)) },
      uOpacity: { value: Math.max(0, Math.min(1, opacity)) },
      uWaveIntensity: { value: Math.max(0, Math.min(2, waveIntensity)) },
      uWaveWidth: { value: Math.max(0.1, Math.min(5, waveWidth)) },
      uVariant: { value: variant === "video" ? 1 : 0 },
      uVideoTexture: { value: videoTexture },
    };

    const vertexShader = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision mediump float;

      uniform float iTime;
      uniform vec3 iResolution;
      uniform vec3 uColor1;
      uniform vec3 uColor2;
      uniform vec3 uColor3;
      uniform float uPixelSize;
      uniform float uBorderIntensity;
      uniform float uOpacity;
      uniform float uWaveIntensity;
      uniform float uWaveWidth;
      uniform int uVariant;
      uniform sampler2D uVideoTexture;

      float waveValue(in vec2 uv, float d, float offset) {
        return 1.0 - smoothstep(0.0, d, distance(uv.x, 0.5 + sin(offset + uv.y * 3.0) * 0.3));
      }

      vec4 waveBackground(vec2 uv, float offset) {
        vec2 centeredUV = uv;

        float aspect = iResolution.x / iResolution.y;
        if (aspect > 1.0) {
          centeredUV.x = (centeredUV.x - 0.5) * aspect + 0.5;
        } else {
          centeredUV.y = (centeredUV.y - 0.5) / aspect + 0.5;
        }

        float d = (0.05 + abs(sin(offset * 0.2)) * 0.25 * distance(centeredUV.y, 0.5)) * uWaveWidth;

        float r = waveValue(centeredUV + vec2(d * 0.25, 0.0), d, offset);
        float g = waveValue(centeredUV - vec2(0.015, 0.005), d, offset);
        float b = waveValue(centeredUV - vec2(d * 0.5, 0.015), d, offset);

        return vec4(r, g, b, 1.0);
      }

      vec4 pixelate(vec2 fragCoord, vec4 backgroundColor) {
        float pixelPrecision = 3.0;
        vec2 pixel = fragCoord - vec2(ivec2(fragCoord.xy) % int(uPixelSize));
        float precisePixel = floor(uPixelSize / pixelPrecision);

        vec4 color = vec4(0.0);

        for(float i = 0.0; i < pixelPrecision; i++) {
          vec2 sampleCoord = pixel + precisePixel * i;
          vec2 sampleUV = sampleCoord / iResolution.xy;

          vec4 sourceColor;

          if (uVariant == 1) {
            sourceColor = texture2D(uVideoTexture, sampleUV);
          } else {
            sourceColor = waveBackground(sampleUV, iTime) * 0.3 +
                         waveBackground(sampleUV + vec2(0.15, 0.0), -iTime * 2.0) * 0.3 +
                         waveBackground(sampleUV + vec2(0.3, 0.0), iTime * 3.3) * 0.3 +
                         waveBackground(sampleUV - vec2(0.2, 0.0), -iTime * 1.7) * 0.3 +
                         waveBackground(sampleUV - vec2(0.4, 0.0), iTime * 2.5) * 0.3;
          }

          color += sourceColor;
        }

        color = color / pixelPrecision;

        vec3 colorMix;
        float colorIntensity;

        if (uVariant == 1) {
          colorMix = color.rgb;
          colorIntensity = (color.r + color.g + color.b) / 3.0;
        } else {
          colorMix = color.r * uColor1 + color.g * uColor2 + color.b * uColor3;
          colorIntensity = (color.r + color.g + color.b) / 3.0;
          colorMix *= uWaveIntensity;
        }

        color = vec4(colorMix, colorIntensity);

        vec4 border = vec4(0.0);
        if ((int(fragCoord.y) % int(uPixelSize) == int(0)) ||
            (int(fragCoord.x) % int(uPixelSize) == int(0))) {
          color.rgb -= vec3(uBorderIntensity * 0.3);
        }

        return color;
      }

      void mainImage(out vec4 fragColor, in vec2 fragCoord) {
        vec2 uv = fragCoord / iResolution.xy;

        vec4 background;

        if (uVariant == 1) {
          background = texture2D(uVideoTexture, uv);
        } else {
          background = waveBackground(uv, iTime) * 0.3 +
                      waveBackground(uv + vec2(0.15, 0.0), -iTime * 2.0) * 0.3 +
                      waveBackground(uv + vec2(0.3, 0.0), iTime * 3.3) * 0.3 +
                      waveBackground(uv - vec2(0.2, 0.0), -iTime * 1.7) * 0.3 +
                      waveBackground(uv - vec2(0.4, 0.0), iTime * 2.5) * 0.3;
        }

        vec4 mosaicColor = pixelate(fragCoord, background);

        fragColor = vec4(mosaicColor.rgb, mosaicColor.a * uOpacity);
      }

      void main() {
        vec4 color = vec4(0.0);
        mainImage(color, gl_FragCoord.xy);
        gl_FragColor = color;
      }
    `;

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    startTimeRef.current = performance.now();
    let lastTime = startTimeRef.current;

    const animate = (currentTime: number) => {
      rafRef.current = requestAnimationFrame(animate);

      if (currentTime - lastTime < 16) return;
      lastTime = currentTime;

      const elapsed = (currentTime - startTimeRef.current) * 0.001 * speed;
      uniforms.iTime.value = elapsed;

      renderer.render(scene, camera);
    };

    rafRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      const newRect = container.getBoundingClientRect();
      const newWidth = newRect.width;
      const newHeight = newRect.height;

      renderer.setSize(newWidth, newHeight, false);

      const newBufferWidth = newWidth * pixelRatio;
      const newBufferHeight = newHeight * pixelRatio;
      uniforms.iResolution.value.set(newBufferWidth, newBufferHeight, 1.0);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafRef.current);
      scene.remove(mesh);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current = null;
      }
      if (videoTextureRef.current) {
        videoTextureRef.current.dispose();
        videoTextureRef.current = null;
      }
    };
  }, [
    speed,
    variant,
    videoSrc,
    pixelSize,
    borderIntensity,
    opacity,
    waveIntensity,
    waveWidth,
    quality,
    rgbColor1,
    rgbColor2,
    rgbColor3,
  ]);

  const widthStyle = typeof width === "number" ? `${width}px` : width;
  const heightStyle = typeof height === "number" ? `${height}px` : height;

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        width: widthStyle,
        height: heightStyle,
      }}
    >
      <div ref={containerRef} className="absolute inset-0" />
      {children && (
        <div className="relative z-10 w-full h-full pointer-events-none">
          {children}
        </div>
      )}
    </div>
  );
};

Mosaic.displayName = "Mosaic";

export default Mosaic;
