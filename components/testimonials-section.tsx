"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "BMW Owner",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "Absolutely incredible service! My BMW looks better than the day I bought it. The attention to detail is unmatched, and the team was professional throughout the entire process.",
    },
    {
      name: "Mike Rodriguez",
      role: "Tesla Model S Owner",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "I've tried several detailing services, but E&E's is in a league of their own. The ceramic coating they applied has kept my Tesla looking pristine for over a year now.",
    },
    {
      name: "Jennifer Chen",
      role: "Honda Civic Owner",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "Great value for money! Even though I have an older car, they treated it like a luxury vehicle. The interior detailing removed stains I thought were permanent.",
    },
    {
      name: "David Thompson",
      role: "Mercedes Owner",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "The paint correction service was amazing. They removed years of swirl marks and scratches. My Mercedes looks showroom fresh again. Highly recommend!",
    },
    {
      name: "Lisa Martinez",
      role: "Audi Q7 Owner",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "Professional, reliable, and the results speak for themselves. They even picked up and delivered my car. The convenience and quality make them my go-to detailing service.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              What Our <span className="text-primary">Customers Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Don't just take our word for it. Here's what our satisfied customers have to say about their experience with
              E&E's Detailing.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm card-hover h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-muted-foreground mb-6 text-pretty leading-relaxed flex-grow">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Customer Info */}
                    <div className="flex items-center space-x-3 mt-auto">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-12 hidden md:flex" />
          <CarouselNext className="-right-12 hidden md:flex" />
          </Carousel>
        </ScrollAnimation>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to join our happy customers?</h3>
            <p className="text-muted-foreground mb-6">
              Experience the E&E's difference and see why we're the trusted choice for auto detailing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact">
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Book Your Service
                </button>
              </a>
              <a href="#gallery">
                <button className="border border-border bg-background hover:bg-primary/10 hover:cursor-pointer text-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Gallery
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
