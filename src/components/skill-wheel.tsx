"use client"

import { motion } from "framer-motion"
import {
  FaGithub,
  FaHtml5,
  FaJava,
  FaPython,
  FaReact,
} from "react-icons/fa"
import {
  SiCplusplus,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
  SiTensorflow,
  SiKeras,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiFastapi,
  SiFlask,
  SiVercel,
  SiAmazonaws,
  SiGooglecloud,
  SiGithubactions,
  SiSqlite,
  SiVisualstudiocode,
  SiPostman,
  SiIntellijidea,
  SiSelenium,
  SiBeautifulsoup,
  SiHuggingface,
  SiLangchain,
  SiApachenetbeans,
  SiRender,
} from "react-icons/si"

const skills = [
  { name: "Python", icon: <FaPython className="w-8 h-8" /> },
  { name: "Java", icon: <FaJava className="w-8 h-8" /> },
  { name: "C/C++", icon: <SiCplusplus className="w-8 h-8" /> },
  { name: "SQL", icon: <SiPostgresql className="w-8 h-8" /> },
  { name: "JavaScript", icon: <SiJavascript className="w-8 h-8" /> },
  { name: "HTML/CSS", icon: <FaHtml5 className="w-8 h-8" /> },
  { name: "React", icon: <FaReact className="w-8 h-8" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="w-8 h-8" /> },
  { name: "Flask", icon: <SiFlask className="w-8 h-8" /> },
  { name: "FastAPI", icon: <SiFastapi className="w-8 h-8" /> },
  { name: "GitHub", icon: <FaGithub className="w-8 h-8" /> },
  { name: "VS Code", icon: <SiVisualstudiocode className="w-8 h-8" /> },
  { name: "IntelliJ", icon: <SiIntellijidea className="w-8 h-8" /> },
  { name: "Postman", icon: <SiPostman className="w-8 h-8" /> },
  { name: "GCP", icon: <SiGooglecloud className="w-8 h-8" /> },
  { name: "AWS EC2", icon: <SiAmazonaws className="w-8 h-8" /> },
  { name: "Vercel", icon: <SiVercel className="w-8 h-8" /> },
  { name: "Render.com", icon: <SiRender className="w-8 h-8" /> },
  { name: "CI/CD Basics", icon: <SiGithubactions className="w-8 h-8" /> },
  { name: "SQLite", icon: <SiSqlite className="w-8 h-8" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="w-8 h-8" /> },
  { name: "Keras", icon: <SiKeras className="w-8 h-8" /> },
  { name: "Hugging Face", icon: <SiHuggingface className="w-8 h-8" /> },
  { name: "LangChain", icon: <SiLangchain className="w-8 h-8" /> },
  { name: "pandas", icon: <SiPandas className="w-8 h-8" /> },
  { name: "NumPy", icon: <SiNumpy className="w-8 h-8" /> },
  { name: "Matplotlib", icon: <FaPython className="w-8 h-8" /> },
  { name: "Seaborn", icon: <FaPython className="w-8 h-8" /> },
  { name: "Scikit-learn", icon: <SiScikitlearn className="w-8 h-8" /> },
  { name: "FAISS", icon: <FaPython className="w-8 h-8" /> },
  { name: "BeautifulSoup", icon: <SiBeautifulsoup className="w-8 h-8" /> },
  { name: "Selenium", icon: <SiSelenium className="w-8 h-8" /> },
  { name: "Prompt Engineering", icon: <SiHuggingface className="w-8 h-8" /> },
  { name: "LLM Fine-tuning", icon: <SiHuggingface className="w-8 h-8" /> },
  { name: "Transfer Learning", icon: <SiTensorflow className="w-8 h-8" /> },
  { name: "RAG", icon: <SiLangchain className="w-8 h-8" /> },
  { name: "NLP", icon: <SiHuggingface className="w-8 h-8" /> },
  { name: "API Development", icon: <SiFastapi className="w-8 h-8" /> },
]

export function SkillWheel() {
  return (
    <div className="space-y-10 w-full max-w-6xl">
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-primary">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-7">
          {skills.map((skill, index) => (
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
    </div>
  )
}
