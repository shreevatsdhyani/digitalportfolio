"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

interface Experience {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  skills: string[]
}

const experiences: Experience[] = [
  {
    title: "Software Developer Intern",
    company: "IWINTU Global Services Pvt Ltd",
    location: "Remote",
    period: "October 2024 - December 2024",
    description: [
      "Developed and maintained software applications, producing clean, efficient, and well-documented code.",
      "Diagnosed and resolved software issues; participated in code reviews and technical discussions to deliver high-quality outputs.",
      "Applied industry-standard tools and techniques, advancing skills through real-world projects, mentorship, and performance evaluations.",
    ],
    skills: ["Python", "React", "JavaScript", "Artificial Intelligence"],
  },
  {
    title: "AI Intern",
    company: "IBM SkillsBuild",
    location: "Remote",
    period: "July 2024 - August 2024",
    description: [
      "Gained hands-on experience in AI, Generative AI, and Machine Learning, including chatbot design with IBM Watson Assistant.",
      "Earned certifications and enhanced skills through expert-led masterclasses and real-world projects.",
    ],
    skills: ["Python", "Gen AI", "Machine Learning", "Chatbot Design", "Prompt Engineering"],
  },
]

export function ExperienceTimeline() {
  return (
    <div className="relative container max-w-4xl">
      {/* Timeline line */}
      <div className="absolute left-4 sm:left-1/2 transform -translate-x-px h-full w-[2px] bg-border" />

      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="relative mb-12 last:mb-0"
        >
          {/* Timeline dot */}
          <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />

          {/* Content card container with responsive alignment */}
          <div className={`flex items-center ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
            <Card className={`w-full sm:w-[calc(50%-2rem)] ${index % 2 === 0 ? "sm:mr-8" : "sm:ml-8"} ml-10 sm:ml-0`}>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-xl">{experience.title}</h3>
                    <p className="text-primary font-medium">{experience.company}</p>
                  </div>

                  {/* Period and location */}
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    {experience.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      ))}
    </div>
  )
}