import React from 'react'
import { cn } from '../utils/cn'

export default function GradientButton({ children, className = '', as = 'button', href = '#', onClick, size = 'md' }) {
  const Comp = as === 'a' ? 'a' : 'button'
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5',
    lg: 'px-6 py-3 text-lg'
  }
  return (
    <Comp
      href={as === 'a' ? href : undefined}
      onClick={onClick}
      className={cn(
        'relative inline-flex items-center justify-center font-medium rounded-xl text-slate-900 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F9E27A] focus:ring-offset-[#0F0823] active:scale-[0.98] overflow-hidden',
        'bg-gradient-to-r from-[#B38CF7] to-[#F3C15C]',
        'shadow-[0_0_30px_rgba(179,140,247,0.25)] hover:shadow-[0_0_45px_rgba(243,193,92,0.35)]',
        sizes[size],
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-white/0 hover:bg-white/10 transition-colors" />
    </Comp>
  )
}
