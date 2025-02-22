"use client"

import pp from "@/assets/pp3.jpg"
import { motion } from "framer-motion"
import Image from "next/image"

export function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="relative w-40 h-40 md:w-56 md:h-56 mx-auto mb-8"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary/50 animate-pulse" />
      <Image
        src={pp}
        alt="Profile Picture"
        width={400}
        height={400}
        priority
        className="rounded-full border-4 border-background relative z-10 object-cover w-full h-full"
      />
    </motion.div>
  )
}

