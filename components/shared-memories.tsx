'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Heart, Star } from 'lucide-react'

const memories = [
  {
    id: 1,
    title: "My Guardian Angel",
    content: "From the day I was born, you've been my protector. Remember how you used to check under my bed for monsters? You made me feel safe in a world that seemed so big and scary.",
    image: "/Personal1.jpg",
    emotion: "💙"
  },
  {
    id: 2,
    title: "Midnight Conversations",
    content: "Those late-night talks when we shared our deepest secrets, biggest dreams, and wildest fears. You listened without judgment and always knew exactly what to say.",
    image: "/personal2.jpg",
    emotion: "🌙"
  },
  {
    id: 3,
    title: "Partners in Crime",
    content: "Yes, we got into trouble together, but we also learned together. You taught me to be brave, to take risks, and that it's okay to make mistakes as long as we learn from them.",
    image: "/personal3.jpg",
    emotion: "😄"
  },
  {
    id: 4,
    title: "Festival Traditions",
    content: "Every Raksha Bandhan was special because of you. The way you'd sit patiently while I tied the rakhi, then surprise me with the most thoughtful gifts. Those moments are pure gold.",
    image: "/personal4.jpg",
    emotion: "🎉"
  },
  {
    id: 5,
    title: "Growing Up Together",
    content: "We've shared everything - toys, secrets, dreams, and even fights. But through it all, we've grown into the people we are today, and I couldn't have asked for a better companion on this journey.",
    image: "/personal5.jpg",
    emotion: "🌱"
  },
  {
    id: 6,
    title: "My Constant Support",
    content: "Through every challenge, every celebration, every milestone - you've been my cheerleader, my advisor, and my friend. Thank you for believing in me even when I didn't believe in myself.",
    image: "/personal6.jpg",
    emotion: "🤗"
  },
  {
    id: 7,
    title: "Distance Can't Break Us",
    content: "Even when miles separate us, our bond remains unbreakable. Every phone call, every message, every shared memory keeps us connected across any distance.",
    image: "/personal7.jpg",
    emotion: "🌍"
  },
  {
    id: 8,
    title: "My Forever Friend",
    content: "You're not just my brother - you're my best friend, my confidant, my partner in all of life's adventures. I'm so grateful to have you in my life.",
    image: "/personal8.jpg",
    emotion: "👫"
  }
  // Personal images from /public (using your provided filenames)
 
]

export function SharedMemories() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [viewedMemories, setViewedMemories] = useState<number[]>([0])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % memories.length
        setViewedMemories(prevViewed => 
          prevViewed.includes(next) ? prevViewed : [...prevViewed, next]
        )
        return next
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    const prev = (currentIndex - 1 + memories.length) % memories.length
    setCurrentIndex(prev)
    setViewedMemories(prevViewed => 
      prevViewed.includes(prev) ? prevViewed : [...prevViewed, prev]
    )
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    const next = (currentIndex + 1) % memories.length
    setCurrentIndex(next)
    setViewedMemories(prevViewed => 
      prevViewed.includes(next) ? prevViewed : [...prevViewed, next]
    )
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
    setViewedMemories(prevViewed => 
      prevViewed.includes(index) ? prevViewed : [...prevViewed, index]
    )
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Main Memory Display */}
      <div className="relative mb-12">
        <Card className="overflow-hidden shadow-2xl border-4 border-festival-yellow-400 bg-gradient-to-br from-festival-yellow-50 to-festival-orange-50">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-80 lg:h-96 overflow-hidden">
                <img
                  src={memories[currentIndex].image || "/placeholder.svg?height=400&width=600&query=sibling memory"}
                  alt={memories[currentIndex].title}
                  className="w-full h-full object-contain bg-white"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement
                    if (!img.dataset.fallback) {
                      img.dataset.fallback = '1'
                      img.src = "/placeholder.svg?height=400&width=600&query=sibling memory"
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute top-4 right-4 text-4xl bg-white/80 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center">
                  {memories[currentIndex].emotion}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-8 h-8 text-festival-red-500 animate-pulse" />
                  <h3 className="text-3xl font-bold text-festival-purple-800 font-serif">
                    {memories[currentIndex].title}
                  </h3>
                </div>
                <p className="text-festival-purple-700 text-lg leading-relaxed italic mb-6">
                  {memories[currentIndex].content}
                </p>
                <div className="flex items-center gap-2 text-festival-red-600">
                  <Star className="w-5 h-5" />
                  <span className="font-medium">Memory {currentIndex + 1} of {memories.length}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Arrows */}
        <Button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-festival-orange-600 rounded-full p-3 shadow-xl border-2 border-festival-orange-200"
          size="sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-festival-orange-600 rounded-full p-3 shadow-xl border-2 border-festival-orange-200"
          size="sm"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Progress and Stats */}
      <div className="text-center mb-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-festival-yellow-400 inline-block">
          <p className="text-lg font-semibold text-festival-purple-800 mb-3">
            Memories Explored: {viewedMemories.length} / {memories.length}
          </p>
          <div className="w-80 h-4 bg-festival-orange-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-festival-red-500 to-festival-orange-500 rounded-full transition-all duration-500"
              style={{ width: `${(viewedMemories.length / memories.length) * 100}%` }}
            ></div>
          </div>
          {viewedMemories.length === memories.length && (
            <p className="text-festival-red-600 font-medium mt-3 animate-bounce">
              🎉 All memories unlocked! Our journey is beautiful! 🎉
            </p>
          )}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-3 mb-8">
        {memories.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative transition-all duration-300 ${
              index === currentIndex
                ? 'w-4 h-4 bg-festival-red-500 scale-125 shadow-lg'
                : viewedMemories.includes(index)
                ? 'w-3 h-3 bg-festival-orange-400 hover:bg-festival-orange-500'
                : 'w-3 h-3 bg-festival-orange-200 hover:bg-festival-orange-300'
            } rounded-full`}
          >
            {viewedMemories.includes(index) && index !== currentIndex && (
              <div className="absolute inset-0 bg-festival-yellow-400 rounded-full animate-ping opacity-75"></div>
            )}
          </button>
        ))}
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
        {memories.map((memory, index) => (
          <Card
            key={memory.id}
            className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
              index === currentIndex
                ? 'ring-4 ring-festival-red-400 shadow-xl'
                : viewedMemories.includes(index)
                ? 'ring-2 ring-festival-orange-300 shadow-lg opacity-90 hover:opacity-100'
                : 'hover:shadow-md opacity-60 hover:opacity-80'
            }`}
            onClick={() => goToSlide(index)}
          >
            <CardContent className="p-2">
              <div className="relative">
                <img
                  src={memory.image || "/placeholder.svg?height=100&width=100&query=memory thumbnail"}
                  alt={memory.title}
                  className="w-full h-20 object-contain bg-white rounded"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement
                    if (!img.dataset.fallback) {
                      img.dataset.fallback = '1'
                      img.src = "/placeholder.svg?height=100&width=100&query=memory thumbnail"
                    }
                  }}
                />
                <div className="absolute top-1 right-1 text-lg bg-white/80 backdrop-blur-sm rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  {memory.emotion}
                </div>
                {viewedMemories.includes(index) && (
                  <div className="absolute bottom-1 left-1 bg-festival-orange-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
                    <Heart className="w-2 h-2" />
                  </div>
                )}
              </div>
              <p className="text-xs text-center mt-2 text-festival-purple-700 font-medium truncate">
                {memory.title}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Auto-play Control */}
      <div className="text-center mt-8">
        <Button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          variant="outline"
          className="border-festival-orange-300 text-festival-orange-600 hover:bg-festival-orange-50 px-6 py-3"
        >
          {isAutoPlaying ? '⏸️ Pause Journey' : '▶️ Continue Journey'}
        </Button>
      </div>
    </div>
  )
}
