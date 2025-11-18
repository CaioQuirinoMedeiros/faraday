'use client'
import type React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../utils/styles'

type GradientBackgroundProps = React.ComponentProps<'div'> & {
  // Animation customization
  gradients?: string[]
  animationDuration?: number
  animationDelay?: number

  // Layout customization
  enableCenterContent?: boolean

  // Visual customization
  overlay?: boolean
  overlayOpacity?: number
}

const Default_Gradients = [
  'linear-gradient(135deg, #111827 0%, #112327 100%)',
  'linear-gradient(135deg, #272311 0%, #332f1d 100%)',
  'linear-gradient(135deg, #281d33 0%, #331d2c 100%)',
  'linear-gradient(135deg, #111827 0%, #112327 100%)'
]

export function GradientBackground({
  children,
  className = '',
  gradients = Default_Gradients,
  animationDuration = 8,
  animationDelay = 0.5,
  overlay = false,
  overlayOpacity = 0.3
}: GradientBackgroundProps) {
  return (
    <div className={cn('w-full relativeoverflow-hidden', className)}>
      {/* Animated gradient background */}
      <motion.div
        className='absolute inset-0'
        style={{ background: gradients[0] }}
        animate={{ background: gradients }}
        transition={{
          delay: animationDelay,
          duration: animationDuration,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut'
        }}
      />

      <div className='absolute inset-0 bg-[url(/images/grid.svg)] bg-size-[50px] opacity-25 bg-repeat' />

      {/* Content wrapper */}
      {children && <div className={cn('relative z-10 ')}>{children}</div>}
    </div>
  )
}
