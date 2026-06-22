/**
 * Decorative hero backdrop — a CSS-only gold glow (no image, no WebGL) that
 * scales cleanly on every screen and paints with the initial HTML. On machines
 * with a real GPU the 3D scene mounts on top and this fades out (`faded`); on
 * mobile / software renderers it's all that's shown.
 */
export function HeroBackdrop({ faded = false }: { faded?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
        faded ? "opacity-0" : "opacity-100"
      }`}
      style={{
        background:
          "radial-gradient(55% 50% at 50% 42%, rgba(221,215,141,0.12) 0%, rgba(221,215,141,0.05) 38%, rgba(14,52,160,0.04) 60%, transparent 78%)",
      }}
    />
  );
}
