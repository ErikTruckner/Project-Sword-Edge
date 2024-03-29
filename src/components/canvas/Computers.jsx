import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  useAnimations,
  OrbitControls,
  Preload,
  useGLTF,
} from '@react-three/drei'

import { Perf } from 'r3f-perf'

import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
  // ** REQUIRES BIN FILE, WHICH ON MY PC LOOKS LIKE A MOVIE FILE FOR SOME REASON **
  const computer = useGLTF('./reactLogo/scene.gltf')

  const animations = useAnimations(computer.animations, computer.scene)

  const actionNames = [
    'SphereAction',
    'TorusAction1',
    'TorusAction2',
    'TorusAction3',
  ]

  useEffect(() => {
    actionNames.forEach((actionNames) => {
      const action = animations.actions[actionNames]
      action.play()
    })
  }, [])

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
        scale={isMobile ? 0.6 : 0.8}
        position={isMobile ? [0, -0.5, 0] : [0, -1, 0]}
        // ***THIS ROTATION SETS TO A GOOD INITIAL VIEW
        rotation={[0, -5, 0]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches)

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <Canvas
      // frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}>
      {/* <Perf position='bottom-right' /> */}
      <Suspense fallback={<></>}>
        <OrbitControls />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
