import React from 'react'
import { motion } from 'framer-motion'

export default function AnimatedIcon({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-12 h-12 rounded-xl bg-[#1C1238]/80 border border-white/10 flex items-center justify-center text-[#F9E27A] shadow-[0_0_20px_rgba(249,226,122,0.2)]"
    >
      {children}
    </motion.div>
  )
}
