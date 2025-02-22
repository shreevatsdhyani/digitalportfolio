"use client"

import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import * as React from "react"

const links = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    document.body.style.overflow = isOpen ? "unset" : "hidden"
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" className="relative z-50" onClick={toggleMenu}>
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        <span className="sr-only">Toggle menu</span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Full-screen blur backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/10 backdrop-blur-3xl z-40"
              onClick={toggleMenu}
            />

            {/* Crisp navigation drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 bottom-0 w-[280px]  z-50"
            >
              <nav className="flex flex-col h-full p-6 space-y-3">
                {/* Close button header */}
                <div className="">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-auto hover:bg-accent/50"
                    onClick={toggleMenu}
                  >
                    {/* <X className="h-6 w-6 text-foreground/90" /> */}
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <div className="bg-background/90 flex flex-col">

                {/* Navigation links */}
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={toggleMenu}
                    className="px-4 py-3 rounded-lg hover:bg-accent/50 transition-colors font-medium text-foreground/90 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}