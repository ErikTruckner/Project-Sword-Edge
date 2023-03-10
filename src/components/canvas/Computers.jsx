import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'
import { MeshPhongMaterial } from 'three'

const Computers = () => {
  // ** REQUIRES BIN FILE, WHICH ON MY PC LOOKS LIKE A MOVIE FILE FOR SOME REASON **
  const computer = useGLTF('./reactLogo/scene.gltf')
  return (
    <mesh>
      {/* <hemisphereLight intensity={1} groundColor='blue' /> */}
      <pointLight intensity={3} color={0x3ac0ff} position={[0, 2, 3]} />
      <spotLight
        position={(-20, 50, 10)}
        angle={0.9}
        penumbra={1}
        intensity={1}
        color={0x1e2f97}
      />

      {/* THE primitive CONTAINS PROPERTIES OF GLTF */}
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -1.5, -0.5]}
        // ***THIS ROTATION SETS TO A GOOD INITIAL VIEW
        rotation={[0, -5, 0]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
