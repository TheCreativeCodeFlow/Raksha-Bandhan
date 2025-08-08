'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Quote, Heart, Star } from 'lucide-react'

const quotes = [
  {
    text: "A sister is both your mirror and your opposite.",
    author: "Elizabeth Fishel",
    color: "from-festival-red-500 to-festival-orange-500"
  },
  {
    text: "Brothers and sisters are as close as hands and feet.",
    author: "Vietnamese Proverb",
    color: "from-festival-orange-500 to-festival-yellow-500"
  },
  {
    text: "Siblings: children of the same parents, each of whom is perfectly normal until they get together.",
    author: "Sam Levenson",
    color: "from-festival-yellow-500 to-festival-orange-500"
  },
  {
    text: "The greatest gift our parents gave us was each other.",
    author: "Unknown",
    color: "from-festival-purple-500 to-festival-red-500"
  },
  {
    text: "A sibling is the lens through which you see your childhood.",
    author: "Ann Hood",
    color: "from-festival-red-500 to-festival-purple-500"
  }
]

export function SiblingQuotes() {
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-festival-purple-50 to-festival-red-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Quote className="w-8 h-8 text-festival-orange-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-festival-purple-800">
              Words of Love
            </h2>
            <Quote className="w-8 h-8 text-festival-orange-600" />
          </div>
          <p className="text-xl text-festival-purple-600">
            Beautiful thoughts about the sibling bond
          </p>
        </div>

        <Card className="overflow-hidden shadow-2xl border-4 border-festival-yellow-400 bg-white">
          <CardContent className="p-0">
            <div className="relative h-80 flex items-center justify-center">
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${quotes[currentQuote].color} opacity-10`}></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-6 left-6 text-festival-red-400 opacity-20">
                <Heart className="w-12 h-12" />
              </div>
              <div className="absolute top-6 right-6 text-festival-purple-400 opacity-20">
                <Star className="w-12 h-12" />
              </div>
              <div className="absolute bottom-6 left-6 text-festival-orange-400 opacity-20">
                <Quote className="w-10 h-10" />
              </div>
              <div className="absolute bottom-6 right-6 text-festival-red-400 opacity-20">
                <Heart className="w-10 h-10" />
              </div>

              {/* Quote Content */}
              <div className="relative z-10 text-center px-8 max-w-3xl">
                <Quote className="w-12 h-12 mx-auto text-festival-orange-600 mb-6 opacity-60" />
                
                <p className="text-2xl md:text-3xl text-festival-purple-800 leading-relaxed font-serif italic mb-6">
                  {quotes[currentQuote].text}
                </p>
                
                <p className="text-lg text-festival-red-600 font-semibold">
                  — {quotes[currentQuote].author}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quote Navigation */}
        <div className="flex justify-center gap-3 mt-8">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuote(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentQuote
                  ? 'bg-festival-orange-500 scale-125 shadow-lg'
                  : 'bg-festival-orange-300 hover:bg-festival-orange-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
