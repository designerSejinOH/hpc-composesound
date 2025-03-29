'use client'

import { Suspense, useEffect, useState } from 'react'
import { View } from '@/components/canvas/View'
import { Box } from '@react-three/drei'
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
      <View orbit perf className='flex h-full w-full  flex-col items-center justify-center relative'>
        <Box args={[1, 1, 1]} scale={0.5} position={[0, 0, 0]} />
      </View>
    </div>
  )
}
