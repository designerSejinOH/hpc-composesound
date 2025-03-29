'use client'

import { Suspense, useEffect, useRef, useState } from 'react'
import { Common, View } from '@/components/canvas/View'
import { Box, ContactShadows, OrbitControls, PerspectiveCamera, TransformControls, useCursor } from '@react-three/drei'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import { proxy, useSnapshot } from 'valtio'

export default function Page() {
  const [isloading, setIsLoading] = useState(true)

  const mesh = useRef()

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <div className='w-screen h-dvh flex flex-col items-center overflow-hidden relative '>
      <View perf className='flex h-full w-full  flex-col items-center justify-center relative'>
        <PerspectiveCamera makeDefault fov={40} position={[0, 0, 10]} near={0.1} far={1000} />
        <OrbitControls makeDefault maxPolarAngle={Math.PI / 2.5} minPolarAngle={0} maxDistance={100} minDistance={5} />
        <Box ref={mesh} args={[1, 1, 1]} scale={1} position={[0, 0, 0]}>
          <meshStandardMaterial color='orange' />
        </Box>
        <TransformControls object={mesh} mode='translate' />
        <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, -35, 0]}
          opacity={0.25}
          width={200}
          height={200}
          blur={1}
          far={50}
        />
        <axesHelper args={[1]} scale={1} position={[0, 0, 0]} />
        <gridHelper args={[100, 100]} scale={1} position={[0, 0, 0]} />
      </View>
    </div>
  )
}
