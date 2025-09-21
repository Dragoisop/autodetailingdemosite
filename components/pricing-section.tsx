import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Sparkles, Crown } from "lucide-react"

export function PricingSection() {
  const packages = [
    {
      name: "Essential Clean",
      price: "$49",
      duration: "2-3 hours",
      description: "Perfect for regular maintenance and keeping your car looking fresh",
      icon: Star,
      popular: false,
      features: [
        "Exterior hand wash & dry",
        "Wheel & tire cleaning",
        "Interior vacuum",
        "Dashboard & console wipe down",
        "Window cleaning (interior & exterior)",
        "Door jamb cleaning",
      ],
      color: "bg-card",
      buttonVariant: "outline" as const,
    },
    {
      name: "Premium Detail",
      price: "$89",
      duration: "3-4 hours",
      description: "Our most popular package with comprehensive interior and exterior care",
      icon: Sparkles,
      popular: true,
      features: [
        "Everything in Essential Clean",
        "Clay bar treatment",
        "Paint sealant application",
        "Leather conditioning",
        "Fabric protection",
        "Tire shine application",
        "Chrome & trim polishing",
        "Air freshener",
      ],
      color: "bg-primary/5 border-primary/20",
      buttonVariant: "default" as const,
    },
    {
      name: "Luxury Experience",
      price: "$149",
      duration: "4-6 hours",
      description: "The ultimate detailing experience for those who demand perfection",
      icon: Crown,
      popular: false,
      features: [
        "Everything in Premium Detail",
        "Paint correction (minor scratches)",
        "Ceramic coating application",
        "Engine bay cleaning",
        "Headlight restoration",
        "Interior steam cleaning",
        "Premium leather treatment",
        "6-month protection guarantee",
      ],
      color: "bg-card",
      buttonVariant: "outline" as const,
    },
  ]

  const addOns = [
    { name: "Pet Hair Removal", price: "$25" },
    { name: "Headlight Restoration", price: "$35" },
    { name: "Engine Bay Detail", price: "$45" },
    { name: "Ceramic Coating", price: "$199" },
    { name: "Paint Correction", price: "$299" },
  ]

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-primary bg-primary/10">
            Pricing Packages
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Choose the Perfect <span className="text-primary">Detail Package</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From essential maintenance to luxury treatments, we have a package that fits your needs and budget. All
            packages include our satisfaction guarantee.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon
            return (
              <Card
                key={index}
                className={`relative ${pkg.color} card-hover h-full flex flex-col ${pkg.popular ? "ring-2 ring-primary shadow-xl scale-105" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">{pkg.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">{pkg.price}</div>
                    <div className="text-sm text-muted-foreground">{pkg.duration}</div>
                  </div>
                  <p className="text-muted-foreground text-pretty">{pkg.description}</p>
                </CardHeader>

                <CardContent className="flex-grow flex flex-col space-y-6">
                  <ul className="space-y-3 flex-grow">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant={pkg.buttonVariant} size="lg" className={`w-full mt-auto hover:cursor-pointer ${pkg.buttonVariant === 'outline' ? 'hover:bg-primary/10' : 'hover:bg-primary/90'}`}>
                    Book {pkg.name}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Add-ons Section */}
        <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Popular Add-Ons</h3>
            <p className="text-muted-foreground text-pretty">Enhance any package with these specialized services</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-muted/50 rounded-lg p-4 text-center hover:bg-muted/70 transition-colors">
                <div className="font-semibold text-foreground mb-1">{addon.name}</div>
                <div className="text-primary font-bold">{addon.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">Not sure which package is right for you?</h3>
            <p className="text-muted-foreground mb-6 text-pretty">
              Contact us for a free consultation and personalized recommendation based on your vehicle's needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <a href="#contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 hover:cursor-pointer">
                  Get Free Quote
                </Button>
              </a>
              <a href="tel:+15551234567">
                <Button variant="outline" size="lg" className="hover:bg-primary/10 hover:cursor-pointer">
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
