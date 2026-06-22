"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { Component, ReactNode, Suspense, useEffect, useRef, useState } from "react";
import { PhiSymbol } from "./PhiSymbol";

class WebGLErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    // On failure render nothing — the static <HeroBackdrop /> sits behind us.
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

function isWebGLAvailable() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

/**
 * Drives the render loop manually at a capped frame rate, and only while the
 * scene is on-screen and the tab is visible. Combined with the Canvas's
 * `frameloop="demand"` this keeps the main thread idle when nothing is visible
 * and halves per-frame work versus the default 60fps loop.
 */
function FrameDriver({ active, fps = 30 }: { active: boolean; fps?: number }) {
  const invalidate = useThree((s) => s.invalidate);

  useEffect(() => {
    if (!active) return;
    let raf = 0;
    let last = 0;
    const interval = 1000 / fps;
    const loop = (time: number) => {
      raf = requestAnimationFrame(loop);
      if (time - last >= interval) {
        last = time;
        invalidate();
      }
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [active, fps, invalidate]);

  return null;
}

export function SceneWrapper() {
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);
  const [active, setActive] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWebglSupported(isWebGLAvailable());
  }, []);

  useEffect(() => {
    if (!webglSupported) return;
    const el = containerRef.current;
    if (!el) return;

    let inView = true;
    let visible = !document.hidden;
    const sync = () => setActive(inView && visible);

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        sync();
      },
      { threshold: 0.01 }
    );
    io.observe(el);

    const onVisibility = () => {
      visible = !document.hidden;
      sync();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [webglSupported]);

  if (webglSupported === null || webglSupported === false) return null;

  return (
    <WebGLErrorBoundary>
      <div
        ref={containerRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <Suspense fallback={null}>
          <Canvas
            frameloop="demand"
            camera={{ position: [0, 0, 4], fov: 50 }}
            dpr={[1, 1.5]}
            performance={{ min: 0.5 }}
            style={{ width: "100%", height: "100%" }}
          >
            <FrameDriver active={active} fps={30} />
            <PhiSymbol />
          </Canvas>
        </Suspense>
      </div>
    </WebGLErrorBoundary>
  );
}
