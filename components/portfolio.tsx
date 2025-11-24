import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

const portfolioItems = [
 {
    title: "Barista Hero 2025",
    category: "Filmmaking / Marketing Campaign",
    slug: "baristahero25",
    image: "BARISTAHERO_IMG/SELIM.webp",
  },
  {
    title: "Out Of The Box - Milan",
    category: "Event",
    slug: "ootb",
    image: "OOTB/1.webp",
  },
  {
    title: "Hamoud - Hanae Mansour",
    category: "Photography / Filmmaking",
    slug: "hamoud",
    image: "HAMOUD/REX_HAMOUD_2_.webp",
  },
  {
    title: "Interview - Djowher",
    category: "Filmmaking",
    slug: "djowher",
    image: "DJO/EDITED/5.webp",
  },
 {
    title: "Fashion Week 2024 - Valentino",
    category: "Marketing Campaign",
    slug: "FW24",
    image: "Valentino/DSC_0893.webp",
  },
  {
    title: "Cover Album Inspo - Aisha Fettaka",
    category: "Photography",
    slug: "delicate",
    image: "Delicate/POST_01.webp",
  },

  {
    title: "Lancôme - Champs Élysées",
    category: "Photography / Marketing Campaign",
    slug: "lancome",
    image: "LANCOME/Instore/DSC_0481.webp",
  },

  {
    title: "In The Wild - Misty",
    category: "Photography / Filmmaking",
    slug: "misty",
    image: "Amina/DSF0143.webp",
  },

  {
    title: "Wedding Photography",
    category: "Photography",
    slug: "wed",
    image: "WED/IMG_2695.webp",
  },
  
  /*{
    title: "La Marzocco Roadshows",
    category: "Filmmaking / Photography / Event",
    slug: "roadshow",
    image: "Roadshows/cover.jpg",
  },
 {
    title: "French Coffee Shops - La Marzocco",
    category: "Photography / Filmmaking",
    slug: "coffeeshop",
    image: "Valentino/DSC_0893.jpg",
  },
  */
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A curated collection of my recent photography projects spanning various genres and styles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <Link key={index} href={`/gallery/${item.slug}`}>
              <Card className="group relative overflow-hidden border-0 bg-card hover:bg-accent/5 transition-all duration-300 cursor-pointer h-[400px]">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 3}
                  loading={index < 3 ? undefined : "lazy"}
                  quality={85}
                />
                {/* </CHANGE> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xs text-accent font-medium mb-2">{item.category}</p>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
