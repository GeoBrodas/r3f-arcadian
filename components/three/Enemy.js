import { useBox } from '@react-three/cannon';

export default function Enemy({ color, ...props }) {
  const [ref, api] = useBox(() => ({
    args: [2, 0.5, 1],
    ...props,
  }));

  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={[2, 0.5, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
