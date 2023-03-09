import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Box from './Box'
import ComplexSolarSystem from './ComplexSolarSystem'
import { Stars } from '@react-three/drei'

export default function App() {
  console.log(Canvas)

  return (
    <Canvas>
      <color args={['#000000']} attach='background' />
      <Stars />
      {/* <ambientLight /> */}
      <pointLight intensity={0.9} position={[0, 0, 0]} />
      <Box />

      <OrbitControls />
    </Canvas>
  )
}
