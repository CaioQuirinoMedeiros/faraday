import { motion } from "motion/react"

interface DelayRenderWrapperProps {
  delay: number
  duration: number
  children: React.ReactNode
}

export function DelayRenderWrapper({
  children,
  duration,
  delay,
}: DelayRenderWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay, duration: duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
