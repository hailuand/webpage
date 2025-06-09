"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink, ArrowDown, Menu } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import websiteData from "@/data/website-data.json"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({
    about: null,
    experience: null,
    projects: null,
    contact: null,
  })

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      // Update scroll progress for progress bar
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / scrollHeight) * 100
      setScrollProgress(progress)

      // Determine active section
      for (const section of Object.keys(sectionsRef.current)) {
        const element = sectionsRef.current[section]
        if (!element) continue

        const { offsetTop, offsetHeight } = element
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = sectionsRef.current[sectionId]
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "bg-dark-primary/10 text-dark-primary hover:bg-dark-primary/20",
      secondary: "bg-dark-secondary/10 text-dark-secondary hover:bg-dark-secondary/20",
      accent: "bg-dark-accent/10 text-dark-accent hover:bg-dark-accent/20",
      highlight: "bg-dark-highlight/10 text-dark-highlight hover:bg-dark-highlight/20",
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.primary
  }

  const getProjectButtonClasses = (color: string) => {
    const colorMap = {
      primary: "border-dark-primary/20 bg-dark-primary/10 text-dark-primary hover:bg-dark-primary/20",
      secondary: "border-dark-secondary/20 bg-dark-secondary/10 text-dark-secondary hover:bg-dark-secondary/20",
      accent: "border-dark-accent/20 bg-dark-accent/10 text-dark-accent hover:bg-dark-accent/20",
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.primary
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 z-50 h-1 bg-gradient-dark-progress" style={{ width: `${scrollProgress}%` }} />

      {/* Header */}
      <header className="fixed top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="bg-gradient-dark-primary bg-clip-text text-transparent">{websiteData.personal.name}</span>
          </Link>

          <nav className="hidden items-center space-x-8 text-sm font-medium md:flex">
            {["about", "experience", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative transition-colors hover:text-foreground/80 ${
                  activeSection === section ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-dark-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:flex md:items-center md:gap-2">
              <Link href={websiteData.social.github} target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href={websiteData.social.linkedin} target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 pt-16">
                  {["about", "experience", "projects", "contact"].map((section) => (
                    <button
                      key={section}
                      onClick={() => {
                        scrollToSection(section)
                        document.querySelector('[data-state="open"]')?.setAttribute("data-state", "closed")
                      }}
                      className="flex items-center text-lg font-medium"
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  ))}
                  <div className="mt-8 flex items-center gap-4">
                    <Link href={websiteData.social.github} target="_blank" rel="noreferrer">
                      <Button variant="ghost" size="icon">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                    <Link href={websiteData.social.linkedin} target="_blank" rel="noreferrer">
                      <Button variant="ghost" size="icon">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </Link>
                    <Link href={`mailto:${websiteData.contact.email}`}>
                      <Button variant="ghost" size="icon">
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                      </Button>
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="relative">
        {/* Hero Section */}
        <section
          id="about"
          ref={(el) => (sectionsRef.current.about = el)}
          className="relative min-h-screen overflow-hidden pt-16"
        >
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-[40%] -right-[10%] h-[500px] w-[500px] rounded-full bg-dark-primary/10 blur-3xl" />
            <div className="absolute top-[20%] -left-[10%] h-[300px] w-[300px] rounded-full bg-dark-secondary/10 blur-3xl" />
          </div>

          <div className="container relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative mb-8 aspect-square h-[180px] w-[180px] overflow-hidden rounded-full border-4 border-background bg-gradient-dark-primary p-1 sm:h-[220px] sm:w-[220px] md:h-[280px] md:w-[280px]"
            >
              <Image
                src={websiteData.personal.profileImage || "/placeholder.svg"}
                alt={websiteData.personal.name}
                fill
                className="rounded-full object-cover"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <h1 className="mb-4 bg-gradient-dark-hero bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
                {websiteData.personal.name}
              </h1>
              <p className="mx-auto mb-6 max-w-[600px] text-xl text-muted-foreground">
                {websiteData.personal.description}
              </p>
              <div className="mb-8 flex flex-wrap justify-center gap-2">
                {websiteData.skills.map((skill) => (
                  <Badge key={skill.name} className={getColorClasses(skill.color)}>
                    {skill.name}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  className="bg-gradient-dark-primary text-white transition-all hover:opacity-90"
                  onClick={() => scrollToSection("contact")}
                >
                  Get in touch
                </Button>
                <Button variant="outline" asChild>
                  <Link href={websiteData.personal.resumeUrl} target="_blank">
                    View Resume
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full animate-bounce"
                onClick={() => scrollToSection("experience")}
              >
                <ArrowDown className="h-5 w-5" />
                <span className="sr-only">Scroll down</span>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          ref={el => { sectionsRef.current.experience = el; }}
          className="relative py-24 sm:py-32"
        >
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-12 text-center"
            >
              <h2 className="mb-3 bg-gradient-dark-secondary bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                Experience
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground">
                My professional journey building exceptional software solutions
              </p>
            </motion.div>

            <div className="relative mx-auto max-w-4xl">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-dark-hero -translate-x-1/2" />

              {/* Timeline items */}
              <div className="space-y-12">
                {websiteData.experience.map((role) => (
                  <motion.div
                    key={role.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`relative flex flex-col md:flex-row ${role.side === "right" ? "md:flex-row-reverse" : ""} items-center md:items-stretch`}
                  >
                    {/* Timeline circle/badge */}
                    <div className="w-12 flex-shrink-0 flex flex-col items-center justify-center relative z-10">
                      {role.isCurrent ? (
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-dark-primary">
                          <div className="h-3 w-3 rounded-full bg-white" />
                        </div>
                      ) : (
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-background bg-gradient-dark-primary text-white shadow-lg">
                          <span className="text-xs font-bold">{role.period.split("-")[0].trim()}</span>
                        </div>
                      )}
                    </div>
                    {/* Card positioning */}
                    <div className="md:w-1/2">
                      <Card
                        className={`overflow-hidden border-none bg-background/50 shadow-lg ${role.isCurrent ? "backdrop-blur-sm" : ""}`}
                      >
                        {role.isCurrent && (
                          <div className="absolute inset-0 bg-gradient-to-r from-dark-primary/10 to-dark-secondary/10" />
                        )}
                        <CardHeader className={role.isCurrent ? "relative" : ""}>
                          {role.isCurrent ? (
                            <div className="flex items-center justify-between">
                              <CardTitle>{role.title}</CardTitle>
                              <Badge className="bg-gradient-dark-primary text-white">Current</Badge>
                            </div>
                          ) : (
                            <CardTitle>{role.title}</CardTitle>
                          )}
                          <CardDescription>
                            {role.company} • {role.period}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className={`space-y-2 ${role.isCurrent ? "relative" : ""}`}>
                          <p>{role.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {role.technologies.map((tech) => (
                              <Badge key={tech} className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          ref={el => { sectionsRef.current.projects = el; }}
          className="relative py-24 sm:py-32"
        >
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-[20%] -left-[10%] h-[500px] w-[500px] rounded-full bg-dark-secondary/5 blur-3xl" />
            <div className="absolute bottom-[10%] -right-[20%] h-[400px] w-[400px] rounded-full bg-dark-primary/5 blur-3xl" />
          </div>

          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-12 text-center"
            >
              <h2 className="mb-3 bg-gradient-dark-accent bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                Projects & Open Source Contributions
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground">Some notable work and side projects</p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {websiteData.projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Card className="group h-full overflow-hidden border-none bg-background/50 shadow-lg transition-all duration-300 hover:shadow-xl backdrop-blur-sm">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={200}
                        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-60" />
                    </div>
                    <CardContent className="p-6">
                      <CardTitle className="flex items-center justify-between">
                        <span>{project.title}</span>
                        <Link href={project.githubUrl} target="_blank" rel="noreferrer">
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                            <Github className="h-4 w-4" />
                            <span className="sr-only">GitHub</span>
                          </Button>
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">{project.description}</CardDescription>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="bg-background/50">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-6">
                        {project.liveUrl ? (
                          <Button
                            variant="outline"
                            size="sm"
                            className={`gap-1 rounded-full ${getProjectButtonClasses(project.color)}`}
                            asChild
                          >
                            <Link href={project.liveUrl} target="_blank" rel="noreferrer">
                              Live Demo <ExternalLink className="h-3 w-3" />
                            </Link>
                          </Button>
                        ) : (
                          <Button
                            variant="outline"
                            size="sm"
                            className={`gap-1 rounded-full ${getProjectButtonClasses(project.color)}`}
                            asChild
                          >
                            <Link href={project.githubUrl} target="_blank" rel="noreferrer">
                              GitHub <Github className="h-3 w-3" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Talks Section */}
        <section
          id="talks"
          ref={el => { if (sectionsRef.current) sectionsRef.current.talks = el; }}
          className="relative py-24 sm:py-32"
        >
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-[10%] -right-[10%] h-[400px] w-[400px] rounded-full bg-dark-accent/10 blur-3xl" />
            <div className="absolute bottom-[10%] -left-[10%] h-[300px] w-[300px] rounded-full bg-dark-highlight/10 blur-3xl" />
          </div>

          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-12 text-center"
            >
              <h2 className="mb-3 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                Talks
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground">
                Conference talks and presentations I've given
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {websiteData.talks.map((talk) => (
                <Card key={talk.id} className="h-full overflow-hidden border-none bg-background/50 shadow-lg backdrop-blur-sm">
                  <CardContent className="p-6 flex flex-col h-full">
                    <CardTitle className="mb-2 text-lg font-bold flex items-center gap-2">
                      <span>{talk.title}</span>
                      <Link href={talk.link} target="_blank" rel="noreferrer">
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">View Talk</span>
                        </Button>
                      </Link>
                    </CardTitle>
                    <CardDescription className="mb-2 text-sm text-muted-foreground">
                      {talk.event} &middot; {talk.date}
                    </CardDescription>
                    <p className="mb-4 flex-1">{talk.description}</p>
                    <Button asChild variant="outline" size="sm" className="rounded-full mt-auto">
                      <Link href={talk.link} target="_blank" rel="noreferrer">
                        Watch Talk <ExternalLink className="h-3 w-3 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          ref={el => { sectionsRef.current.contact = el; }}
          className="relative py-24 sm:py-32"
        >
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-[10%] -right-[20%] h-[500px] w-[500px] rounded-full bg-dark-primary/5 blur-3xl" />
            <div className="absolute bottom-[10%] -left-[10%] h-[300px] w-[300px] rounded-full bg-dark-secondary/5 blur-3xl" />
          </div>

          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-12 text-center"
            >
              <h2 className="mb-3 bg-gradient-dark-highlight bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                Contact
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground">
                Let's connect
              </p>
            </motion.div>

            <div className="mx-auto max-w-2xl">
              <Card className="overflow-hidden border-none bg-background/50 shadow-xl backdrop-blur-sm">
                <div className="">
                  <div className="relative overflow-hidden bg-gradient-dark-primary p-6 text-white md:p-8">
                    <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10" />
                    <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/10" />

                    <div className="relative">
                      <h3 className="mb-6 text-2xl font-bold">Get in Touch</h3>

                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                            <Mail className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm text-white/70">Email</p>
                            <p className="font-medium">{websiteData.contact.email}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                            <Linkedin className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm text-white/70">LinkedIn</p>
                            <Link
                              href={websiteData.contact.linkedin.url}
                              target="_blank"
                              rel="noreferrer"
                              className="font-medium hover:underline"
                            >
                              {websiteData.contact.linkedin.display}
                            </Link>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                            <Github className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm text-white/70">GitHub</p>
                            <Link
                              href={websiteData.contact.github.url}
                              target="_blank"
                              rel="noreferrer"
                              className="font-medium hover:underline"
                            >
                              {websiteData.contact.github.display}
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="mt-12">
                        <p className="mb-4 text-white/80">Follow me on social media</p>
                        <div className="flex gap-4">
                          <Link href={websiteData.social.linkedin} target="_blank" rel="noreferrer">
                            <Button size="icon" className="rounded-full bg-white/10 text-white hover:bg-white/20">
                              <Linkedin className="h-5 w-5" />
                              <span className="sr-only">LinkedIn</span>
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} {websiteData.personal.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href={websiteData.social.github} target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href={websiteData.social.linkedin} target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href={`mailto:${websiteData.contact.email}`}>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
