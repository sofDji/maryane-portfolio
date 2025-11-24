import { alumniSansPinstripe, babylonica } from "@/app/layout"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/maria-portrait.jpg)" }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="space-y-6 text-center md:text-left max-w-3xl">
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance text-white drop-shadow-lg ${babylonica.className}`}>
            Maria Nadjem
          </h1>
          <p className="text-2xs md:text-2xs text-white/90 max-w-2xl text-balance drop-shadow-md">
            I draw inspiration from the small details in everyday life to create meaningful stories through photography and filmmaking. My background in marketing and brand content strategy helps me deliver projects that connect both visually and strategically.
          </p>
          <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
            <span className="text-sm text-white/80">Photography</span>
            <span className="text-sm text-white/80">•</span>
            <span className="text-sm text-white/80">Filmmaking</span>
            <span className="text-sm text-white/80">•</span>
            <span className="text-sm text-white/80">Event</span>
            <span className="text-sm text-white/80">•</span>
            <span className="text-sm text-white/80">Marketing Campaign</span>
          </div>
        </div>
      </div>
    </section>
  )
}
