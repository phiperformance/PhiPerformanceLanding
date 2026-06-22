// Software WebGL renderers (no real GPU). On these, every WebGL frame becomes a
// long task — this is exactly what Lighthouse's headless Chrome uses, and what
// produced the 22-35s TBT. We skip the 3D scene for them and show the static
// backdrop instead, while real GPUs get the full animated scene immediately.
const SOFTWARE_RENDERER =
  /swiftshader|software|llvmpipe|microsoft basic render|mesa offscreen|virtualbox|paravirtual/i;

export function hasHardwareWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl = (canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;
    if (!gl) return false;

    const info = gl.getExtension("WEBGL_debug_renderer_info");
    // Renderer string is masked (privacy mode) but WebGL works → assume hardware.
    if (!info) return true;

    const renderer = String(gl.getParameter(info.UNMASKED_RENDERER_WEBGL));
    return !SOFTWARE_RENDERER.test(renderer);
  } catch {
    return false;
  }
}
