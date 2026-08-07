import React, { useRef, useEffect, useCallback } from "react";

export interface LiquidAsciiProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  children?: React.ReactNode;
  speed?: number;
  cellSize?: number;
  gravity?: number;
  flipRatio?: number;
  pressureIters?: number;
  separationIters?: number;
  overRelaxation?: number;
  fillHeight?: number;
  cursorRadius?: number;
  cursorForce?: number;
  characters?: string;
  color?: string;
  backgroundColor?: string;
  fontFamily?: string;
  opacity?: number;
  autoWave?: boolean;
}

function bound(v: number, lo: number, hi: number) {
  return v < lo ? lo : v > hi ? hi : v;
}

class Basin {
  medium: number;
  gx: number;
  gy: number;
  step: number;
  invStep: number;
  totalCells: number;
  hx: Float32Array;
  hy: Float32Array;
  dhx: Float32Array;
  dhy: Float32Array;
  oldHx: Float32Array;
  oldHy: Float32Array;
  tension: Float32Array;
  wall: Float32Array;
  kind: Int32Array;
  shade: Float32Array;
  maxParts: number;
  pos: Float32Array;
  vel: Float32Array;
  partDensity: Float32Array;
  restDensity: number;
  pRad: number;
  pInvH: number;
  pNx: number;
  pNy: number;
  pTotal: number;
  bucketCount: Int32Array;
  bucketStart: Int32Array;
  bucketIds: Int32Array;
  count: number;

  constructor(
    medium: number,
    tankW: number,
    tankH: number,
    spacing: number,
    pRad: number,
    maxParts: number,
  ) {
    this.medium = medium;
    this.gx = Math.floor(tankW / spacing);
    this.gy = Math.floor(tankH / spacing);
    this.step = Math.max(tankW / this.gx, tankH / this.gy);
    this.invStep = 1.0 / this.step;
    this.totalCells = this.gx * this.gy;

    this.hx = new Float32Array(this.totalCells);
    this.hy = new Float32Array(this.totalCells);
    this.dhx = new Float32Array(this.totalCells);
    this.dhy = new Float32Array(this.totalCells);
    this.oldHx = new Float32Array(this.totalCells);
    this.oldHy = new Float32Array(this.totalCells);
    this.tension = new Float32Array(this.totalCells);
    this.wall = new Float32Array(this.totalCells);
    this.kind = new Int32Array(this.totalCells);
    this.shade = new Float32Array(3 * this.totalCells);

    this.maxParts = maxParts;
    this.pos = new Float32Array(2 * maxParts);
    this.vel = new Float32Array(2 * maxParts);
    this.partDensity = new Float32Array(this.totalCells);
    this.restDensity = 0;

    this.pRad = pRad;
    this.pInvH = 1.0 / (2.2 * pRad);
    this.pNx = Math.floor(tankW * this.pInvH) + 1;
    this.pNy = Math.floor(tankH * this.pInvH) + 1;
    this.pTotal = this.pNx * this.pNy;

    this.bucketCount = new Int32Array(this.pTotal);
    this.bucketStart = new Int32Array(this.pTotal + 1);
    this.bucketIds = new Int32Array(maxParts);

    this.count = 0;
  }

  push(dt: number, grav: number) {
    for (let i = 0; i < this.count; i++) {
      this.vel[2 * i + 1] += dt * grav;
      this.pos[2 * i] += this.vel[2 * i] * dt;
      this.pos[2 * i + 1] += this.vel[2 * i + 1] * dt;
    }
  }

  separate(passes: number) {
    this.bucketCount.fill(0);

    for (let i = 0; i < this.count; i++) {
      const ci = bound(
        Math.floor(this.pos[2 * i] * this.pInvH),
        0,
        this.pNx - 1,
      );
      const cj = bound(
        Math.floor(this.pos[2 * i + 1] * this.pInvH),
        0,
        this.pNy - 1,
      );
      this.bucketCount[ci * this.pNy + cj]++;
    }

    let running = 0;
    for (let i = 0; i < this.pTotal; i++) {
      running += this.bucketCount[i];
      this.bucketStart[i] = running;
    }
    this.bucketStart[this.pTotal] = running;

    for (let i = 0; i < this.count; i++) {
      const ci = bound(
        Math.floor(this.pos[2 * i] * this.pInvH),
        0,
        this.pNx - 1,
      );
      const cj = bound(
        Math.floor(this.pos[2 * i + 1] * this.pInvH),
        0,
        this.pNy - 1,
      );
      const idx = ci * this.pNy + cj;
      this.bucketStart[idx]--;
      this.bucketIds[this.bucketStart[idx]] = i;
    }

    const gap = 2.0 * this.pRad;
    const gap2 = gap * gap;

    for (let pass = 0; pass < passes; pass++) {
      for (let i = 0; i < this.count; i++) {
        const ax = this.pos[2 * i];
        const ay = this.pos[2 * i + 1];
        const gi = Math.floor(ax * this.pInvH);
        const gj = Math.floor(ay * this.pInvH);
        const r0 = Math.max(gi - 1, 0);
        const c0 = Math.max(gj - 1, 0);
        const r1 = Math.min(gi + 1, this.pNx - 1);
        const c1 = Math.min(gj + 1, this.pNy - 1);

        for (let ni = r0; ni <= r1; ni++) {
          for (let nj = c0; nj <= c1; nj++) {
            const bucket = ni * this.pNy + nj;
            const lo = this.bucketStart[bucket];
            const hi = this.bucketStart[bucket + 1];
            for (let k = lo; k < hi; k++) {
              const other = this.bucketIds[k];
              if (other === i) continue;
              let ex = this.pos[2 * other] - ax;
              let ey = this.pos[2 * other + 1] - ay;
              const e2 = ex * ex + ey * ey;
              if (e2 > gap2 || e2 === 0) continue;
              const e = Math.sqrt(e2);
              const nudge = (0.5 * (gap - e)) / e;
              ex *= nudge;
              ey *= nudge;
              this.pos[2 * i] -= ex;
              this.pos[2 * i + 1] -= ey;
              this.pos[2 * other] += ex;
              this.pos[2 * other + 1] += ey;
            }
          }
        }
      }
    }
  }

  clampWalls() {
    const h = 1.0 / this.invStep;
    const r = this.pRad;
    const xMin = h + r;
    const xMax = (this.gx - 1) * h - r;
    const yMin = h + r;
    const yMax = (this.gy - 1) * h - r;

    for (let i = 0; i < this.count; i++) {
      let px = this.pos[2 * i];
      let py = this.pos[2 * i + 1];

      if (px < xMin) {
        px = xMin;
        this.vel[2 * i] = 0;
      }
      if (px > xMax) {
        px = xMax;
        this.vel[2 * i] = 0;
      }
      if (py < yMin) {
        py = yMin;
        this.vel[2 * i + 1] = 0;
      }
      if (py > yMax) {
        py = yMax;
        this.vel[2 * i + 1] = 0;
      }
      this.pos[2 * i] = px;
      this.pos[2 * i + 1] = py;
    }
  }

  impulse(cx: number, cy: number, vx: number, vy: number, cr: number) {
    if (cr <= 0) return;
    const cr2 = cr * cr;
    const mag = Math.sqrt(vx * vx + vy * vy);
    const cap = 2.0;
    let fx = vx;
    let fy = vy;
    if (mag > cap) {
      fx = (vx / mag) * cap;
      fy = (vy / mag) * cap;
    }
    for (let i = 0; i < this.count; i++) {
      const dx = this.pos[2 * i] - cx;
      const dy = this.pos[2 * i + 1] - cy;
      const d2 = dx * dx + dy * dy;
      if (d2 < cr2 && d2 > 0.0001) {
        const d = Math.sqrt(d2);
        const falloff = 1 - d / cr;
        const w = falloff * falloff;
        this.vel[2 * i] += fx * w;
        this.vel[2 * i + 1] += fy * w;
      }
    }
  }

  measureDensity() {
    const ny = this.gy;
    const h = this.step;
    const h1 = this.invStep;
    const half = 0.5 * h;
    const den = this.partDensity;
    den.fill(0);

    for (let i = 0; i < this.count; i++) {
      const x = bound(this.pos[2 * i], h, (this.gx - 1) * h);
      const y = bound(this.pos[2 * i + 1], h, (this.gy - 1) * h);

      const ix = Math.floor((x - half) * h1);
      const wx = (x - half - ix * h) * h1;
      const jx = Math.min(ix + 1, this.gx - 2);
      const iy = Math.floor((y - half) * h1);
      const wy = (y - half - iy * h) * h1;
      const jy = Math.min(iy + 1, this.gy - 2);

      const sx = 1 - wx;
      const sy = 1 - wy;
      if (ix < this.gx && iy < this.gy) den[ix * ny + iy] += sx * sy;
      if (jx < this.gx && iy < this.gy) den[jx * ny + iy] += wx * sy;
      if (jx < this.gx && jy < this.gy) den[jx * ny + jy] += wx * wy;
      if (ix < this.gx && jy < this.gy) den[ix * ny + jy] += sx * wy;
    }

    if (this.restDensity === 0) {
      let sum = 0;
      let cnt = 0;
      for (let i = 0; i < this.totalCells; i++) {
        if (this.kind[i] === 0) {
          sum += den[i];
          cnt++;
        }
      }
      if (cnt > 0) this.restDensity = sum / cnt;
    }
  }

  gridTransfer(toGrid: boolean, ratio: number) {
    const ny = this.gy;
    const h = this.step;
    const h1 = this.invStep;
    const half = 0.5 * h;

    if (toGrid) {
      this.oldHx.set(this.hx);
      this.oldHy.set(this.hy);
      this.dhx.fill(0);
      this.dhy.fill(0);
      this.hx.fill(0);
      this.hy.fill(0);

      for (let i = 0; i < this.totalCells; i++)
        this.kind[i] = this.wall[i] === 0 ? 2 : 1;

      for (let i = 0; i < this.count; i++) {
        const ci = bound(Math.floor(this.pos[2 * i] * h1), 0, this.gx - 1);
        const cj = bound(Math.floor(this.pos[2 * i + 1] * h1), 0, this.gy - 1);
        if (this.kind[ci * ny + cj] === 1) this.kind[ci * ny + cj] = 0;
      }
    }

    for (let axis = 0; axis < 2; axis++) {
      const offX = axis === 0 ? 0 : half;
      const offY = axis === 0 ? half : 0;
      const field = axis === 0 ? this.hx : this.hy;
      const prev = axis === 0 ? this.oldHx : this.oldHy;
      const wt = axis === 0 ? this.dhx : this.dhy;

      for (let i = 0; i < this.count; i++) {
        const x = bound(this.pos[2 * i], h, (this.gx - 1) * h);
        const y = bound(this.pos[2 * i + 1], h, (this.gy - 1) * h);

        const ix = Math.min(Math.floor((x - offX) * h1), this.gx - 2);
        const wx = (x - offX - ix * h) * h1;
        const jx = Math.min(ix + 1, this.gx - 2);
        const iy = Math.min(Math.floor((y - offY) * h1), this.gy - 2);
        const wy = (y - offY - iy * h) * h1;
        const jy = Math.min(iy + 1, this.gy - 2);

        const a = (1 - wx) * (1 - wy);
        const b = wx * (1 - wy);
        const c = wx * wy;
        const d = (1 - wx) * wy;

        const n0 = ix * ny + iy;
        const n1 = jx * ny + iy;
        const n2 = jx * ny + jy;
        const n3 = ix * ny + jy;

        if (toGrid) {
          const pv = this.vel[2 * i + axis];
          field[n0] += pv * a;
          wt[n0] += a;
          field[n1] += pv * b;
          wt[n1] += b;
          field[n2] += pv * c;
          wt[n2] += c;
          field[n3] += pv * d;
          wt[n3] += d;
        } else {
          const stride = axis === 0 ? ny : 1;
          const ok0 =
            this.kind[n0] !== 1 || this.kind[n0 - stride] !== 1 ? 1 : 0;
          const ok1 =
            this.kind[n1] !== 1 || this.kind[n1 - stride] !== 1 ? 1 : 0;
          const ok2 =
            this.kind[n2] !== 1 || this.kind[n2 - stride] !== 1 ? 1 : 0;
          const ok3 =
            this.kind[n3] !== 1 || this.kind[n3 - stride] !== 1 ? 1 : 0;

          const denom = ok0 * a + ok1 * b + ok2 * c + ok3 * d;
          if (denom > 0) {
            const pic =
              (ok0 * a * field[n0] +
                ok1 * b * field[n1] +
                ok2 * c * field[n2] +
                ok3 * d * field[n3]) /
              denom;
            const corr =
              (ok0 * a * (field[n0] - prev[n0]) +
                ok1 * b * (field[n1] - prev[n1]) +
                ok2 * c * (field[n2] - prev[n2]) +
                ok3 * d * (field[n3] - prev[n3])) /
              denom;
            const flip = this.vel[2 * i + axis] + corr;
            this.vel[2 * i + axis] = (1 - ratio) * pic + ratio * flip;
          }
        }
      }

      if (toGrid) {
        for (let i = 0; i < field.length; i++) {
          if (wt[i] > 0) field[i] /= wt[i];
        }
        for (let ci = 0; ci < this.gx; ci++) {
          for (let cj = 0; cj < this.gy; cj++) {
            const isWall = this.kind[ci * ny + cj] === 2;
            if (isWall || (ci > 0 && this.kind[(ci - 1) * ny + cj] === 2))
              this.hx[ci * ny + cj] = this.oldHx[ci * ny + cj];
            if (isWall || (cj > 0 && this.kind[ci * ny + cj - 1] === 2))
              this.hy[ci * ny + cj] = this.oldHy[ci * ny + cj];
          }
        }
      }
    }
  }

  solvePressure(iters: number, dt: number, relax: number, drift: boolean) {
    this.tension.fill(0);
    this.oldHx.set(this.hx);
    this.oldHy.set(this.hy);

    const ny = this.gy;
    const cp = (this.medium * this.step) / dt;

    for (let rep = 0; rep < iters; rep++) {
      for (let ci = 1; ci < this.gx - 1; ci++) {
        for (let cj = 1; cj < this.gy - 1; cj++) {
          if (this.kind[ci * ny + cj] !== 0) continue;

          const me = ci * ny + cj;
          const lt = (ci - 1) * ny + cj;
          const rt = (ci + 1) * ny + cj;
          const dn = ci * ny + cj - 1;
          const up = ci * ny + cj + 1;

          const slt = this.wall[lt];
          const srt = this.wall[rt];
          const sdn = this.wall[dn];
          const sup = this.wall[up];
          const sAll = slt + srt + sdn + sup;
          if (sAll === 0) continue;

          let div = this.hx[rt] - this.hx[me] + this.hy[up] - this.hy[me];

          if (this.restDensity > 0 && drift) {
            const comp = this.partDensity[me] - this.restDensity;
            if (comp > 0) div -= comp;
          }

          const q = (-div / sAll) * relax;
          this.tension[me] += cp * q;

          this.hx[me] -= slt * q;
          this.hx[rt] += srt * q;
          this.hy[me] -= sdn * q;
          this.hy[up] += sup * q;
        }
      }
    }
  }

  computeShade() {
    this.shade.fill(0);
    for (let i = 0; i < this.totalCells; i++) {
      if (this.kind[i] === 2) {
        this.shade[3 * i] = 0.5;
        this.shade[3 * i + 1] = 0.5;
        this.shade[3 * i + 2] = 0.5;
      } else if (this.kind[i] === 0) {
        let d = this.partDensity[i];
        if (this.restDensity > 0) d /= this.restDensity;
        const val = bound(d, 0, 1.9999);
        const seg = 0.25;
        const n = Math.floor(val / seg);
        const frac = (val - n * seg) / seg;
        const c = n % 2 === 0 ? frac : 1 - frac;
        this.shade[3 * i] = c;
        this.shade[3 * i + 1] = c;
        this.shade[3 * i + 2] = c;
      }
    }
  }

  tick(
    dt: number,
    grav: number,
    ratio: number,
    pIters: number,
    sIters: number,
    relax: number,
  ) {
    this.push(dt, grav);
    this.separate(sIters);
    this.clampWalls();
    this.gridTransfer(true, ratio);
    this.measureDensity();
    this.solvePressure(pIters, dt, relax, true);
    this.gridTransfer(false, ratio);
    this.computeShade();
  }
}

const LiquidAscii: React.FC<LiquidAsciiProps> = ({
  width = "100%",
  height = "100%",
  className = "",
  children,
  speed = 0.9,
  cellSize = 15,
  gravity = -25,
  flipRatio = 0.3,
  pressureIters = 30,
  separationIters = 3,
  overRelaxation = 1.5,
  fillHeight = 0.4,
  cursorRadius = 0.25,
  cursorForce = 66,
  characters = " ·:-~=+*#%@",
  color = "#ffffff",
  backgroundColor = "#000000",
  fontFamily = "monospace",
  opacity = 1,
  autoWave = true,
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const preRef = useRef<HTMLPreElement>(null);
  const basinRef = useRef<Basin | null>(null);
  const stateRef = useRef({
    cursorX: -999,
    cursorY: -999,
    cursorVX: 0,
    cursorVY: 0,
    lastMoveTime: 0,
    autoTime: 0,
    cols: 0,
    rows: 0,
    simH: 2.0,
    scale: 1,
    letterSpacing: 0,
  });
  const cfgRef = useRef({
    speed,
    gravity,
    flipRatio,
    pressureIters,
    separationIters,
    overRelaxation,
    fillHeight,
    cursorRadius,
    cursorForce,
    characters,
    color,
    backgroundColor,
    fontFamily,
    opacity,
    cellSize,
    autoWave,
  });

  useEffect(() => {
    cfgRef.current = {
      speed,
      gravity,
      flipRatio,
      pressureIters,
      separationIters,
      overRelaxation,
      fillHeight,
      cursorRadius,
      cursorForce,
      characters,
      color,
      backgroundColor,
      fontFamily,
      opacity,
      cellSize,
      autoWave,
    };
  }, [
    speed,
    gravity,
    flipRatio,
    pressureIters,
    separationIters,
    overRelaxation,
    fillHeight,
    cursorRadius,
    cursorForce,
    characters,
    color,
    backgroundColor,
    fontFamily,
    opacity,
    cellSize,
    autoWave,
  ]);

  const buildSim = useCallback(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const rect = wrap.getBoundingClientRect();
    if (rect.width < 2 || rect.height < 2) return;
    const cs = cfgRef.current.cellSize;

    const tmpCanvas = document.createElement("canvas");
    const tmpCtx = tmpCanvas.getContext("2d");
    let charW = cs * 0.6;
    if (tmpCtx) {
      tmpCtx.font = `${cs}px ${cfgRef.current.fontFamily}`;
      const m = tmpCtx.measureText("@");
      if (m.width > 0) charW = m.width;
    }
    const lspacing = cs - charW;

    const cols = Math.ceil(rect.width / cs) + 4;
    const rows = Math.ceil(rect.height / cs) + 4;
    const resolution = rows;

    const simH = 2.0;
    const cscale = (rows * cs) / simH;
    const simW = (cols * cs) / cscale;

    const tankH = simH;
    const tankW = simW;
    const h = tankH / resolution;
    const r = 0.3 * h;
    const dx = 2.0 * r;
    const dy = (Math.sqrt(3) / 2) * dx;

    const fh = cfgRef.current.fillHeight;
    const numX = Math.floor((tankW - 2 * h - 2 * r) / dx);
    const numY = Math.floor((fh * tankH - 2 * h - 2 * r) / dy);
    const maxP = Math.max(1, numX * numY);

    const basin = new Basin(1000, tankW, tankH, h, r, maxP);
    basin.count = maxP;

    let p = 0;
    const xOff = (tankW - numX * dx) / 2;
    const yOff = 0;
    for (let i = 0; i < numX; i++) {
      for (let j = 0; j < numY; j++) {
        basin.pos[p++] = h + r + dx * i + (j % 2 === 0 ? 0 : r) + xOff;
        basin.pos[p++] = h + r + dy * j + yOff;
      }
    }

    const ny = basin.gy;
    for (let i = 0; i < basin.gx; i++) {
      for (let j = 0; j < basin.gy; j++) {
        let s = 1.0;
        if (i === 0 || i === basin.gx - 1 || j === 0 || j === basin.gy - 1)
          s = 0.0;
        basin.wall[i * ny + j] = s;
      }
    }

    basinRef.current = basin;

    const st = stateRef.current;
    st.cols = cols;
    st.rows = rows;
    st.simH = simH;
    st.scale = cscale;
    st.letterSpacing = lspacing;
  }, []);

  useEffect(() => {
    buildSim();
    const wrap = wrapRef.current;
    if (!wrap) return;
    const observer = new ResizeObserver(() => buildSim());
    observer.observe(wrap);
    return () => observer.disconnect();
  }, [buildSim, cellSize, fillHeight]);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const toSim = (clientX: number, clientY: number) => {
      const rect = wrap.getBoundingClientRect();
      const st = stateRef.current;
      const mx = clientX - rect.left;
      const my = clientY - rect.top;
      return {
        x: mx / st.scale,
        y: (st.rows * cfgRef.current.cellSize - my) / st.scale,
      };
    };

    const onMove = (cx: number, cy: number) => {
      const st = stateRef.current;
      const { x, y } = toSim(cx, cy);
      if (st.cursorX > -900) {
        st.cursorVX += x - st.cursorX;
        st.cursorVY += y - st.cursorY;
      }
      st.cursorX = x;
      st.cursorY = y;
      st.lastMoveTime = performance.now();
    };

    const onLeave = () => {
      const st = stateRef.current;
      st.cursorX = -999;
      st.cursorY = -999;
      st.cursorVX = 0;
      st.cursorVY = 0;
    };

    const mm = (e: MouseEvent) => onMove(e.clientX, e.clientY);
    const tm = (e: TouchEvent) => {
      e.preventDefault();
      onMove(e.touches[0].clientX, e.touches[0].clientY);
    };

    wrap.addEventListener("mousemove", mm);
    wrap.addEventListener("mouseleave", onLeave);
    wrap.addEventListener("touchstart", tm, { passive: false });
    wrap.addEventListener("touchmove", tm, { passive: false });
    wrap.addEventListener("touchend", onLeave);

    return () => {
      wrap.removeEventListener("mousemove", mm);
      wrap.removeEventListener("mouseleave", onLeave);
      wrap.removeEventListener("touchstart", tm);
      wrap.removeEventListener("touchmove", tm);
      wrap.removeEventListener("touchend", onLeave);
    };
  }, []);

  useEffect(() => {
    const pre = preRef.current;
    const wrap = wrapRef.current;
    if (!pre || !wrap) return;
    let frameId = 0;
    let running = false;

    const startLoop = () => {
      if (running) return;
      running = true;
      frameId = requestAnimationFrame(loop);
    };

    const stopLoop = () => {
      running = false;
      if (frameId) cancelAnimationFrame(frameId);
      frameId = 0;
    };

    const loop = () => {
      if (!running) return;
      const basin = basinRef.current;
      const st = stateRef.current;
      const cfg = cfgRef.current;
      if (!basin) {
        frameId = requestAnimationFrame(loop);
        return;
      }

      const dt = (1 / 120) * cfg.speed;

      if (st.cursorX > -900) {
        const mvx = st.cursorVX * cfg.cursorForce;
        const mvy = st.cursorVY * cfg.cursorForce;
        const shortSide = Math.min(
          basin.gx * basin.step,
          basin.gy * basin.step,
        );
        const cr = cfg.cursorRadius * shortSide;
        basin.impulse(st.cursorX, st.cursorY, mvx, mvy, cr);
      }
      st.cursorVX = 0;
      st.cursorVY = 0;

      const idleMs = performance.now() - st.lastMoveTime;
      if (cfg.autoWave && idleMs > 2000) {
        st.autoTime += dt;
        const t = st.autoTime;
        const simW = basin.gx * basin.step;
        const simHt = basin.gy * basin.step;
        const shortSide = Math.min(simW, simHt);
        const acr = cfg.cursorRadius * shortSide * 1.5;
        const ax = simW * (0.5 + 0.35 * Math.sin(t * 0.7));
        const ay = simHt * (0.3 + 0.15 * Math.sin(t * 1.1));
        const avx = Math.cos(t * 0.7) * 0.35 * simW * 0.7;
        const avy = Math.cos(t * 1.1) * 0.15 * simHt * 1.1;
        const strength =
          Math.min((idleMs - 2000) / 1000, 1) * cfg.cursorForce * 0.4;
        basin.impulse(ax, ay, avx * strength, avy * strength, acr);
      } else {
        st.autoTime = 0;
      }

      basin.tick(
        dt,
        cfg.gravity,
        cfg.flipRatio,
        cfg.pressureIters,
        cfg.separationIters,
        cfg.overRelaxation,
      );

      const chars = cfg.characters;
      const len = chars.length;
      const ny = basin.gy;
      let out = "";

      const maxCol = basin.gx - 1;
      const maxRow = ny - 2;
      for (let row = maxRow; row > 0; row--) {
        let line = "";
        for (let col = 1; col < maxCol; col++) {
          const val = basin.shade[3 * (col * ny + row)];
          const ci = Math.min(Math.floor(val * len), len - 1);
          line += chars[ci];
        }
        out += line + "\n";
      }

      pre.textContent = out;
      pre.style.color = cfg.color;
      pre.style.backgroundColor = cfg.backgroundColor;
      pre.style.fontFamily = cfg.fontFamily;
      pre.style.opacity = String(cfg.opacity);
      pre.style.fontSize = cfg.cellSize + "px";
      pre.style.lineHeight = cfg.cellSize + "px";
      pre.style.letterSpacing = st.letterSpacing + "px";

      frameId = requestAnimationFrame(loop);
    };

    // 离屏暂停 rAF，避免自由滚动时占满主线程
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) startLoop();
        else stopLoop();
      },
      { threshold: 0.05 },
    );
    io.observe(wrap);
    startLoop();

    return () => {
      stopLoop();
      io.disconnect();
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height, backgroundColor }}
    >
      <pre
        ref={preRef}
        className="absolute inset-0 m-0 overflow-hidden whitespace-pre p-0 select-none"
        style={{
          fontFamily,
          fontSize: `${cellSize}px`,
          lineHeight: `${cellSize}px`,
          letterSpacing: "0px",
          color,
          opacity,
        }}
      />
      {children ? (
        <div className="pointer-events-none relative z-10">{children}</div>
      ) : null}
    </div>
  );
};

export default LiquidAscii;
