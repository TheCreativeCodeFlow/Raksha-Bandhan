'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Sparkles, RotateCcw, Heart, Crown, Star, Flower2 } from 'lucide-react'

const rakhiDesigns = [
  { 
    id: 1, 
    name: 'Golden Marigold', 
    color: 'bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-500', 
    pattern: '🌼',
    description: 'Traditional golden rakhi with marigold motifs',
    borderColor: 'border-yellow-400',
    shadowColor: 'shadow-yellow-500/50',
    threads: ['bg-yellow-400', 'bg-orange-400', 'bg-red-400']
  },
  { 
    id: 2, 
    name: 'Royal Crimson', 
    color: 'bg-gradient-to-br from-red-400 via-red-500 to-pink-600', 
    pattern: '💎',
    description: 'Majestic red rakhi with precious gems',
    borderColor: 'border-red-400',
    shadowColor: 'shadow-red-500/50',
    threads: ['bg-red-500', 'bg-pink-500', 'bg-rose-400']
  },
  { 
    id: 3, 
    name: 'Emerald Garden', 
    color: 'bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600', 
    pattern: '🍃',
    description: 'Fresh green rakhi representing growth and prosperity',
    borderColor: 'border-emerald-400',
    shadowColor: 'shadow-emerald-500/50',
    threads: ['bg-green-500', 'bg-emerald-500', 'bg-teal-400']
  },
  { 
    id: 4, 
    name: 'Sapphire Dreams', 
    color: 'bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600', 
    pattern: '⭐',
    description: 'Royal blue rakhi for strength and wisdom',
    borderColor: 'border-blue-400',
    shadowColor: 'shadow-blue-500/50',
    threads: ['bg-blue-500', 'bg-indigo-500', 'bg-purple-400']
  },
  { 
    id: 5, 
    name: 'Rose Blossom', 
    color: 'bg-gradient-to-br from-pink-300 via-pink-400 to-rose-500', 
    pattern: '🌸',
    description: 'Delicate pink rakhi filled with sisterly affection',
    borderColor: 'border-pink-400',
    shadowColor: 'shadow-pink-500/50',
    threads: ['bg-pink-500', 'bg-rose-500', 'bg-fuchsia-400']
  },
  { 
    id: 6, 
    name: 'Silver Moonlight', 
    color: 'bg-gradient-to-br from-gray-300 via-slate-400 to-zinc-500', 
    pattern: '✨',
    description: 'Elegant silver rakhi for eternal bond',
    borderColor: 'border-gray-400',
    shadowColor: 'shadow-gray-500/50',
    threads: ['bg-gray-400', 'bg-slate-400', 'bg-zinc-400']
  },
  { 
    id: 7, 
    name: 'Purple Majesty', 
    color: 'bg-gradient-to-br from-purple-400 via-violet-500 to-purple-600', 
    pattern: '👑',
    description: 'Royal purple rakhi symbolizing nobility',
    borderColor: 'border-purple-400',
    shadowColor: 'shadow-purple-500/50',
    threads: ['bg-purple-500', 'bg-violet-500', 'bg-indigo-400']
  },
  { 
    id: 8, 
    name: 'Sunset Orange', 
    color: 'bg-gradient-to-br from-orange-300 via-orange-400 to-red-500', 
    pattern: '🔥',
    description: 'Vibrant orange rakhi like a beautiful sunset',
    borderColor: 'border-orange-400',
    shadowColor: 'shadow-orange-500/50',
    threads: ['bg-orange-500', 'bg-red-500', 'bg-yellow-400']
  }
]

export function VirtualRakhiTying() {
  const [selectedRakhi, setSelectedRakhi] = useState<number | null>(null)
  const [tiedRakhi, setTiedRakhi] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [rakhiCount, setRakhiCount] = useState(0)

  const handleRakhiSelect = (rakhiId: number) => {
    setSelectedRakhi(rakhiId)
  }

  const handleTieRakhi = async () => {
    if (!selectedRakhi) return

    setIsAnimating(true)
    
    setTimeout(() => {
      setTiedRakhi(selectedRakhi)
      setIsAnimating(false)
      setShowMessage(true)
      setRakhiCount(prev => prev + 1)
      
      setTimeout(() => setShowMessage(false), 4000)
    }, 2000)
  }

  const resetRakhi = () => {
    setTiedRakhi(null)
    setSelectedRakhi(null)
    setShowMessage(false)
    setIsAnimating(false)
  }

  const selectedRakhiDesign = rakhiDesigns.find(r => r.id === selectedRakhi)
  const tiedRakhiDesign = rakhiDesigns.find(r => r.id === tiedRakhi)

  return (
    <div className="max-w-7xl mx-auto">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl text-fuchsia-500 animate-spin-slow">🌸</div>
        <div className="absolute top-20 right-20 text-5xl text-emerald-500 animate-bounce-slow">🍃</div>
        <div className="absolute bottom-20 left-20 text-4xl text-gold-500 animate-pulse-slow">✨</div>
        <div className="absolute bottom-10 right-10 text-6xl text-red-500 animate-spin-slow">🌼</div>
      </div>

      {/* Rakhi Selection */}
      <div className="mb-16 relative">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-fuchsia-700 mb-4 flex items-center justify-center gap-3">
            <Flower2 className="w-8 h-8 text-pink-500" />
            Choose Your Sacred Rakhi
            <Flower2 className="w-8 h-8 text-pink-500" />
          </h3>
          <p className="text-lg text-fuchsia-600">Each rakhi is crafted with love and carries special blessings</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {rakhiDesigns.map((rakhi) => (
            <Card
              key={rakhi.id}
              className={`cursor-pointer transition-all duration-500 hover:scale-110 transform ${
                selectedRakhi === rakhi.id
                  ? `ring-6 ring-fuchsia-400 shadow-2xl ${rakhi.shadowColor} border-4 ${rakhi.borderColor} scale-105`
                  : `hover:shadow-xl border-2 border-emerald-200 hover:${rakhi.shadowColor}`
              } bg-gradient-to-br from-white to-cream-50`}
              onClick={() => handleRakhiSelect(rakhi.id)}
            >
              <CardContent className="p-6 text-center relative overflow-hidden">
                {/* Decorative corner elements */}
                <div className="absolute top-2 left-2 text-gold-400 opacity-30">
                  <Star className="w-4 h-4" />
                </div>
                <div className="absolute top-2 right-2 text-fuchsia-400 opacity-30">
                  <Sparkles className="w-4 h-4" />
                </div>
                
                {/* Main Rakhi Design */}
                <div className={`relative w-24 h-24 mx-auto rounded-full ${rakhi.color} flex items-center justify-center text-4xl mb-4 shadow-2xl ${rakhi.shadowColor} border-4 border-white transform transition-all duration-300 hover:rotate-12`}>
                  {/* Inner circle */}
                  <div className="absolute inset-2 bg-white/20 rounded-full"></div>
                  <div className="absolute inset-3 bg-white/10 rounded-full"></div>
                  
                  {/* Pattern */}
                  <span className="relative z-10 drop-shadow-lg">{rakhi.pattern}</span>
                  
                  {/* Decorative threads */}
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-1 bg-gradient-to-r from-transparent to-white/50 rounded-full"></div>
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-1 bg-gradient-to-l from-transparent to-white/50 rounded-full"></div>
                </div>
                
                <h4 className="text-lg font-bold text-emerald-800 mb-2">{rakhi.name}</h4>
                <p className="text-sm text-emerald-600 leading-relaxed">{rakhi.description}</p>
                
                {selectedRakhi === rakhi.id && (
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-400/10 to-emerald-400/10 rounded-lg animate-pulse"></div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Virtual Wrist and Tying Area */}
      <div className="text-center mb-12">
        <Card className="inline-block border-6 border-gold-400 shadow-2xl bg-gradient-to-br from-cream-50 via-gold-50 to-orange-50 relative overflow-hidden">
          <CardContent className="p-12 relative">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 text-4xl text-fuchsia-500 animate-spin-slow">🌸</div>
              <div className="absolute top-4 right-4 text-4xl text-emerald-500 animate-bounce-slow">🍃</div>
              <div className="absolute bottom-4 left-4 text-3xl text-gold-500 animate-pulse">✨</div>
              <div className="absolute bottom-4 right-4 text-4xl text-red-500 animate-spin-slow">🌼</div>
            </div>

            <div className="relative z-10">
              {/* Brother's Wrist */}
              <div className="relative w-96 h-48 bg-gradient-to-r from-amber-200 via-orange-100 to-amber-200 rounded-full shadow-2xl border-6 border-amber-400 mx-auto mb-8 overflow-hidden">
                {/* Wrist texture and details */}
                <div className="absolute inset-4 bg-gradient-to-r from-amber-100 via-orange-50 to-amber-100 rounded-full shadow-inner"></div>
                <div className="absolute inset-6 bg-gradient-to-r from-amber-50 via-white to-amber-50 rounded-full shadow-inner opacity-80"></div>
                
                {/* Wrist lines for realism */}
                <div className="absolute top-1/3 left-8 right-8 h-px bg-amber-300 opacity-30"></div>
                <div className="absolute bottom-1/3 left-8 right-8 h-px bg-amber-300 opacity-30"></div>
                
                {/* Tied Rakhi */}
                {tiedRakhi && tiedRakhiDesign && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {/* Main Rakhi */}
                    <div className={`relative w-32 h-16 ${tiedRakhiDesign.color} rounded-full flex items-center justify-center text-3xl shadow-2xl ${tiedRakhiDesign.shadowColor} border-4 border-white animate-pulse`}>
                      <div className="absolute inset-2 bg-white/20 rounded-full"></div>
                      <span className="relative z-10 drop-shadow-lg">{tiedRakhiDesign.pattern}</span>
                    </div>
                    
                    {/* Colorful Rakhi threads */}
                    {tiedRakhiDesign.threads.map((threadColor, index) => (
                      <div
                        key={index}
                        className={`absolute top-1/2 transform -translate-y-1/2 h-2 ${threadColor} rounded-full shadow-lg`}
                        style={{
                          left: `${-8 - index * 2}px`,
                          right: `${-8 - index * 2}px`,
                          zIndex: 10 - index,
                          opacity: 0.8 - index * 0.1
                        }}
                      ></div>
                    ))}
                    
                    {/* Thread ends */}
                    <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-gold-400 to-yellow-500 rounded-full shadow-lg animate-bounce"></div>
                    <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-gold-400 to-yellow-500 rounded-full shadow-lg animate-bounce"></div>
                    
                    {/* Sparkle effects */}
                    <div className="absolute -top-4 -left-4 text-yellow-400 animate-ping">✨</div>
                    <div className="absolute -top-4 -right-4 text-pink-400 animate-ping">💫</div>
                    <div className="absolute -bottom-4 -left-4 text-emerald-400 animate-ping">⭐</div>
                    <div className="absolute -bottom-4 -right-4 text-fuchsia-400 animate-ping">🌟</div>
                  </div>
                )}

                {/* Animation overlay */}
                {isAnimating && selectedRakhiDesign && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-28 h-28 ${selectedRakhiDesign.color} rounded-full flex items-center justify-center text-4xl animate-spin shadow-2xl border-4 border-white`}>
                      {selectedRakhiDesign.pattern}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-400/30 to-emerald-400/30 rounded-full animate-pulse"></div>
                    
                    {/* Tying animation effects */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent animate-pulse"></div>
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent animate-ping"></div>
                  </div>
                )}
              </div>

              {/* Success Message */}
              {showMessage && (
                <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-500 via-fuchsia-500 to-gold-500 text-white px-10 py-6 rounded-3xl shadow-2xl animate-bounce border-4 border-white">
                  <div className="flex items-center gap-4">
                    <Heart className="w-8 h-8 animate-pulse" />
                    <span className="font-bold text-xl">🎉 Sacred Promise Sealed! Happy Raksha Bandhan! 🎉</span>
                    <Sparkles className="w-8 h-8 animate-spin" />
                  </div>
                  <div className="text-center mt-2 text-lg opacity-90">
                    "May this thread protect you always, dear brother"
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-center gap-8 mt-20">
          {!tiedRakhi ? (
            <Button
              onClick={handleTieRakhi}
              disabled={!selectedRakhi || isAnimating}
              className="bg-gradient-to-r from-fuchsia-600 via-pink-500 to-emerald-600 hover:from-fuchsia-700 hover:via-pink-600 hover:to-emerald-700 text-white font-bold px-12 py-6 text-2xl disabled:opacity-50 shadow-2xl border-4 border-white transform transition-all duration-300 hover:scale-105 rounded-2xl"
            >
              {isAnimating ? (
                <>
                  <div className="animate-spin rounded-full h-8 w-8 border-b-4 border-white mr-4"></div>
                  Tying with Sacred Love...
                </>
              ) : (
                <>
                  <Heart className="w-8 h-8 mr-4 animate-pulse" />
                  Tie the Sacred Rakhi
                  <Sparkles className="w-8 h-8 ml-4 animate-bounce" />
                </>
              )}
            </Button>
          ) : (
            <Button
              onClick={resetRakhi}
              className="bg-gradient-to-r from-emerald-600 via-teal-500 to-fuchsia-600 hover:from-emerald-700 hover:via-teal-600 hover:to-fuchsia-700 text-white font-bold px-12 py-6 text-2xl shadow-2xl border-4 border-white transform transition-all duration-300 hover:scale-105 rounded-2xl"
            >
              <RotateCcw className="w-8 h-8 mr-4 animate-spin" />
              Tie Another Beautiful Rakhi
              <Crown className="w-8 h-8 ml-4 animate-bounce" />
            </Button>
          )}
        </div>

        {/* Enhanced Instructions and Stats */}
        <div className="mt-12 space-y-6">
          <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-3xl p-8 border-4 border-fuchsia-200 shadow-xl">
            <p className="text-emerald-800 text-2xl font-bold mb-4">
              {!selectedRakhi
                ? "✨ Select a beautiful rakhi design to begin the sacred ceremony ✨"
                : !tiedRakhi
                ? `🌟 Perfect choice! Click 'Tie the Sacred Rakhi' to complete the ritual 🌟`
                : `🎉 Magnificent! You've tied ${rakhiCount} sacred rakhi${rakhiCount > 1 ? 's' : ''} with pure love! 🎉`}
            </p>
            
            {selectedRakhi && selectedRakhiDesign && !tiedRakhi && (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gold-300 inline-block">
                <p className="text-fuchsia-700 font-bold text-lg">
                  Selected: {selectedRakhiDesign.name} ✨
                </p>
                <p className="text-emerald-600 italic">
                  {selectedRakhiDesign.description}
                </p>
              </div>
            )}
            
            {tiedRakhi && tiedRakhiDesign && (
              <div className="bg-gradient-to-r from-gold-100 to-yellow-100 rounded-2xl p-6 border-4 border-gold-400 shadow-lg">
                <p className="text-emerald-800 font-bold text-xl mb-2">
                  🙏 Sacred Blessing Bestowed 🙏
                </p>
                <p className="text-fuchsia-700 font-semibold text-lg">
                  "With this {tiedRakhiDesign.name}, I tie not just a thread, but my eternal love and protection around your wrist. May you always be blessed with happiness, success, and good health."
                </p>
              </div>
            )}
          </div>

          {/* Rakhi Counter */}
          {rakhiCount > 0 && (
            <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl p-6 border-4 border-emerald-300 shadow-lg inline-block">
              <div className="flex items-center gap-3">
                <Crown className="w-8 h-8 text-gold-600" />
                <span className="text-2xl font-bold text-emerald-800">
                  Sacred Rakhis Tied: {rakhiCount}
                </span>
                <Heart className="w-8 h-8 text-fuchsia-600 animate-pulse" />
              </div>
              <p className="text-emerald-700 mt-2 italic">
                Each rakhi strengthens our eternal bond! 💕
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
