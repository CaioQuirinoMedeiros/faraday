import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"

const images = [
  "/images/fatality/fatality-0.jpg",
  "/images/fatality/fatality-1.jpg",
  "/images/fatality/fatality-2.jpg",
  "/images/fatality/fatality-3.jpg",
  "/images/fatality/fatality-4.jpg",
  "/images/fatality/fatality-5.jpg",
]

export default function FatalitySlideshow({ interval = 5_000 }) {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      interval
    )
    return () => clearInterval(id)
  }, [interval])

  return (
    <AnimatePresence>
      <motion.div
        key={`fatality-${index}`}
        className="relative size-full"
        initial={{ x: 600 }}
        animate={{
          x: 0,
          transition: {
            duration: 1.4,
            delay: 0.7,
            ease: "easeInOut",
          },
        }}
        viewport={{ once: true }}
        exit={{
          x: 600,
          transition: { duration: 0.7, ease: "easeInOut" },
        }}
        transition={{
          repeat: Infinity,
          repeatDelay: 0,
        }}
      >
        <img
          src={images[index]}
          alt={`Apostila fatality página ${index}`}
          className="size-full object-cover"
        />

        <div className="absolute inset-0 -left-1 bg-linear-to-l from-background/0 via-background/50 to-background" />
      </motion.div>
    </AnimatePresence>
  )
}
