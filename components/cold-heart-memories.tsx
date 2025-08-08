'use client'

import { Heart } from 'lucide-react'

const heartImages = [
  '/heart1.jpg',
  '/heart2.jpg',
  '/heart3.jpg',
  '/heart4.png',
  '/heart5.jpg',
]

export function ColdHeartMemories() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-festival-red-50 to-festival-yellow-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-8 h-8 text-festival-red-600 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-festival-red-700">
              Cold Heart Memories
            </h2>
            <Heart className="w-8 h-8 text-festival-red-600 animate-pulse" />
          </div>
          <p className="text-festival-purple-700 max-w-2xl mx-auto">
            Special moments close to the heart — preserved with love.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {heartImages.map((src, idx) => (
            <div
              key={src}
              className="bg-white rounded-xl border-2 border-festival-yellow-300 shadow-sm overflow-hidden flex items-center justify-center p-2"
            >
              <img
                src={src}
                alt={`Cold Heart Memory ${idx + 1}`}
                loading="lazy"
                decoding="async"
                className="max-h-44 md:max-h-52 w-full object-contain"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement
                  if (!img.dataset.fallback) {
                    img.dataset.fallback = '1'
                    img.src = '/placeholder.svg?height=200&width=300&query=heart memory'
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

