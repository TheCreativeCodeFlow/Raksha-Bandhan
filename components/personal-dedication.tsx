'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Heart, Star, Sparkles } from 'lucide-react'

export function PersonalDedication() {
  const [currentMessage, setCurrentMessage] = useState(0)
  
  const messages = [
    {
      title: "To My Amazing Sister",
      content: "You've been my partner in crime, my biggest supporter, and my dearest friend. This Raksha Bandhan, I want you to know how grateful I am to have you in my life.",
      icon: Heart
    },
    {
      title: "Our Unbreakable Bond",
      content: "No matter how far apart we are, no matter how much time passes, the thread that binds our hearts will always remain strong and unbreakable.",
      icon: Star
    },
    {
      title: "My Promise to You",
      content: "Just as you've always protected me with your love and care, I promise to always be there for you, to support your dreams, and to celebrate your victories.",
      icon: Sparkles
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-festival-yellow-50 to-festival-orange-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-festival-purple-800 mb-4">
            A Special Message
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-festival-red-500 to-festival-orange-500 mx-auto rounded-full"></div>
        </div>

        <Card className="overflow-hidden shadow-2xl border-4 border-festival-yellow-400 bg-gradient-to-br from-white to-festival-yellow-50">
          <CardContent className="p-0">
            <div className="relative h-96 flex items-center justify-center">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-8 left-8 text-festival-red-400">
                  <Sparkles className="w-16 h-16" />
                </div>
                <div className="absolute top-8 right-8 text-festival-purple-400">
                  <Heart className="w-16 h-16" />
                </div>
                <div className="absolute bottom-8 left-8 text-festival-orange-400">
                  <Star className="w-12 h-12" />
                </div>
                <div className="absolute bottom-8 right-8 text-festival-red-400">
                  <Sparkles className="w-12 h-12" />
                </div>
              </div>

              {/* Message Content */}
              <div className="relative z-10 text-center px-8 max-w-3xl">
                <div className="mb-6">
                  {React.createElement(messages[currentMessage].icon, {
                    className: "w-16 h-16 mx-auto text-festival-red-600 animate-pulse"
                  })}
                </div>
                
                <h3 className="text-3xl font-bold text-festival-purple-800 mb-6 font-serif">
                  {messages[currentMessage].title}
                </h3>
                
                <p className="text-xl text-festival-purple-700 leading-relaxed italic font-medium">
                  {messages[currentMessage].content}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Message Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {messages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentMessage(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentMessage
                  ? 'bg-festival-red-500 scale-125 shadow-lg'
                  : 'bg-festival-orange-300 hover:bg-festival-orange-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
