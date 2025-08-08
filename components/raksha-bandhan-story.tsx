'use client'

import { Card, CardContent } from '@/components/ui/card'
import { BookOpen, Heart, Shield, Star } from 'lucide-react'

export function RakshaBandhanStory() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-festival-red-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-festival-purple-800">
              The Sacred Bond
            </h2>
            <BookOpen className="w-8 h-8 text-festival-red-600" />
          </div>
          <p className="text-xl text-festival-purple-600 max-w-2xl mx-auto">
            Understanding the beautiful tradition that celebrates our eternal connection
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="border-2 border-festival-red-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-festival-red-500 to-festival-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-festival-red-700 mb-3">Love & Protection</h3>
              <p className="text-festival-purple-600">
                The sacred thread represents the sister's love and the brother's promise of lifelong protection and care.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-festival-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-festival-orange-500 to-festival-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-festival-orange-700 mb-3">Eternal Bond</h3>
              <p className="text-festival-purple-600">
                This festival celebrates the unbreakable bond between siblings that transcends time and distance.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-festival-yellow-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-festival-yellow-500 to-festival-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-festival-yellow-700 mb-3">Sacred Tradition</h3>
              <p className="text-festival-purple-600">
                A beautiful tradition that strengthens family bonds and celebrates the pure relationship between siblings.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-4 border-festival-yellow-400 shadow-2xl bg-gradient-to-br from-festival-yellow-50 to-festival-orange-50">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-festival-purple-800 mb-6 font-serif">
                "The Thread of Love"
              </h3>
              <p className="text-lg text-festival-purple-700 leading-relaxed italic max-w-4xl mx-auto">
                Raksha Bandhan is more than just a festival - it's a celebration of the purest form of love. 
                When a sister ties the rakhi around her brother's wrist, she's not just performing a ritual; 
                she's weaving together years of shared laughter, tears, secrets, and dreams. 
                And when a brother accepts that sacred thread, he's promising to be her guardian angel, 
                her biggest cheerleader, and her lifelong friend. This bond doesn't weaken with distance 
                or fade with time - it only grows stronger, like the golden thread that connects two hearts forever.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
