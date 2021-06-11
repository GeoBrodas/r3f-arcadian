//import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Ball from '../components/three/Ball';
import Bat from '../components/three/Bat';

export default function Home() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Canvas camera={{ position: [0, 5, 12], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <spotLight position={[10, 10, 5]} />
        <spotLight position={[-10, -10, -5]} />
        <Ball />
        <Bat />
      </Canvas>
    </div>
  );
}
