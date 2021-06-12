//import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';

import Ball from '../components/three/Ball';
import Bat from '../components/three/Bat';
import Enemy from '../components/three/Enemy';

export default function Home() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 5, 12], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <spotLight position={[10, 10, 5]} />
        <spotLight position={[-10, -10, -5]} />
        <Physics
          gravity={[0, -25, 0]}
          defaultContactMaterial={{ restitution: 0.3 }}
        >
          <Ball />
          <Bat />
          <Enemy color="orange" position={[-2, -1, 0]} rotation={[0, 0, -3]} />
          <Enemy color="black" position={[-6, 1, 0]} rotation={[0, 0, -3.3]} />
          <Enemy color="hotpink" position={[5, -1, 0]} rotation={[0, 0, -3]} />
        </Physics>
      </Canvas>
    </div>
  );
}

//gravity in the direction of y-axis here +--upwards && -ve -- downwards
