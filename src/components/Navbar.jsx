import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import GradientButton from './GradientButton'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  const navItem = ({ to, label }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-lg text-sm transition-colors ${isActive ? 'text-white bg-white/5' : 'text-[#CFCFEA]/80 hover:text-white hover:bg-white/5'}`}
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  )
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#0F0823]/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-[#B38CF7] to-[#F3C15C] shadow-[0_0_20px_rgba(179,140,247,0.35)]" />
          <span className="text-white font-semibold tracking-tight">QABRIC</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {navItem({ to: '/', label: 'Home' })}
          {navItem({ to: '/features', label: 'Features' })}
          {navItem({ to: '/pricing', label: 'Pricing' })}
          {navItem({ to: '/about', label: 'About' })}
          {navItem({ to: '/contact', label: 'Contact' })}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <GradientButton as="a" href="#get-started" size="sm">Get Started</GradientButton>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <div className="flex flex-col gap-1">
            {navItem({ to: '/', label: 'Home' })}
            {navItem({ to: '/features', label: 'Features' })}
            {navItem({ to: '/pricing', label: 'Pricing' })}
            {navItem({ to: '/about', label: 'About' })}
            {navItem({ to: '/contact', label: 'Contact' })}
          </div>
          <GradientButton as="a" href="#get-started" className="w-full" size="sm">Get Started</GradientButton>
        </div>
      )}
    </header>
  )
}
