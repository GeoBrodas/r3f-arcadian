export default function Ball() {
  return (
    <mesh>
      <sphereBufferGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}
