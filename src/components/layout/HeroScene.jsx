import { Canvas } from "@react-three/fiber";
import Stars from "../effects/Stars";

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Stars />
    </Canvas>
  );
}
