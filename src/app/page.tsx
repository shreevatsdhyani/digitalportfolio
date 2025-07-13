"use client"

import goofypic from "@/assets/Thumbnailgoofy.png"
import ecgpic from "@/assets/ecgpic.jpg"
import urlpic from "@/assets/urlpic.jpg"
import { Achievements } from "@/components/achievements"
import { ContactForm } from "@/components/contact-form"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { Footer } from "@/components/footer"
// import { ProfileImage } from "@/components/profile-image"
import { ProjectCard } from "@/components/project-card"
import { SkillWheel } from "@/components/skill-wheel"
import { SocialLinks } from "@/components/social-links"
import { TypewriterEffect } from "@/components/typewritter-effect"
import { Button } from "@/components/ui/button"
import { Environment, Float, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { motion } from "framer-motion"
import Link from "next/link"
import { Suspense } from "react"

export default function Home() {
  const words = [
  { text: "Turning" },
  { text: "data" },
  { text: "into" },
  { text: "action," },
  { text: "and" },
  { text: "models", className: "text-primary" },
  { text: "into" },
  { text: "impact." },
]


  return (
    <><main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-10">
            {/* <ProfileImage /> */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-4"
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">Shreevats Dhyani</h1>
              <div className="h-12">
                <TypewriterEffect words={words} />
              </div>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                ML Engineer | Generative AI Developer | Software Innovator
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="text-lg" asChild>
                <Link href="https://drive.google.com/file/d/1NioFIcq7Xy29u2XwseDTVk1TPodbGKsA/view?usp=sharing">
                  My Resume
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <Link href="https://www.linkedin.com/in/shreevatsdhyani/">
                  Get in Touch
                </Link>
              </Button>
            </motion.div>
            <SocialLinks />
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Suspense fallback={null}>
              <Float speed={4} rotationIntensity={1} floatIntensity={2} position={[0, 0, 0]}>
                <mesh>
                  <torusGeometry args={[2, 0.2, 16, 100]} />
                  <meshStandardMaterial color="purple" />
                </mesh>
              </Float>
              <OrbitControls enableZoom={false} />
              <Environment preset="city" />
            </Suspense>
          </Canvas>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I&apos;m a dedicated Machine Learning and Data Science Engineer with a knack for software development. I specialize in crafting intelligent, data-driven solutions to tackle real-world challenges, leveraging pioneering technologies to deliver impactful results.
            </p>
            <SkillWheel />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of my recent projects that showcase my skills and expertise.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <ProjectCard
              title="Goofy Music"
              description="Your personalized music streaming platform with a sleek interface, powerful player, and seamless authentication for an unmatched listening experience."
              tags={["HTML", "CSS", "Tailwind CSS", "JavaScript", "Django", "PostgreSQL", "Google Authentication", "Email Integration"]}
              image={goofypic}
              link="https://github.com/shreevatsdhyani/GoofyMusic" />
            <ProjectCard
              title="ECG Anomaly Detection using Autoencoders"
              description="Autoencoder-based ECG anomaly detection using TensorFlow/Keras."
              tags={["Python", "TensorFlow", "Keras", "NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "Plotly"]}
              image={ecgpic}
              link="https://github.com/shreevatsdhyani/ECG_Anomaly_Detector" />
            <ProjectCard
              title="Malicious URL Detector"
              description="A web app using AI to detect malicious URLs, offering a secure and user-friendly browsing experience."
              tags={["Python", "Flask", "Scikit-learn", "Pandas", "NumPy", "TF-IDF Vectorizer", "HTML", "CSS", "JavaScript", "Pickle", "CSV", "Git"]}
              image={urlpic}
              link="https://github.com/shreevatsdhyani/MaliciousURLDetector" />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Work Experience</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey and achievements.
            </p>
          </motion.div>
          <div className="mt-12">
            <ExperienceTimeline />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Achievements</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Recognition and milestones in my professional journey.
            </p>
          </motion.div>
          <div className="mt-12">
            <Achievements />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind? Let&apos;s work together to bring your ideas to life.
            </p>
            <SocialLinks className="mb-8" />
          </motion.div>
          <div className="mx-auto max-w-lg mt-12">
            <ContactForm />
          </div>
        </div>
      </section>
    </main><Footer /></>
  )
}

