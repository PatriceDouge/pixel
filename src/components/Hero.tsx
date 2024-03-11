import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <Container className="pb-16 pt-20 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
        Generate a pixel avatar using AI 
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-white">
      With pixel.jpg, you can generate pixel art from any image using AI.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="/create">Get started</Button>
      </div>
    </Container>
  )
}
