"use client"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion"
import { Github, Instagram, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/shreevatsdhyani",
    color: "hover:text-[#333]",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/shreevatsdhyani",
    color: "hover:text-[#0077b5]",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:shreevats37@gmail.com",
    color: "hover:text-[#EA4335]",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/shreevats.dhyani",
    color: "hover:text-[#E4405F]",
  },
]

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <TooltipProvider delayDuration={200}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className={`flex gap-4 ${className}`}
      >
        {socialLinks.map((social) => {
          const Icon = social.icon
          return (
            <Tooltip key={social.name}>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`rounded-full ${social.color} dark:hover:text-white transition-colors`}
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                    <Icon className="w-5 h-5" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{social.name}</p>
              </TooltipContent>
            </Tooltip>
          )
        })}
      </motion.div>
    </TooltipProvider>
  )
}

