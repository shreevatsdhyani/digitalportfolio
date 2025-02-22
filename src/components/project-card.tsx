"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Github } from "lucide-react"
import Image, { StaticImageData } from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: StaticImageData
  link: string
}

export function ProjectCard({ title, description, tags, image, link }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
      <Card className="overflow-hidden h-[540px]">
        <CardHeader className="p-0">
          <div className="relative aspect-video">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button asChild>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View Project
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

