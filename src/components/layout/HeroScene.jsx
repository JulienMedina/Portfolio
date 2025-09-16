import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Stars from "../effects/Stars";

export default function HeroScene({ reducedMotion = false }) {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Stars reducedMotion={reducedMotion} />
      {!reducedMotion && (
        <EffectComposer>
          <Bloom
            intensity={1.3}
            luminanceThreshold={0.3}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>
      )}
    </Canvas>
  );
}
