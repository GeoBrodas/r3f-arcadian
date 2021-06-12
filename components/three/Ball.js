import { usePlane, useSphere } from '@react-three/cannon';
import { useThree } from '@react-three/fiber';

export default function Ball() {
  const { viewport } = useThree();
  const [ref, api] = useSphere(() => ({
    args: 0.5,
    mass: 1,
    onCollide: () => {
      api.velocity.set(0, 20, 0);
    },
  }));

  usePlane(() => ({
    position: [0, -viewport.height, 0],
    rotation: [-Math.PI / 2, 0, 0],
    onCollide: () => {
      api.position.set(0, 0, 0);
      api.velocity.set(0, 10, 0);
    },
  }));

  return (
    <mesh ref={ref}>
      <sphereBufferGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

//physics -- useSphere wants to know whats the radius in args--
