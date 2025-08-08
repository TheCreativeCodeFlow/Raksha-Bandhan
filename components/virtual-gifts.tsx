'use client'

import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Gift, Heart, Sparkles, Star, Flower, Crown } from 'lucide-react'

const virtualGifts = [
  {
    id: 1,
    name: "Bouquet of Love",
    icon: Flower,
    color: "from-festival-red-500 to-festival-orange-500",
    message: "A beautiful bouquet filled with all my love and warm wishes for you!",
    animation: "animate-bounce"
  },
  {
    id: 2,
    name: "Crown of Appreciation",
    icon: Crown,
    color: "from-festival-yellow-500 to-festival-orange-500",
    message: "You deserve to be treated like the queen you are! This crown represents how much I admire you.",
    animation: "animate-pulse"
  },
  {
    id: 3,
    name: "Box of Memories",
    icon: Gift,
    color: "from-festival-purple-500 to-festival-red-500",
    message: "A treasure box filled with all our beautiful memories and the promise of many more to come!",
    animation: "animate-spin"
  },
  {
    id: 4,
    name: "Constellation of Dreams",
    icon: Star,
    color: "from-festival-orange-500 to-festival-yellow-500",
    message: "May all your dreams shine as bright as the stars in the sky!",
    animation: "animate-ping"
  },
  {
    id: 5,
    name: "Heart Full of Wishes",
    icon: Heart,
    color: "from-festival-red-500 to-festival-purple-500",
    message: "My heart is full of wishes for your happiness, success, and all the joy life can bring!",
    animation: "animate-pulse"
  },
  {
    id: 6,
    name: "Magic Sparkles",
    icon: Sparkles,
    color: "from-festival-purple-500 to-festival-orange-500",
    message: "Sprinkling some magic into your life! May every day be filled with wonder and joy!",
    animation: "animate-bounce"
  }
]

export function VirtualGifts() {
  const [openedGifts, setOpenedGifts] = useState<number[]>([])
  const [currentlyOpening, setCurrentlyOpening] = useState<number | null>(null)

  const openGift = (giftId: number) => {
    if (openedGifts.includes(giftId)) return

    setCurrentlyOpening(giftId)
    
    setTimeout(() => {
      setOpenedGifts(prev => [...prev, giftId])
      setCurrentlyOpening(null)
    }, 1000)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-festival-red-50 to-festival-yellow-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gift className="w-8 h-8 text-festival-red-600 animate-bounce" />
            <h2 className="text-4xl md:text-5xl font-bold text-festival-red-700">
              Virtual Gifts for You
            </h2>
            <Gift className="w-8 h-8 text-festival-red-600 animate-bounce" />
          </div>
          <p className="text-xl text-festival-red-600 max-w-2xl mx-auto">
            Special gifts from my heart to yours. Click on each gift to unwrap it!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {virtualGifts.map((gift) => {
            const isOpened = openedGifts.includes(gift.id)
            const isOpening = currentlyOpening === gift.id
            
            return (
              <Card
                key={gift.id}
                className={`cursor-pointer transition-all duration-500 hover:scale-105 border-4 ${
                  isOpened 
                    ? 'border-festival-yellow-400 shadow-2xl' 
                    : 'border-festival-orange-200 hover:border-festival-orange-300 shadow-lg'
                }`}
                onClick={() => openGift(gift.id)}
              >
                <CardContent className="p-6 text-center">
                  {!isOpened ? (
                    // Unopened Gift
                    <div className="space-y-4">
                      <div className={`w-20 h-20 mx-auto bg-gradient-to-r ${gift.color} rounded-2xl flex items-center justify-center shadow-lg ${
                        isOpening ? 'animate-spin' : 'hover:animate-pulse'
                      }`}>
                        <Gift className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-festival-purple-800">
                        {gift.name}
                      </h3>
                      <p className="text-festival-purple-600">
                        {isOpening ? 'Opening...' : 'Click to unwrap!'}
                      </p>
                    </div>
                  ) : (
                    // Opened Gift
                    <div className="space-y-4 animate-fadeIn">
                      <div className={`w-20 h-20 mx-auto bg-gradient-to-r ${gift.color} rounded-2xl flex items-center justify-center shadow-lg ${gift.animation}`}>
                        {React.createElement(gift.icon, {
                          className: "w-10 h-10 text-white"
                        })}
                      </div>
                      <h3 className="text-xl font-bold text-festival-red-700">
                        {gift.name}
                      </h3>
                      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border-2 border-festival-yellow-300">
                        <p className="text-festival-purple-700 italic">
                          {gift.message}
                        </p>
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <Heart className="w-4 h-4 text-festival-red-500" />
                        <span className="text-sm text-festival-red-600 font-medium">Opened with love</span>
                        <Heart className="w-4 h-4 text-festival-red-500" />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Progress Indicator */}
        <div className="mt-12 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-festival-yellow-400 inline-block">
            <p className="text-lg font-semibold text-festival-purple-800 mb-2">
              Gifts Opened: {openedGifts.length} / {virtualGifts.length}
            </p>
            <div className="w-64 h-3 bg-festival-orange-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-festival-red-500 to-festival-orange-500 rounded-full transition-all duration-500"
                style={{ width: `${(openedGifts.length / virtualGifts.length) * 100}%` }}
              ></div>
            </div>
            {openedGifts.length === virtualGifts.length && (
              <p className="text-festival-red-600 font-medium mt-3 animate-bounce">
                🎉 All gifts opened! You're amazing! 🎉
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
