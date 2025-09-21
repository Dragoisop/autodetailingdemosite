import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Clock, Heart } from "lucide-react"

export function AboutSection() {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Customers",
      description: "Satisfied clients who trust us with their vehicles",
    },
    {
      icon: Award,
      number: "5+",
      label: "Years Experience",
      description: "Professional auto detailing expertise",
    },
    {
      icon: Clock,
      number: "24hr",
      label: "Turnaround",
      description: "Most services completed within a day",
    },
    {
      icon: Heart,
      number: "100%",
      label: "Satisfaction",
      description: "Guaranteed quality or your money back",
    },
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4 text-primary bg-primary/10">
                About E&E's Detailing
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Passionate About Making Your Car <span className="text-primary">Look Its Best</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground text-lg">
              <p className="text-pretty">
                Founded with a simple mission: to provide exceptional auto detailing services that exceed expectations.
                At E&E's Detailing, we believe every vehicle deserves to look and feel like new, regardless of its age
                or condition.
              </p>

              <p className="text-pretty">
                Our experienced team combines traditional craftsmanship with modern techniques and premium products to
                deliver results that protect your investment and keep you driving with pride.
              </p>

              <p className="text-pretty">
                From daily drivers to luxury vehicles, we treat every car with the same level of care and attention to
                detail. Because when your car looks good, you feel good.
              </p>
            </div>

            {/* Trust Points */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground font-medium">Experienced & Certified Team</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground font-medium">Premium Products & Equipment</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground font-medium">100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground font-medium">Fully Insured & Bonded</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/professional-car-detailing-team-at-work.jpg"
                alt="Professional car detailing team at work"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-card rounded-xl shadow-xl p-6 border border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">5.0</div>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">Google Reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index} className="text-center border-0 shadow-lg bg-card/50 backdrop-blur-sm card-hover">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground text-pretty">{stat.description}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
