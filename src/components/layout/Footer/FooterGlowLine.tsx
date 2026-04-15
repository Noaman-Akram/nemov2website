"use client";

import { useEffect, useRef } from "react";

export function FooterGlowLine() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const gl = c.getContext("webgl", { alpha: false, antialias: true });
    if (!gl) return;

    const vs = `
      attribute vec2 a_pos;
      varying vec2 v_uv;
      void main(){ v_uv=a_pos*0.5+0.5; gl_Position=vec4(a_pos,0.0,1.0); }
    `;

    const fs = `
      precision mediump float;
      uniform float u_t;
      uniform vec2 u_r;
      varying vec2 v_uv;

      #define G vec3(0.207, 0.839, 0.529)

      float n(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }
      float sn(vec2 p){
        vec2 i=floor(p),f=fract(p); f=f*f*(3.0-2.0*f);
        return mix(mix(n(i),n(i+vec2(1,0)),f.x),mix(n(i+vec2(0,1)),n(i+vec2(1,1)),f.x),f.y);
      }
      float fbm(vec2 p){
        float v=0.,a=0.5,f=1.;
        for(int i=0;i<5;i++){v+=a*sn(p*f);f*=2.;a*=0.5;}
        return v;
      }

      void main() {
        vec2 uv = v_uv;
        vec2 asp = vec2(u_r.x/u_r.y, 1.0);
        vec2 p = (uv - 0.5) * asp;
        
        float dist = abs(p.y);

        float hf = smoothstep(0.0, 0.15, uv.x) * smoothstep(0.0, 0.15, 1.0-uv.x);
        float vf = 1.0 - abs(uv.y - 0.5) * 2.0;
        vf = smoothstep(0.0, 1.0, vf);
        float fade = hf * pow(vf, 1.2);

        float noise = fbm(vec2(uv.x * 4.0 - u_t * 0.15, uv.y * 5.0 + u_t * 0.05)) * 0.35 + 0.65;

        float glow = 0.0;
        glow += exp(-dist * 250.0) * 1.8;   
        glow += exp(-dist * 80.0) * 0.6;    
        glow += exp(-dist * 20.0) * 0.2;    
        glow *= fade * noise;

        float flow1 = sin(uv.x * 8.0 - u_t * 2.5 + fbm(uv * 3.0) * 3.0) * 0.5 + 0.5;
        float flow2 = sin(uv.x * 12.0 + u_t * 1.8 + fbm(uv * 5.0) * 2.0) * 0.5 + 0.5;
        glow *= (0.6 + smoothstep(0.2, 0.8, flow1) * 0.25 + smoothstep(0.3, 0.7, flow2) * 0.15);

        // Matching Option A #050505 (rgb ~5,5,5) -> ~0.02
        vec3 bg = vec3(0.02, 0.02, 0.02); 
        vec3 color = mix(bg, G * clamp(glow, 0.0, 2.5), clamp(glow, 0.0, 1.0));
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    function compile(src: string, type: number) {
      const s = gl!.createShader(type)!;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      return s;
    }

    const prog = gl!.createProgram()!;
    gl!.attachShader(prog, compile(vs, gl!.VERTEX_SHADER));
    gl!.attachShader(prog, compile(fs, gl!.FRAGMENT_SHADER));
    gl!.linkProgram(prog);
    gl!.useProgram(prog);

    const buf = gl!.createBuffer();
    gl!.bindBuffer(gl!.ARRAY_BUFFER, buf);
    gl!.bufferData(gl!.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl!.STATIC_DRAW);
    const aP = gl!.getAttribLocation(prog, "a_pos");
    gl!.enableVertexAttribArray(aP);
    gl!.vertexAttribPointer(aP, 2, gl!.FLOAT, false, 0, 0);

    const uT = gl!.getUniformLocation(prog, "u_t");
    const uR = gl!.getUniformLocation(prog, "u_r");

    let id: number;
    function resize() {
      if (!c) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      c.width = c.clientWidth * dpr;
      c.height = c.clientHeight * dpr;
      gl!.viewport(0, 0, c.width, c.height);
    }
    resize();
    window.addEventListener("resize", resize);

    const t0 = performance.now();
    function loop() {
      gl!.uniform1f(uT, (performance.now() - t0) / 1000);
      gl!.uniform2f(uR, c!.width, c!.height);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
      id = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(id);
    };
  }, []);

  return (
    <div className="glow-line">
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
      <style>{`
        .glow-line {
          height: 60px;
          width: 100%;
          position: relative;
          z-index: 5;
          margin-top: -30px;
          margin-bottom: -30px;
        }
      `}</style>
    </div>
  );
}
