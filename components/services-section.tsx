"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Car, Sparkles, Shield, Paintbrush, Droplets, Lightbulb } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Car,
      title: "Exterior Detailing",
      description:
        "Complete exterior wash, clay bar treatment, polish, and protective wax application for a showroom shine.",
      features: ["Hand wash & dry", "Clay bar treatment", "Paint polish", "Protective wax", "Tire & rim cleaning"],
      image: "/car-exterior-detailing-wash.jpg",
    },
    {
      icon: Sparkles,
      title: "Interior Detailing",
      description: "Deep cleaning and conditioning of all interior surfaces, leaving your cabin fresh and pristine.",
      features: [
        "Vacuum & steam clean",
        "Leather conditioning",
        "Dashboard treatment",
        "Window cleaning",
        "Odor elimination",
      ],
      image: "/car-leather-detailing.png",
    },
    {
      icon: Shield,
      title: "Ceramic Coating",
      description:
        "Long-lasting protection with our premium ceramic coating that keeps your car looking new for years.",
      features: [
        "Paint correction prep",
        "Professional application",
        "5-year protection",
        "Hydrophobic finish",
        "UV resistance",
      ],
      image: "/ceramic-coating-car-paint-protection.jpg",
    },
    {
      icon: Paintbrush,
      title: "Paint Correction",
      description: "Remove swirl marks, scratches, and imperfections to restore your paint to factory condition.",
      features: [
        "Swirl mark removal",
        "Scratch repair",
        "Paint leveling",
        "Multi-stage polish",
        "Clear coat restoration",
      ],
      image: "/paint-correction-car-detailing-polish.jpg",
    },
    {
      icon: Droplets,
      title: "Full Detail Package",
      description:
        "Our comprehensive service combining interior and exterior detailing for the ultimate car care experience.",
      features: [
        "Complete exterior detail",
        "Full interior detail",
        "Engine bay cleaning",
        "Headlight restoration",
        "6-month protection",
      ],
      image: "/complete-car-detailing-full-service.jpg",
    },
    {
      icon: Lightbulb,
      title: "Headlight Restoration",
      description:
        "Restore cloudy, yellowed headlights to crystal clear condition for improved visibility and appearance.",
      features: [
        "UV damage removal",
        "Professional polishing",
        "Protective coating",
        "Improved visibility",
        "Enhanced safety",
      ],
      image: "/headlights-after-restoration-clear.jpg",
    },
  ]

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Our Premium <span className="text-primary">Detailing Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From basic maintenance to complete transformations, we offer comprehensive auto detailing services tailored
              to keep your vehicle looking its absolute best.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <Card className="card-hover border-0 shadow-lg bg-card/80 backdrop-blur-sm h-full flex flex-col">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm p-2 rounded-full">
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold text-card-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-grow flex flex-col">
                  <ul className="space-y-2 mb-6 flex-grow">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="#contact">
                    <Button variant="outline" className="w-full group hover:bg-primary/10 hover:cursor-pointer mt-auto">
                      Learn More
                      <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                    </Button>
                  </a>
                </CardContent>
                </Card>
              </ScrollAnimation>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Not sure which service is right for you?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Our experts will assess your vehicle and recommend the perfect detailing package for your needs and
              budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <a href="#contact">
                <Button size="lg" className="px-8 hover:cursor-pointer">
                  Get Free Consultation
                </Button>
              </a>
              <a href="tel:+15551234567">
                <Button variant="outline" size="lg" className="px-8 hover:bg-primary/10 hover:cursor-pointer">
                  Call (555) 123-4567
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
