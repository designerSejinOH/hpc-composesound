'use client'

import { Suspense, useEffect, useState } from 'react'
import { Common, View } from '@/components/canvas/View'
import { Box, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

export default function Page() {
  const [isloading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <div className='w-screen h-dvh flex flex-col items-center overflow-hidden relative '>
      <View perf className='flex h-full w-full  flex-col items-center justify-center relative'>
        <PerspectiveCamera makeDefault fov={40} position={[0, 0, 10]} near={0.1} far={1000} />
        <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={0} maxDistance={100} minDistance={5} />
        <Box args={[1, 1, 1]} scale={1} position={[0, 0, 0]}>
          <meshStandardMaterial color='orange' />
        </Box>
        <axesHelper args={[1]} scale={1} position={[0, 0, 0]} />
        <gridHelper args={[100, 100]} scale={1} position={[0, 0, 0]} />
      </View>
    </div>
  )
}
