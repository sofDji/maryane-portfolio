import { Mail, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Open for collaborations, and creative projects. Feel free to reach out to discuss your vision.
          </p>

          <div className="pt-8">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Mail className="mr-2 h-5 w-5" />
              maryane-nadjem@hotmail.com
            </Button>
          </div>

          <div className="flex justify-center gap-6 pt-8">
            <a
              href="https://www.instagram.com/euphoriabk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/in/maria-nadjem-144761232/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Maria Nadjem Photography. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
