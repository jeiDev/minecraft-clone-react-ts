import './App.css'

import React from 'react'

import { Canvas } from "@react-three/fiber"
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground'


function App() {
  return (
    <React.Fragment>
      <Canvas>
        <Sky sunPosition={[100,100, 20]} />
        <ambientLight intensity={0.5} />
        <Physics>
          <Ground />
        </Physics>
      </Canvas>
    </React.Fragment>
  );
}

export default App;
