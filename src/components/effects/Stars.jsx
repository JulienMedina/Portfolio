/* eslint-disable react/no-unknown-property */
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";

export default function Stars(props) {
  const ref = useRef();

  // Générer positions en 3D ou 2D suivant ce que tu veux (inSphere, inCircle…)
  const positions = useMemo(() => {
    return random.inCircle(new Float32Array(2500 * 3), { radius: 0.7 });
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      // Petit mouvement
      ref.current.rotation.x -= delta * 0.02;
      ref.current.rotation.y -= delta * 0.03;
    }
  });

  return (
    <group rotation={[0, 0, 0]}>
      <Points
        ref={ref}
        positions={positions}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#00f3ff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
