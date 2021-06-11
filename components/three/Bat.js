import { useBox } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';

export default function Bat() {
  const [ref, api] = useBox(() => ({ args: [2, 0.5, 1] }));
  useFrame((state) => {
    api.position.set(
      (state.mouse.x * state.viewport.width) / 2,
      -state.viewport.height / 2,
      0
    );
    api.rotation.set(0, 0, state.mouse.x * (Math.PI / 5));
  });
  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={[2, 0.5, 1]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}

//args -- height, width, breadth
//viewport takes full width of page

//resititution -- physics of how strong an object hit on the surface and htis back
