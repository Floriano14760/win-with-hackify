import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface HeroProps {
  trustBadge?: {
    text: string;
  };
  headline: string;
  subtitle: string;
  buttons?: {
    primary?: {
      text: string;
      onClick?: () => void;
    };
    secondary?: {
      text: string;
      onClick?: () => void;
    };
  };
  className?: string;
}

const shaderSource = `#version 300 es
precision highp float;

uniform float u_time;
uniform vec2 u_resolution;

out vec4 fragColor;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
    f.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 6; i++) {
    v += a * noise(p);
    p = p * 2.0;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float t = u_time * 0.15;
  
  vec2 q = vec2(fbm(uv + t), fbm(uv + vec2(1.0)));
  vec2 r = vec2(fbm(uv + q + vec2(1.7, 9.2) + 0.15 * t), fbm(uv + q + vec2(8.3, 2.8) + 0.126 * t));
  float f = fbm(uv + r);
  
  vec3 color1 = vec3(0.0, 0.0, 0.0);
  vec3 color2 = vec3(0.15, 0.08, 0.0);
  vec3 color3 = vec3(0.25, 0.12, 0.0);
  
  vec3 color = mix(color1, color2, clamp(f * f * 2.0, 0.0, 1.0));
  color = mix(color, color3, clamp(length(q), 0.0, 1.0) * 0.5);
  
  fragColor = vec4(color * 0.7, 1.0);
}`;

class WebGLRenderer {
  private gl: WebGL2RenderingContext | null = null;
  private program: WebGLProgram | null = null;
  private startTime: number = Date.now();

  constructor(private canvas: HTMLCanvasElement) {
    this.gl = canvas.getContext("webgl2", { alpha: false, antialias: false });
    if (!this.gl) return;
    this.initShader();
  }

  private initShader() {
    const gl = this.gl!;
    
    const vertexShader = gl.createShader(gl.VERTEX_SHADER)!;
    gl.shaderSource(vertexShader, `#version 300 es
      in vec4 a_position;
      void main() { gl_Position = a_position; }
    `);
    gl.compileShader(vertexShader);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(fragmentShader, shaderSource);
    gl.compileShader(fragmentShader);

    this.program = gl.createProgram()!;
    gl.attachShader(this.program, vertexShader);
    gl.attachShader(this.program, fragmentShader);
    gl.linkProgram(this.program);
    gl.useProgram(this.program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(this.program, "a_position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
  }

  render() {
    if (!this.gl || !this.program) return;
    const gl = this.gl;

    gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    gl.uniform1f(gl.getUniformLocation(this.program, "u_time"), (Date.now() - this.startTime) / 1000);
    gl.uniform2f(gl.getUniformLocation(this.program, "u_resolution"), this.canvas.width, this.canvas.height);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  resize(width: number, height: number) {
    this.canvas.width = width;
    this.canvas.height = height;
  }
}

const Hero = ({ trustBadge, headline, subtitle, buttons, className }: HeroProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<WebGLRenderer | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    rendererRef.current = new WebGLRenderer(canvas);
    
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      rendererRef.current?.resize(window.innerWidth * dpr, window.innerHeight * dpr);
    };
    
    resize();
    window.addEventListener("resize", resize);

    let animationId: number;
    const animate = () => {
      rendererRef.current?.render();
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className={cn("relative min-h-screen overflow-hidden bg-black", className)}>
      {/* WebGL Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ touchAction: "none" }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Trust Badge */}
        {trustBadge && (
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <span className="text-sm text-white/80">{trustBadge.text}</span>
          </div>
        )}

        {/* Main Headline */}
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          <span className="text-white">From sourcing </span>
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            to winning.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mb-10 max-w-2xl text-lg text-white/70 sm:text-xl">
          {subtitle}
        </p>

        {/* CTA Buttons */}
        {buttons && (
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            {buttons.primary && (
              <button
                onClick={buttons.primary.onClick}
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
              >
                {buttons.primary.text}
              </button>
            )}
            {buttons.secondary && (
              <button
                onClick={buttons.secondary.onClick}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105"
              >
                {buttons.secondary.text}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
