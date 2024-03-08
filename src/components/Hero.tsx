import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <Container className="pb-16 pt-20 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Generate Pixel Art with AI
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
      With pixel.jpg, you can generate pixel art from any image using AI.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="/register">Get started</Button>
      </div>
    </Container>
  )
}
