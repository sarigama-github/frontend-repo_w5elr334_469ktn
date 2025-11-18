import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionCard from '../components/SectionCard'

export default function About() {
  return (
    <div className="min-h-screen bg-[#0F0823] text-white">
      <Navbar />
      <main className="pt-24 pb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <SectionCard>
          <h1 className="text-3xl font-semibold mb-2">About QABRIC</h1>
          <p className="text-[#CFCFEA]">We weave automation into businesses. QABRIC combines fabric-like connectivity with logic-driven intelligence to streamline operations.</p>
        </SectionCard>
        <SectionCard>
          <h2 className="text-xl font-semibold mb-2">Team</h2>
          <ul className="text-[#CFCFEA] space-y-2">
            <li><span className="text-white">CEO</span> – Vision, strategy, partnerships</li>
            <li><span className="text-white">CTO</span> – Tech, automation, infrastructure</li>
            <li><span className="text-white">CFO</span> – Money management, funding, growth planning</li>
            <li><span className="text-white">CMO</span> – Branding, outreach, customer education</li>
          </ul>
        </SectionCard>
        <SectionCard>
          <h2 className="text-xl font-semibold mb-2">Mission</h2>
          <p className="text-[#CFCFEA]">Reduce human effort using intelligent automation.</p>
          <h2 className="text-xl font-semibold mt-6 mb-2">Values</h2>
          <p className="text-[#CFCFEA]">Innovation, Trust, Reliability.</p>
        </SectionCard>
      </main>
      <Footer />
    </div>
  )
}
