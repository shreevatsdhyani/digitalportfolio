"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Award } from "lucide-react"

interface Achievement {
  title: string
  description: string
  date: string
//   image: string
  
}

const achievements: Achievement[] = [
  {
    title: "Research Paper Presentation at ICAPIE-2024 International Conference",
    description:
      "Authored and presented a research paper on 'Advancing Healthcare in Industry 4.0: Machine Learning Applications' at the 8th International Conference on Advanced Production and Industrial Engineering (ICAPIE 2024), exploring AI-driven solutions for modern healthcare systems.",
    date: "August 2024",
    // image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Research Paper Presentation at ICARI-2025 International Conference",
    description:
      "Authored and presented a research paper titled 'Autoencoders for ECG Anomaly Detection: A Comprehensive Survey' at the 11th International Conference on Advanced Research and Innovation (ICARI 2025), exploring deep learning architectures for early detection of cardiac irregularities.",
    date: "February 2025",
    // image: "/placeholder.svg?height=400&width=600",
  },
]

export function Achievements() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {achievements.map((achievement, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden group">
            <CardContent className="p-0">
              <div className="relative h-48 w-full">
                {/* <Image
                  src={achievement.image }
                  alt={achievement.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                /> */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <Award className="w-12 h-12 text-primary" />
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold text-xl group-hover:text-primary transition-colors">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.date}</p>
                </div>
                <p className="text-muted-foreground">{achievement.description}</p>
                
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

