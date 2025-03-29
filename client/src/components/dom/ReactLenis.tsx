'use client'

import { ReactLenis as LenisWrapper } from '@studio-freight/react-lenis'

export const ReactLenis = ({ children }) => {
  // @ts-ignore
  return <LenisWrapper root>{children}</LenisWrapper>
}
