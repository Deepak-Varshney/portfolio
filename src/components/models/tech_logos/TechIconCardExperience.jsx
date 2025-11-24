import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import * as THREE from "three";

const lightingPresets = {
  default: {
    ambient: 0.3,
    directional: { position: [5, 5, 5], intensity: 1, color: "#ffffff" },
    spot: { position: [10, 15, 10], angle: 0.3, penumbra: 1, intensity: 2 },
    float: { speed: 5.5, rotationIntensity: 0.5, floatIntensity: 0.9 },
  },
  "Next.js & React UI": {
    ambient: 0.35,
    directional: { position: [4, 6, 4], intensity: 1.2, color: "#61dafb" },
    spot: { position: [8, 12, 6], angle: 0.35, penumbra: 0.9, intensity: 2.2 },
    float: { speed: 6, rotationIntensity: 0.55, floatIntensity: 1 },
  },
  "TypeScript & State Patterns": {
    ambient: 0.32,
    directional: { position: [5, 5, 3], intensity: 1.1, color: "#3178c6" },
    spot: { position: [9, 14, 6], angle: 0.28, penumbra: 1, intensity: 2.3 },
    float: { speed: 5.8, rotationIntensity: 0.6, floatIntensity: 0.95 },
  },
  "Node.js & Express APIs": {
    ambient: 0.33,
    directional: { position: [3, 6, 5], intensity: 1.15, color: "#74ba65" },
    spot: { position: [8, 12, 10], angle: 0.32, penumbra: 1, intensity: 2.4 },
    float: { speed: 5.2, rotationIntensity: 0.5, floatIntensity: 0.85 },
  },
  "GitHub, CI & Reviews": {
    ambient: 0.28,
    directional: { position: [4, 4, 6], intensity: 1, color: "#f5f5f5" },
    spot: { position: [11, 13, 9], angle: 0.3, penumbra: 0.8, intensity: 2 },
    float: { speed: 5, rotationIntensity: 0.45, floatIntensity: 0.8 },
  },
};

const materialTweaks = {
  "Three.js Storytelling": { meshName: "Object_5", color: "#ffffff" },
};

const TechIconCardExperience = ({ model }) => {
  const scene = useGLTF(model.modelPath);
  const preset = useMemo(
    () => lightingPresets[model.name] ?? lightingPresets.default,
    [model.name]
  );

  useEffect(() => {
    const tweak = materialTweaks[model.name];
    if (!tweak) return;

    scene.scene.traverse((child) => {
      if (child.isMesh && child.name === tweak.meshName) {
        child.material = new THREE.MeshStandardMaterial({
          color: tweak.color,
        });
      }
    });
  }, [model.name, scene]);

  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 30 }}>
      <ambientLight intensity={preset.ambient} />
      <directionalLight {...preset.directional} />
      <spotLight {...preset.spot} />
      <Environment preset="city" />

      <Float
        speed={preset.float.speed}
        rotationIntensity={preset.float.rotationIntensity}
        floatIntensity={preset.float.floatIntensity}
      >
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default TechIconCardExperience;
