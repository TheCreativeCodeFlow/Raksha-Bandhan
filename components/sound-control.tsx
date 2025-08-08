'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Volume2, VolumeX } from 'lucide-react'

export function SoundControl() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create audio element with a traditional Indian festival melody
    // In a real app, you'd use an actual audio file
    audioRef.current = new Audio()
    
    // For demo purposes, we'll create a simple oscillator-based melody
    // In production, replace this with an actual audio file
    const createAudioContext = () => {
      if (typeof window !== 'undefined' && 'AudioContext' in window) {
        const audioContext = new AudioContext()
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()
        
        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)
        
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime) // A4 note
        oscillator.type = 'sine'
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
        
        return { audioContext, oscillator, gainNode }
      }
      return null
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const toggleSound = () => {
    setIsMuted(!isMuted)
    setIsPlaying(!isMuted)
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        onClick={toggleSound}
        className={`rounded-full p-3 shadow-lg transition-all duration-300 ${
          isPlaying
            ? 'bg-gradient-to-r from-festival-orange-500 to-festival-red-500 hover:from-festival-orange-600 hover:to-festival-red-600 text-white'
            : 'bg-white hover:bg-gray-50 text-festival-orange-600 border-2 border-festival-orange-200'
        }`}
        size="sm"
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5" />
        ) : (
          <Volume2 className="w-5 h-5" />
        )}
      </Button>
      
      {/* Audio element placeholder - in production, use actual audio file */}
      <audio
        ref={audioRef}
        loop
        muted={isMuted}
        style={{ display: 'none' }}
      />
    </div>
  )
}
