'use client'

import { useEffect, useRef, useState } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  hue: number
}

export function ParticleHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const updateDimensions = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      setDimensions({ width: rect.width, height: rect.height })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    // Initialize particles with festival colors
    const initParticles = () => {
      particlesRef.current = []
      const festivalHues = [
        300, // Purple
        15,  // Red-orange
        30,  // Orange
        50   // Yellow
      ]
      
      for (let i = 0; i < 60; i++) {
        particlesRef.current.push({
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 4 + 2,
          opacity: Math.random() * 0.8 + 0.3,
          hue: festivalHues[Math.floor(Math.random() * festivalHues.length)]
        })
      }
    }

    initParticles()

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    }

    canvas.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height)

      particlesRef.current.forEach((particle, index) => {
        // Mouse interaction
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 120) {
          const force = (120 - distance) / 120
          particle.vx += (dx / distance) * force * 0.015
          particle.vy += (dy / distance) * force * 0.015
        }

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Boundary check
        if (particle.x < 0 || particle.x > dimensions.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > dimensions.height) particle.vy *= -1

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(dimensions.width, particle.x))
        particle.y = Math.max(0, Math.min(dimensions.height, particle.y))

        // Apply friction
        particle.vx *= 0.98
        particle.vy *= 0.98

        // Draw particle
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = `hsl(${particle.hue}, 80%, 65%)`
        ctx.shadowBlur = 15
        ctx.shadowColor = `hsl(${particle.hue}, 80%, 65%)`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()

        // Draw connections
        particlesRef.current.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.save()
            ctx.globalAlpha = (100 - distance) / 100 * 0.4
            ctx.strokeStyle = `hsl(${(particle.hue + otherParticle.hue) / 2}, 70%, 60%)`
            ctx.lineWidth = 1.5
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
            ctx.restore()
          }
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', updateDimensions)
      canvas.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [dimensions.width, dimensions.height])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ background: 'transparent' }}
    />
  )
}
