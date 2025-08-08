'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Download, Heart, Sparkles } from 'lucide-react'

const prewrittenMessages = [
  "Dear {brother}, you've always been my protector and my best friend. This Raksha Bandhan, I promise to always be there for you too. Happy Raksha Bandhan!",
  "To my amazing brother {brother}, thank you for all the laughter, the fights, and the unconditional love. You mean the world to me!",
  "My dear {brother}, distance may separate us, but our bond remains unbreakable. Sending you all my love this Raksha Bandhan!",
  "{brother}, you're not just my brother, you're my superhero. Thank you for always having my back. Happy Raksha Bandhan!"
]

export function MessageCardCreator() {
  const [sisterName, setSisterName] = useState('')
  const [brotherName, setBrotherName] = useState('')
  const [selectedMessage, setSelectedMessage] = useState(0)
  const [customMessage, setCustomMessage] = useState('')
  const [useCustom, setUseCustom] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const getCurrentMessage = () => {
    if (useCustom) return customMessage
    return prewrittenMessages[selectedMessage].replace('{brother}', brotherName || 'Brother')
  }

  const downloadCard = async () => {
    if (!cardRef.current) return

    try {
      const html2canvas = (await import('html2canvas')).default
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: '#fefce8',
        scale: 2
      })
      
      const link = document.createElement('a')
      link.download = `raksha-bandhan-card-${Date.now()}.png`
      link.href = canvas.toDataURL()
      link.click()
    } catch (error) {
      console.error('Error generating card:', error)
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* Form Section */}
      <div className="space-y-6">
        <Card className="border-2 border-emerald-200 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-emerald-700 mb-2">
                  Your Name (Sister)
                </label>
                <Input
                  value={sisterName}
                  onChange={(e) => setSisterName(e.target.value)}
                  placeholder="Enter your name"
                  className="border-emerald-300 focus:border-emerald-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-emerald-700 mb-2">
                  Brother's Name
                </label>
                <Input
                  value={brotherName}
                  onChange={(e) => setBrotherName(e.target.value)}
                  placeholder="Enter your brother's name"
                  className="border-emerald-300 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-emerald-700 mb-2">
                  Choose Message Type
                </label>
                <div className="flex gap-2 mb-4">
                  <Button
                    variant={!useCustom ? "default" : "outline"}
                    onClick={() => setUseCustom(false)}
                    className="bg-emerald-600 hover:bg-emerald-700"
                  >
                    Pre-written
                  </Button>
                  <Button
                    variant={useCustom ? "default" : "outline"}
                    onClick={() => setUseCustom(true)}
                    className="bg-fuchsia-600 hover:bg-fuchsia-700"
                  >
                    Custom
                  </Button>
                </div>

                {!useCustom ? (
                  <div className="space-y-2">
                    {prewrittenMessages.map((message, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                          selectedMessage === index
                            ? 'border-emerald-500 bg-emerald-50'
                            : 'border-emerald-200 hover:border-emerald-300'
                        }`}
                        onClick={() => setSelectedMessage(index)}
                      >
                        <p className="text-sm text-emerald-700">
                          {message.replace('{brother}', brotherName || 'Brother')}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <Textarea
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    placeholder="Write your personal message..."
                    className="border-emerald-300 focus:border-emerald-500 min-h-[120px]"
                  />
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Preview Section */}
      <div className="space-y-4">
        <div
          ref={cardRef}
          className="bg-gradient-to-br from-cream-50 to-gold-50 p-8 rounded-2xl border-4 border-gold-300 shadow-2xl min-h-[400px] relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-4 left-4 text-fuchsia-400 opacity-20">
            <Sparkles className="w-8 h-8" />
          </div>
          <div className="absolute top-4 right-4 text-emerald-400 opacity-20">
            <Heart className="w-8 h-8" />
          </div>
          <div className="absolute bottom-4 left-4 text-gold-400 opacity-20">
            <Heart className="w-6 h-6" />
          </div>
          <div className="absolute bottom-4 right-4 text-fuchsia-400 opacity-20">
            <Sparkles className="w-6 h-6" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold text-fuchsia-700 mb-6 font-serif">
              Happy Raksha Bandhan
            </h3>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-6 border border-gold-200">
              <p className="text-emerald-800 text-lg leading-relaxed font-medium italic">
                {getCurrentMessage() || "Your beautiful message will appear here..."}
              </p>
            </div>

            <div className="text-right">
              <p className="text-emerald-700 font-semibold text-lg">
                With love,
              </p>
              <p className="text-fuchsia-600 font-bold text-xl font-serif">
                {sisterName || "Your Sister"}
              </p>
            </div>
          </div>

          {/* Decorative Border Pattern */}
          <div className="absolute inset-0 border-8 border-transparent bg-gradient-to-r from-emerald-200 via-fuchsia-200 to-gold-200 rounded-2xl opacity-30 -z-10"></div>
        </div>

        <Button
          onClick={downloadCard}
          className="w-full bg-gradient-to-r from-emerald-600 to-fuchsia-600 hover:from-emerald-700 hover:to-fuchsia-700 text-white font-semibold py-3 text-lg"
          disabled={!sisterName || !brotherName || (!customMessage && useCustom)}
        >
          <Download className="w-5 h-5 mr-2" />
          Download & Share Card
        </Button>
      </div>
    </div>
  )
}
