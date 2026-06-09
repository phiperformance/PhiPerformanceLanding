"use client";

import dynamic from "next/dynamic";
import { Component, ReactNode, Suspense, useEffect, useState } from "react";

const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false }
);

const PhiSymbol = dynamic(
  () => import("./PhiSymbol").then((mod) => mod.PhiSymbol),
  { ssr: false }
);

class WebGLErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
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

export function SceneWrapper() {
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);

  useEffect(() => {
    setWebglSupported(isWebGLAvailable());
  }, []);

  if (webglSupported === null) return null;
  if (!webglSupported) return <PhiFallback />;

  return (
    <WebGLErrorBoundary fallback={<PhiFallback />}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Suspense fallback={null}>
          <Canvas
            camera={{ position: [0, 0, 4], fov: 50 }}
            dpr={[1, 1.5]}
            performance={{ min: 0.5 }}
            style={{ width: "100%", height: "100%" }}
          >
            <PhiSymbol />
          </Canvas>
        </Suspense>
      </div>
    </WebGLErrorBoundary>
  );
}

/* Fallback for mobile / no-WebGL: custom hero background image */
export function PhiFallback() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: 0.35,
      }}
    />
  );
}
