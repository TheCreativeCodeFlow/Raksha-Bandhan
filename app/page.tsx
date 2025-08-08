'use client'

import { useState, useEffect } from 'react'
import { ParticleHero } from '@/components/particle-hero'
import { PersonalDedication } from '@/components/personal-dedication'
import { SharedMemories } from '@/components/shared-memories'
import { SiblingQuotes } from '@/components/sibling-quotes'
import { RakshaBandhanStory } from '@/components/raksha-bandhan-story'
import { VirtualGifts } from '@/components/virtual-gifts'
import { SoundControl } from '@/components/sound-control'
import { Heart, Sparkles, Gift } from 'lucide-react'
import { ColdHeartMemories } from '@/components/cold-heart-memories'
import { LoopingVideo } from '@/components/looping-video'

export default function RakshaBandhanGift() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-festival-yellow-50 to-festival-orange-50 overflow-x-hidden">
      {/* Sound Control */}
      <SoundControl />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <ParticleHero />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center gap-4 mb-6">
              <Gift className="w-12 h-12 text-festival-purple-600 animate-bounce" />
              <h1 className="text-4xl md:text-6xl font-extrabold text-festival-purple-800 leading-tight">
                For My Dear Sister <span className="text-festival-red-600">Error Found</span>
              </h1>
              <p className="mt-3 md:mt-4 text-festival-purple-700 text-lg md:text-xl"></p>
              <Heart className="w-12 h-12 text-festival-red-600 animate-pulse" />
            </div>
            <p className="text-xl md:text-2xl text-festival-purple-700 mb-8 font-light italic">
              "A special gift celebrating our unbreakable bond"
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-festival-yellow-400 shadow-lg">
              <p className="text-lg text-festival-red-700 font-medium">
                This website is my gift to you, dear sister. Every pixel, every animation,
                every word is crafted with love to celebrate the beautiful bond we share.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Dedication */}
      <PersonalDedication />

      {/* Raksha Bandhan Story */}
      <RakshaBandhanStory />

      {/* Sibling Quotes */}
      <SiblingQuotes />

      {/* Shared Memories */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-festival-purple-800 mb-4">
              Our Beautiful Journey
            </h2>
            <p className="text-xl text-festival-purple-600 max-w-2xl mx-auto">
              Every memory we've shared has made our bond stronger
            </p>
          </div>
          <SharedMemories />
        </div>
      </section>

      {/* Cold Heart Memories */}
      <ColdHeartMemories />

      {/* Sister Video - loops continuously */}
      <LoopingVideo />

      {/* Virtual Gifts */}
      <VirtualGifts />

      {/* Footer */}
      <footer className="py-16 px-4 bg-gradient-to-r from-festival-purple-800 to-festival-red-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart className="w-8 h-8 text-festival-orange-400 animate-pulse" />
            <span className="text-3xl font-bold">Happy Raksha Bandhan</span>
            <Sparkles className="w-8 h-8 text-festival-yellow-400 animate-bounce" />
          </div>
          <p className="text-xl opacity-90 mb-6 italic">
            "Distance means nothing when someone means everything"
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <p className="text-lg font-medium mb-2">
              With endless love and warm wishes,
            </p>
            <p className="text-2xl font-bold text-festival-yellow-300">
              Your Ruh ❤️
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
