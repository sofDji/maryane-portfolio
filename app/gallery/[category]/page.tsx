"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import { Lightbox } from "@/components/lightbox"

const galleries = {
  hamoud: {
    title: "Hamoud - Hanae Mensour",
    description: "A shoot with actress Hanae Mensour, showcasing Hamoud Boualam's iconic drink.",
    video: null,
    images: [
      { src: "/HAMOUD/REXLEUR_HAMOUD.mp4", title: "Hamoud video" },
      { src: "/HAMOUD/REX_HAMOUD_2_.webp", title: "Hamoud 2" },
      { src: "/HAMOUD/REX_HAMOUD_5.webp", title: "Hamoud 5" },
      { src: "/HAMOUD/REX_HAMOUD_1_.webp", title: "Hamoud 1" },
      { src: "/HAMOUD/REX_HAMOUD_3_.webp", title: "Hamoud 3" },
      { src: "/HAMOUD/REX_HAMOUD_4_.webp", title: "Hamoud 4" },
    ],
  },
  djowher: {
    title: "How Do You Feel When You Sing ?",
    description: "An artistic interview with the singer Djowher. ",
    video: "/DJO/TEST_W_TEXT.mp4",
    images: [
      { src: "/DJO/EDITED/5.webp", title: "Djowher 5" },
      { src: "/DJO/EDITED/4.webp", title: "Djowher 4" },
      { src: "/DJO/EDITED/3.webp", title: "Djowher 3" },
    ],
  },
  delicate: {
    title: "Cover Album Inspired Photoshoot",
    description:
      "This photoshoot, inspired by Taylor Swift's Delicate album cover, was created in collaboration Aisha Fettaka.",
    video: null,
    images: [
      { src: "/Delicate/4.webp", title: "Delicate 4" },
      { src: "/Delicate/5.webp", title: "Delicate 5" },
      { src: "/Delicate/1.webp", title: "Delicate 1" },
    ],
  },
  FW24: {
    title: "Fashion Week 2024 - Valentino",
    description:
      "At the request of Valentino, Marianne Guély traveled to boutiques in Milan, Paris, London, and Geneva for a live performance and the creation of a sculpture inspired by the Altorilievo, the emblem of the brand's new collection. My role involved managing content throughout Fashion Week, preparing a strategic communication plan, and collecting and analyzing event data, which led to a significant increase in views and followers—over 4900% growth in views and nearly 185% growth in followers.",
    video: null,
    images: [
      { src: "/Valentino/video.mov", title: "Valentino stat" },
      { src: "/Valentino/DSC_0929.webp", title: "Valentino 1" },
      { src: "/Valentino/DSC_0827.webp", title: "Valentino 2" },
      { src: "/Valentino/DSC_0863.webp", title: "Valentino 3" },
      { src: "/Valentino/DSC_0962-2.webp", title: "Valentino 4" },
      { src: "/Valentino/DSC_0986.webp", title: "Valentino 5" },
      { src: "/Valentino/DSC_0014.webp", title: "Valentino 6" },
      { src: "/Valentino/DSC_0190.webp", title: "Valentino 7" },
      { src: "/Valentino/DSC_0214.webp", title: "Valentino 8" },
      { src: "/Valentino/DSC_0828.webp", title: "Valentino 9" },
      { src: "/Valentino/DSC_0847.webp", title: "Valentino 10" },
      { src: "/Valentino/DSC_0836.webp", title: "Valentino 11" },
    ],
  },
  baristahero25: {
    title: "Barista Hero 2025 - France",
    description:
      "Barista Hero is a national competition celebrating baristas who make a difference across France. I managed the entire campaign, from printing flyers and setting up the online voting platform to selecting finalists and conducting interviews. I traveled to interview each finalist, announced them on our social media platforms, and launched the final phase of online voting. The competition will conclude on December 4th during LA Marzocco's final event in France.",
    video: null,
    images: [],
  },
  ootb: {
    title: "Out Of The Box - Milan",
    description:
      "At Out of The Box Milan, the French team showcased the perfect pairing through three unique combinations: coffee and chocolate featuring Alain Ducasse, Mojo's Coffee Club, COW Cheese of the World, and Parcel's (world roasting champions) alongside 224L. I assisted in coordinating with our partners, created three distinct menus with detailed descriptions for each pairing, and managed all content and communication planning for the event and our participation as the French team.",
    video: null,
    images: [
      { src: "/OOTB/REEL_2.mp4", title: "OOTB" },
      { src: "/OOTB/2.webp", title: "OOTB 1" },
      { src: "/OOTB/5.webp", title: "OOTB 2" },
      { src: "/OOTB/3.webp", title: "OOTB 3" },
      { src: "/OOTB/6.webp", title: "OOTB 4" },
      { src: "/OOTB/7.webp", title: "OOTB 5" },
      //{ src: "/OOTB/8.webp", title: "OOTB 6" },
     // { src: "/OOTB/9.webp", title: "OOTB 7" },
      //{ src: "/OOTB/0.webp", title: "OOTB 8" },
      { src: "/OOTB/00.webp", title: "OOTB 9" },
      { src: "/OOTB/10.webp", title: "OOTB 10" },
      { src: "/OOTB/11.webp", title: "OOTB 11" },
    ],
  },
  lancome: {
    title: "Lancôme - Champs Élysées",
    description:
      "A scenography inspired by the Domaine de la Rose, Lancôme's rose fields in Grasse, in the South of France. My role was to manage the content from the atelier work and color research to the setup at Lancôme on the Champs-Élysées, ensuring consistent communication across all our social media channels, website, and newsletter.",
    video: null,
    images: [
      { src: "/LANCOME/Instore/DSC_0481.webp", title: "Lancôme 1" },
      { src: "/LANCOME/Instore/DSC_0551.webp", title: "Lancôme 2" },
      { src: "/LANCOME/Instore/DSC_0624.webp", title: "Lancôme 3" },
      { src: "/LANCOME/Instore/DSC_0664.webp", title: "Lancôme 4" },
      { src: "/LANCOME/Instore/DSC_0716.webp", title: "Lancôme 5" },
      { src: "/LANCOME/Instore/DSC_0587.webp", title: "Lancôme 6" },
      { src: "/LANCOME/WIP/DSC_0363.webp", title: "Lancôme 7" },
      { src: "/LANCOME/WIP/DSC_0180.webp", title: "Lancôme 8" },
      { src: "/LANCOME/WIP/DSC_0252.webp", title: "Lancôme 9" },
      { src: "/LANCOME/COLOR/DSC_0441.webp", title: "Lancôme 10" },
      { src: "/LANCOME/COLOR/DSC_0552.webp", title: "Lancôme 11" },
      { src: "/LANCOME/COLOR/DSC_0673.webp", title: "Lancôme 12" },
    ],
  },
  misty: {
    title: "In The Wild - Misty",
    description:
      "An inspirational photoshoot with Misty, capturing the essence of freedom through expressive poses and natural light, evoking a sense of liberation and boundless energy. ",
    video: "/Amina/Misty.mp4",
    images: [
      { src: "/Amina/DSF0148.webp", title: "Misty 1" },
      { src: "/Amina/DSF0286.webp", title: "Misty 2" },
      { src: "/Amina/DSF01341.webp", title: "Misty 3" },
    ],
  },
  wed: {
    title: "Wedding Photography",
    description:
      "Capturing timeless moments and heartfelt emotions to tell the unique story of your special day through beautiful, natural photography.",
    video: null,
    images: [
      { src: "/WED/IMG_2682.webp", title: "Wedding 1" },
      { src: "/WED/IMG_2686.webp", title: "Wedding 2" },
      { src: "/WED/IMG_2562.webp", title: "Wedding 3" },
      { src: "/WED/_DSF3559.webp", title: "Wedding 4" },
      { src: "/WED/_DSF3567.webp", title: "Wedding 5" },
      { src: "/WED/_DSF3389.webp", title: "Wedding 6" },
      { src: "/WED/WED_3.webp", title: "Wedding 7" },
      { src: "/WED/WED_18.webp", title: "Wedding 8" },
      { src: "/WED/WED_21.webp", title: "Wedding 9" },
      { src: "/WED/IMG_4590.webp", title: "Wedding 10" },
      { src: "/WED/IMG_4519.webp", title: "Wedding 11" },
      { src: "/WED/IMG_4520.webp", title: "Wedding 12" },
    ],
  },
}

export default async function GalleryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const gallery = galleries[category as keyof typeof galleries]

  if (!gallery) {
    notFound()
  }

  return <GalleryContent gallery={gallery} />
}

function GalleryContent({ gallery }: { gallery: (typeof galleries)[keyof typeof galleries] }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{gallery.title}</h1>
          <p className="text-xl text-muted-foreground">{gallery.description}</p>
        </div>

        {gallery.video && (
          <video controls className="mb-[30px] w-full rounded-2xl" preload="metadata">
            <source src={gallery.video} type="video/mp4" />
          </video>
        )}

        {gallery.title === "Cover Album Inspired Photoshoot" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-10">
            <div className="group overflow-hidden rounded-2xl bg-card">
              <div className="aspect-[1/1] overflow-hidden relative">
                <Image
                  src="/Delicate/POST_01.webp"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  fill
                  alt="Delicate Post"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  quality={85}
                />
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl bg-card">
              <div className="aspect-[1/1] overflow-hidden relative">
                <Image
                  src="/Delicate/INSPO.webp"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  fill
                  alt="Delicate Inspiration"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  quality={85}
                />
              </div>
            </div>
          </div>
        )}

        {gallery.title === "Barista Hero 2025 - France" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="group overflow-hidden rounded-2xl bg-card">
              <div className="aspect-[4/5] overflow-hidden relative">
                <a href="https://www.instagram.com/p/DQcQKoYDJ-r/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/BARISTAHERO_IMG/1.webp"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    fill
                    alt="Barista Hero 1"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                    quality={85}
                  />
                </a>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl bg-card">
              <div className="aspect-[4/5] overflow-hidden relative">
                <a href="https://www.instagram.com/p/DQhWX5fDPhD/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/BARISTAHERO_IMG/2.webp"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    fill
                    alt="Barista Hero 2"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                    quality={85}
                  />
                </a>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl bg-card">
              <div className="aspect-[4/5] overflow-hidden relative">
                <a href="https://www.instagram.com/p/DQev0CtDN8h/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/BARISTAHERO_IMG/3.webp"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    fill
                    alt="Barista Hero 3"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                    quality={85}
                  />
                </a>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl bg-card">
              <div className="aspect-[4/5] overflow-hidden relative">
                <a href="https://www.instagram.com/p/DQZtyF3DOsL/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/BARISTAHERO_IMG/4.webp"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    fill
                    alt="Barista Hero 4"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                    quality={85}
                  />
                </a>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.images.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl bg-card cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-[9/16] overflow-hidden relative">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.title || `Gallery image ${index + 1}`}
                  fill
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 3}
                  loading={index < 3 ? undefined : "lazy"}
                  quality={85}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox images={gallery.images} initialIndex={lightboxIndex} onClose={() => setLightboxOpen(false)} />
      )}
    </div>
  )
}
