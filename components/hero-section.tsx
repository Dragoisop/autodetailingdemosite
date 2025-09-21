"use client"

import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ShineButton } from "@/components/shine-button"
import { Star, Shield, Clock, Award } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-bg">
      <div className="absolute inset-0 bg-black/55 backdrop-blur-sm z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            <h1 className="text-3xl xs:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
              Premium Auto Detailing That Makes Your Car <span className="text-primary">Shine Like New</span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <p className="text-lg xs:text-xl md:text-2xl text-white/90 mb-8 text-pretty max-w-3xl mx-auto">
              Professional, affordable, and reliable detailing services that protect your investment and keep you driving
              with pride.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4}>
            <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center mb-8 xs:mb-12 px-4">
              <a href="#contact">
                <ShineButton 
                  label="Book Your Detail Today" 
                  size="lg"
                  bgColor="oklch(0.55 0.15 264)"
                />
              </a>
              <a href="#gallery">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 hover:cursor-pointer border-white/30 text-white">
                  View Our Work
                </Button>
              </a>
            </div>
          </ScrollAnimation>

          {/* Trust Indicators */}
          <ScrollAnimation delay={0.6}>
            <div className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 max-w-2xl mx-auto px-4">
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-primary/10 p-3 rounded-full">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <div className="font-semibold text-white">5+ Years</div>
                <div className="text-sm text-white/80">Experience</div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="bg-primary/10 p-3 rounded-full">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <div className="font-semibold text-white">500+</div>
                <div className="text-sm text-white/80">Happy Clients</div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="bg-primary/10 p-3 rounded-full">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <div className="font-semibold text-white">100%</div>
                <div className="text-sm text-white/80">Satisfaction</div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="bg-primary/10 p-3 rounded-full">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <div className="font-semibold text-white">Same Day</div>
                <div className="text-sm text-white/80">Service</div>
              </div>
            </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
