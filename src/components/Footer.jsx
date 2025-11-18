import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-[#0F0823]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-[#CFCFEA]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-r from-[#B38CF7] to-[#F3C15C]" />
            <span className="text-white font-semibold">QABRIC</span>
          </div>
          <p className="text-sm opacity-80">Smart. Simple. Seamless.</p>
          <p className="text-sm opacity-60">© {new Date().getFullYear()} QABRIC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
