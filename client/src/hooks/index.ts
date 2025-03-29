'use client'

import { useState, useEffect, useRef } from 'react'

export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera
    const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i

    setIsMobile(mobileRegex.test(userAgent))
  }, [])

  return isMobile
}

// 스크롤 금지 훅
export const usePreventScroll = (isPrevent: boolean) => {
  useEffect(() => {
    if (!isPrevent) return // isPrevent가 false이면 아무것도 하지 않음

    if (typeof window !== 'undefined') {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'

      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [isPrevent]) // isPrevent 값이 변경될 때 실행됨
}
