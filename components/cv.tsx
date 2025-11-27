import { Card } from "@/components/ui/card"
import { Briefcase, GraduationCap, Languages, Award } from "lucide-react"

const experience = [
  {
    role: "Brand Content & Event Assistant",
    company: "La Marzocco",
    period: "2025 - 2026",
    description: "Brand content coordination including social media management, content production, and editorial strategy across blogs and newsletters. Activating digital events and managing national contests to boost engagement. Collaborating with La Marzocco global teams for aligned communication on product launches and events. Overseeing website and e-commerce management, stock control, and client relations for the La Marzocco Home Product. Planning and executing marketing campaigns for 2025 with personalized materials and promotional items.",
  },
  {
    role: "Professional Photographer and Videographer",
    company: "Freelance",
    period: "2018 - Present",
    description: "Visual project management involves coordinating with creative teams, stylists, and makeup artists to ensure consistency throughout each project. As an art director, I oversee visual direction to align closely with client expectations. In post-production, I focus on retouching and optimizing images using the Adobe Suite, adapting visuals for both web and social media platforms.",
  },
  {
    role: "Marketing & Digital Performance Manager",
    company: "Studio Marianne Guély",
    period: "2023 - 2024",
    description: "Content creation and social media management, customer experience, PR and event coordination, and web platform optimization for improved performance and user experience.",
  },
  {
    role: "Marketing & Communications Manager",
    company: "Marque Avenue",
    period: "2022 - 2023",
    description: "Content creation, web platform optimization and engagement management through event, campaigns, sales and competitions (online and offline). Overseeing collaborations and leading website and blog updates.",
  },
]

const education = [
  {
    degree: "Specialised Master - Data Marketing and E-Commerce Manager",
    institution: "Skema Business School",
    year: "2026",
  },
  {
    degree: "Masters in Marketing Strategy and Digital Communication",
    institution: "EIMP",
    year: "2024",
  },
  {
    degree: "Master in Visual Sciences",
    institution: "Sorbonne Université",
    year: "2022",
  },
  {
    degree: "Degree in Computer Science",
    institution: "Université de Paris Diderot",
    year: "2020",
  },
]

const languages = [
  { name: "French", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Arabic", level: "Fluent" },
  { name: "Japenese", level: "Intermediate" },
]

const skills = [
  "Adobe Suite",
  "DaVinci Resolve",
  "CMS",
  "CRM",
  "SEO / SEA",
  "Project Management",
  "Studio Lighting",
  "Client Relations",
  "Database Management",
  "HTML / CSS / JS",
]

export function CV() {
  return (
    <section id="cv" className="py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Curriculum Vitae</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Professional background, education, and expertise in visual storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-6 w-6 text-accent" />
              <h3 className="text-2xl font-semibold">Experience</h3>
            </div>
            {experience.map((item, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-border rounded-2xl min-h-[180px] flex flex-col justify-center"
              >
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">{item.role}</h4>
                  <p className="text-sm text-accent">{item.company}</p>
                  <p className="text-xs text-muted-foreground">{item.period}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed pt-2">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-6 w-6 text-accent" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            {education.map((item, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-border rounded-2xl min-h-[140px] flex flex-col justify-center"
              >
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">{item.degree}</h4>
                  <p className="text-sm text-accent">{item.institution}</p>
                  <p className="text-xs text-muted-foreground">{item.year}</p>
                </div>
              </Card>
            ))}

            {/* Languages */}
            <div className="flex items-center gap-3 mb-6 mt-12">
              <Languages className="h-6 w-6 text-accent" />
              <h3 className="text-2xl font-semibold">Languages</h3>
            </div>
            <Card className="p-8 bg-card border-border rounded-2xl min-h-[140px] flex flex-col justify-center">
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm font-medium">{lang.name}</span>
                    <span className="text-xs text-muted-foreground">{lang.level}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-6 w-6 text-accent" />
            <h3 className="text-2xl font-semibold">Skills & Expertise</h3>
          </div>
          <Card className="p-8 bg-card border-border rounded-2xl min-h-[120px] flex items-center">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span key={index} className="px-4 py-2 bg-secondary text-secondary-foreground text-sm rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
