import React from 'react'
import { cn } from '../utils/cn'

export default function SectionCard({ children, className = '' }) {
  return (
    <div className={cn(
      'relative rounded-2xl p-6 sm:p-8 bg-[#1C1238]/60 border border-white/10 backdrop-blur-xl',
      'shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_10px_30px_rgba(0,0,0,0.35)]',
      className
    )}>
      <div className="absolute -inset-px rounded-2xl pointer-events-none" style={{
        background: 'linear-gradient(90deg, rgba(179,140,247,0.15) 0%, rgba(243,193,92,0.15) 100%)',
        mask: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
        WebkitMask: 'linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)'
      }} />
      {children}
    </div>
  )
}
