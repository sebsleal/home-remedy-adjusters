import Lenis from '@studio-freight/lenis'

export function createLenis(): Lenis {
  return new Lenis({
    duration: 0.4,
    easing: (t: number) => 1 - Math.pow(1 - t, 3),
    smoothWheel: true,
    wheelMultiplier: 1.8,
    touchMultiplier: 2,
  })
}
