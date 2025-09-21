import { Badge } from "@/components/ui/badge"
import { ThreeDMarquee } from "@/components/three-d-marquee"

export function GallerySection() {
  const beforeAfterImages = [
    {
      before: "/car-before-detailing-dirty.jpg",
      after: "/car-after-detailing-clean.jpg",
      title: "Exterior Transformation",
      description: "Complete exterior detail with paint correction",
    },
    {
      before: "/interior-before-detailing-messy.jpg",
      after: "/interior-after-detailing-clean.jpg",
      title: "Interior Revival",
      description: "Deep cleaning and leather conditioning",
    },
    {
      before: "/headlights-before-restoration-foggy.jpg",
      after: "/headlights-after-restoration-clear.jpg",
      title: "Headlight Restoration",
      description: "Crystal clear visibility restored",
    },
  ]

  const galleryImages = [
    {
      src: "/luxury-car-ceramic-coating-shine.jpg",
      title: "Ceramic Coating",
      category: "Paint Protection",
    },
    {
      src: "/car-interior-leather-conditioning.jpg",
      title: "Leather Treatment",
      category: "Interior Care",
    },
    {
      src: "/car-engine-bay-cleaning-detail.jpg",
      title: "Engine Bay Detail",
      category: "Engine Care",
    },
    {
      src: "/car-wheels-tire-shine-detail.jpg",
      title: "Wheel & Tire Care",
      category: "Wheel Service",
    },
    {
      src: "/car-paint-correction-polishing.jpg",
      title: "Paint Correction",
      category: "Paint Care",
    },
    {
      src: "/car-interior-steam-cleaning.jpg",
      title: "Steam Cleaning",
      category: "Deep Clean",
    },
  ]

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-primary bg-primary/10">
            Our Work Gallery
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            See the <span className="text-primary">Amazing Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Every vehicle tells a story of transformation. Browse our gallery to see the incredible before and after
            results that showcase our attention to detail and commitment to excellence.
          </p>
        </div>

        <ThreeDMarquee 
          images={[
            { src: "/car-before-detailing-dirty.jpg", alt: "Car Before Detailing" },
            { src: "/car-after-detailing-clean.jpg", alt: "Car After Detailing" },
            { src: "/luxury-car-ceramic-coating-shine.jpg", alt: "Ceramic Coating" },
            { src: "/car-interior-leather-conditioning.jpg", alt: "Leather Treatment" },
            { src: "/car-engine-bay-cleaning-detail.jpg", alt: "Engine Bay Detail" },
            { src: "/car-wheels-tire-shine-detail.jpg", alt: "Wheel & Tire Care" },
            { src: "/car-paint-correction-polishing.jpg", alt: "Paint Correction" },
            { src: "/car-interior-steam-cleaning.jpg", alt: "Steam Cleaning" },
            { src: "/interior-before-detailing-messy.jpg", alt: "Interior Before" },
            { src: "/interior-after-detailing-clean.jpg", alt: "Interior After" },
            { src: "/headlights-before-restoration-foggy.jpg", alt: "Headlights Before" },
            { src: "/headlights-after-restoration-clear.jpg", alt: "Headlights After" }
          ]}
          cols={4}
          className="mb-12"
        />


      </div>
    </section>
  )
}
