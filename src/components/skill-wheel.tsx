"use client"

import { motion } from "framer-motion"
import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaJava,
  FaPython,
  FaReact
} from "react-icons/fa"
import {
  SiCplusplus,
  SiJavascript,
  SiKeras,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiScikitlearn,
  SiTailwindcss,
  SiTensorflow,
} from "react-icons/si"

const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: <FaPython className="w-8 h-8" /> },
      { name: "Java", icon: <FaJava className="w-8 h-8" /> },
      { name: "C/C++", icon: <SiCplusplus className="w-8 h-8" /> },
      { name: "JavaScript", icon: <SiJavascript className="w-8 h-8" /> },
      { name: "Web (HTML/CSS)", icon: <FaHtml5 className="w-8 h-8" /> },
    ],
  },
  {
    category: "Development",
    items: [
      { name: "React", icon: <FaReact className="w-8 h-8" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="w-8 h-8" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8" /> },
      { name: "GitHub", icon: <FaGithub className="w-8 h-8" /> },
    ],
  },
  {
    category: "ML Libraries",
    items: [
      { name: "TensorFlow", icon: <SiTensorflow className="w-8 h-8" /> },
      { name: "Keras", icon: <SiKeras className="w-8 h-8" /> },
      { name: "Scikit-learn", icon: <SiScikitlearn className="w-8 h-8" /> },
    ],
  },
  {
    category: "Data Tools",
    items: [
      { name: "Pandas", icon: <SiPandas className="w-8 h-8" /> },
      { name: "NumPy", icon: <SiNumpy className="w-8 h-8" /> },
    ],
  },
]

export function SkillWheel() {
  return (
    <div className="space-y-10 w-full max-w-6xl">
      {skills.map((group, groupIndex) => (
        <div key={group.category}>
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            {group.category}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-7">
            {group.items.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center space-y-4 p-6 bg-background/50 rounded-lg border border-border shadow-lg hover:shadow-xl transition-shadow hover:scale-105"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-primary"
                >
                  {skill.icon}
                </motion.div>
                <span className="text-lg font-semibold text-primary">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
