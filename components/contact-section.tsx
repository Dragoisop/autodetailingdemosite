import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Star, Calendar } from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "(555) 123-4567",
      description: "Mon-Sat: 8AM-6PM",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@eedetailing.com",
      description: "We respond within 2 hours",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Auto Care Lane",
      description: "Downtown District, City 12345",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Sat: 8AM-6PM",
      description: "Sunday: Closed",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-primary bg-primary/10">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to Transform <span className="text-primary">Your Vehicle?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Contact us today for a free quote or to schedule your detailing appointment. We're here to answer all your
            questions and help you choose the perfect service for your vehicle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                <Calendar className="h-6 w-6 text-primary mr-3" />
                Book Your Service
              </CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 2 hours with a personalized quote.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                  <Input placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Vehicle Make</label>
                  <Input placeholder="Toyota" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Vehicle Model</label>
                  <Input placeholder="Camry" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Service Needed</label>
                <select className="w-full p-3 border border-border rounded-md bg-background text-foreground">
                  <option>Select a service package</option>
                  <option>Essential Clean - $49</option>
                  <option>Premium Detail - $89</option>
                  <option>Luxury Experience - $149</option>
                  <option>Custom Quote Needed</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Additional Details</label>
                <Textarea
                  placeholder="Tell us about your vehicle's condition, any specific concerns, or special requests..."
                  rows={4}
                />
              </div>

              <Button size="lg" className="w-full hover:cursor-pointer">
                Get Free Quote
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p>Trusted by 500+ satisfied customers</p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-6 text-center">
                      <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                      <p className="text-primary font-medium mb-1">{info.details}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Map Placeholder */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-muted h-64 flex items-center justify-center relative">
                  <img
                    src="/auto-detailing-shop-location-map.jpg"
                    alt="E&E's Detailing location map"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 hover:cursor-pointer">
                      <MapPin className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

        {/* Quick Contact - Centered */}
        <div className="mt-12 max-w-2xl mx-auto">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">Need Immediate Assistance?</h3>
              <p className="text-muted-foreground mb-6">
                Call us directly for urgent requests or same-day appointments
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                <a href="tel:+15551234567">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 hover:cursor-pointer">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now: (555) 123-4567
                  </Button>
                </a>
                <a href="mailto:info@eedetailing.com">
                  <Button variant="outline" size="lg" className="hover:cursor-pointer hover:bg-primary/10">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
