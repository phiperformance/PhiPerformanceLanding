"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const MODEL_PATH = "/models/rhetorician.glb";

// The three halo rings all share the "Crown" material — matching by material
// name (rather than the nimbus.NNN node names, which didn't resolve via
// getObjectByName) reliably catches all of them, spinning the whole glyph
// halo together instead of just the two the source clip happened to animate.
const NIMBUS_MATERIAL = "Crown";
const NIMBUS_ORBIT_SPEED = (Math.PI * 2) / 9; // one full turn every 9s
const BUST_MATERIAL = "Stone";

// Brand palette (tailwind.config.ts) — the source ships the halo in red/pink.
const GOLD = new THREE.Color("#DDD78D");

// The bust's "Stone" emissive map bakes in colored accents (a blue rim-light
// on the shoulders, a red/pink highlight on the forehead) over otherwise
// neutral-gray AO/shading. Rather than chase each accent's hue individually,
// desaturate the map outright — keeps the carved shading detail, drops every
// baked color, so the stone reads as plain gray and the gold halo is the only
// color accent on the whole piece.
function desaturateBustEmissive(mat: THREE.MeshStandardMaterial) {
  mat.onBeforeCompile = (shader) => {
    // onBeforeCompile runs BEFORE three resolves `#include <chunk>` markers,
    // so the expanded chunk body (what emissivemap_fragment.glsl.js actually
    // contains) isn't in the source yet to match against — only the include
    // directive itself is. Replace the directive with the chunk's own logic
    // plus the desaturation, instead of trying to patch its expanded output.
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <emissivemap_fragment>",
      `#ifdef USE_EMISSIVEMAP
        vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
        float luma = dot(emissiveColor.rgb, vec3(0.299, 0.587, 0.114));
        totalEmissiveRadiance *= vec3(luma);
      #endif`
    );
  };
  mat.needsUpdate = true;
}

// Sway on the whole bust — same "always animate while visible" brand motion
// used elsewhere in the hero.
const SWAY_SPEED = 0.15; // rad/s (angular frequency)
const SWAY_AMPLITUDE = THREE.MathUtils.degToRad(25);

// Frame like a portrait: size off shoulder width, then bias the vertical
// pivot up toward the head/shoulders so the pedestal below runs off the
// bottom of the canvas instead of shrinking the whole figure to fit it.
//
// Desktop keeps a fixed world-unit width (tuned by eye against the current
// hero layout). Mobile sizes as a fraction of the camera's actual viewport
// width instead: a fixed world-unit size ignores aspect ratio, and a narrow
// portrait canvas has much less visible world-width than a wide desktop one
// at the same camera distance/fov — the same fixed size that reads right on
// desktop ends up filling nearly the whole mobile screen and colliding with
// the eyebrow label above it.
const FRAME_WIDTH_DESKTOP = 2.9;
const FRAME_WIDTH_MOBILE_VIEWPORT_FRACTION = 1.05;
const FRAME_VERTICAL_BIAS = 0.68;

// On mobile the hero text block sits vertically centered in the section —
// same as the bust's own pivot — so growing the bust for more presence would
// just re-collide with the eyebrow/headline above. Shifting it down (world
// Y is up, so negative moves down) drops it into the empty space below the
// CTA buttons instead. viewport.height is roughly constant across aspect
// ratios (it only depends on camera fov/distance, not canvas width), so a
// fixed world-unit offset is fine here — unlike width, it doesn't need to
// scale with the viewport.
const MOBILE_Y_OFFSET = -1.15;

/**
 * Loads the "Rhetorician" bust (Sketchfab, CC-BY-SA-4.0, engine9 — credited
 * in the footer). The halo ("Crown") is retinted to brand gold; the bust
 * ("Stone") is desaturated to plain gray (see desaturateBustEmissive), so the
 * gold halo reads as the piece's one color accent. No added scene lights —
 * both meshes are self-illuminated via baked emissive maps, and stacking
 * real-time lights on top flattens the carved detail.
 */
export function RhetoricianScene({ mobile = false }: { mobile?: boolean }) {
  const sway = useRef<THREE.Group>(null);
  const { scene } = useGLTF(MODEL_PATH);
  const viewportWidth = useThree((s) => s.viewport.width);

  const nimbusRings = useMemo(() => {
    const rings: THREE.Mesh[] = [];
    scene.traverse((obj) => {
      if (!(obj instanceof THREE.Mesh)) return;
      const mat = obj.material as THREE.MeshStandardMaterial;
      if (mat.name === NIMBUS_MATERIAL) {
        mat.emissive = GOLD;
        mat.emissiveIntensity = 1.3;
        mat.toneMapped = false;
        rings.push(obj);
      } else if (mat.name === BUST_MATERIAL) {
        desaturateBustEmissive(mat);
      }
    });
    return rings;
  }, [scene]);

  const { scale, offset } = useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const width = mobile ? viewportWidth * FRAME_WIDTH_MOBILE_VIEWPORT_FRACTION : FRAME_WIDTH_DESKTOP;
    const s = width / (size.x || 1);
    const center = new THREE.Vector3(
      box.min.x + size.x / 2,
      box.min.y + size.y * FRAME_VERTICAL_BIAS,
      box.min.z + size.z / 2
    );
    return { scale: s, offset: center };
  }, [scene, mobile, viewportWidth]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    for (const ring of nimbusRings) ring.rotation.z = t * NIMBUS_ORBIT_SPEED;
    if (sway.current) sway.current.rotation.y = Math.sin(t * SWAY_SPEED) * SWAY_AMPLITUDE;
  });

  return (
    <group ref={sway} position={[0, mobile ? MOBILE_Y_OFFSET : 0, 0]}>
      <group scale={scale} position={[-offset.x * scale, -offset.y * scale, -offset.z * scale]}>
        <primitive object={scene} />
      </group>
    </group>
  );
}

useGLTF.preload(MODEL_PATH);
