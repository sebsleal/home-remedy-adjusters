import Lenis from '@studio-freight/lenis'

export function createLenis(): Lenis {
  return new Lenis({
    duration: 0.8,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1.2,
    touchMultiplier: 2,
  })
}
