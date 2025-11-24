"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LightboxProps {
  images: { src: string; title: string }[]
  initialIndex: number
  onClose: () => void
}

export function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const containerRef = useRef<HTMLDivElement | null>(null)

  // touch swipe state
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)
  const touchMoved = useRef(false)
  const SWIPE_THRESHOLD = 50 // px

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") goToPrevious()
      if (e.key === "ArrowRight") goToNext()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  // prevent body scroll when lightbox is mounted
  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [])

  // Touch handlers for swipe
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0]
      touchStartX.current = t.clientX
      touchStartY.current = t.clientY
      touchMoved.current = false
    }

    const onTouchMove = (e: TouchEvent) => {
      touchMoved.current = true
    }

    const onTouchEnd = (e: TouchEvent) => {
      if (touchStartX.current == null || touchStartY.current == null) return
      if (!touchMoved.current) {
        // treat as tap if needed (no-op for now)
        touchStartX.current = null
        touchStartY.current = null
        return
      }
      const changedTouches = (e.changedTouches && e.changedTouches[0]) || null
      if (!changedTouches) {
        touchStartX.current = null
        touchStartY.current = null
        return
      }
      const deltaX = changedTouches.clientX - touchStartX.current
      const deltaY = changedTouches.clientY - touchStartY.current

      // only consider mostly-horizontal moves
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD) {
        if (deltaX > 0) {
          goToPrevious()
        } else {
          goToNext()
        }
      }

      touchStartX.current = null
      touchStartY.current = null
      touchMoved.current = false
    }

    el.addEventListener("touchstart", onTouchStart, { passive: true })
    el.addEventListener("touchmove", onTouchMove, { passive: true })
    el.addEventListener("touchend", onTouchEnd)
    return () => {
      el.removeEventListener("touchstart", onTouchStart)
      el.removeEventListener("touchmove", onTouchMove)
      el.removeEventListener("touchend", onTouchEnd)
    }
  }, [goToNext, goToPrevious])

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Image ${currentIndex + 1} of ${images.length}`}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
    >
      {/* Close - larger tappable area on mobile */}
      <Button
        variant="ghost"
        size="icon"
        aria-label="Close"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:bg-white/10 p-3 sm:p-2 rounded-md"
        onClick={onClose}
      >
        <X className="h-6 w-6 sm:h-5 sm:w-5" />
      </Button>

      {/* Desktop: side arrows (hidden on small screens) */}
      <Button
        variant="ghost"
        size="icon"
        aria-label="Previous"
        onClick={goToPrevious}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 p-2 rounded-md"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        aria-label="Next"
        onClick={goToNext}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 p-2 rounded-md"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Mobile: bottom floating controls (large tap targets) */}
      <div className="fixed left-0 right-0 bottom-6 flex items-center justify-center gap-6 md:hidden z-50">
        <button
          onClick={goToPrevious}
          aria-label="Previous image"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-white/10 text-white shadow-lg"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div className="px-4 py-2 rounded-full bg-black/40 text-white text-sm shadow">
          {currentIndex + 1} / {images.length}
        </div>

        <button
          onClick={goToNext}
          aria-label="Next image"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-white/10 text-white shadow-lg"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Image container: uses padding on desktop, full bleed on mobile */}
      <div className="relative w-full h-full max-w-7xl max-h-[90vh] p-4 md:p-12">
        <Image
          src={images[currentIndex].src || "/placeholder.svg"}
          alt={images[currentIndex].title}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
      </div>

      {/* Desktop counter (hidden on mobile since we show bottom counter) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-lg hidden md:block">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}
