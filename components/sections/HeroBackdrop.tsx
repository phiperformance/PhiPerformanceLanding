/**
 * Static decorative hero background. Rendered server-side (no JS, no WebGL) so
 * it paints with the initial HTML. On capable desktops the 3D scene is layered
 * on top of this once the page is idle; on mobile / reduced-motion it's all
 * that's shown.
 */
export function HeroBackdrop() {
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
