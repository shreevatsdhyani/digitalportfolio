"use client"

import { motion, stagger, useAnimate } from "framer-motion"
import { useEffect } from "react"

export function TypewriterEffect({
  words,
  className = "",
}: {
  words: {
    text: string
    className?: string
  }[]
  className?: string
}) {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      },
    )
  }, [animate])

  const renderWords = words.map((word, idx) => {
    return (
      <motion.span
        key={`${word.text}-${idx}`}
        className={word.className}
        initial={{
          opacity: 0,
        }}
      >
        {word.text}&nbsp;
      </motion.span>
    )
  })

  return (
    <div className={`${className}`} ref={scope}>
      <div className="text-2xl sm:text-4xl md:text-5xl font-bold">{renderWords}</div>
    </div>
  )
}

