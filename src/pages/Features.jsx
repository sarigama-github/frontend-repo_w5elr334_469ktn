import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionCard from '../components/SectionCard'

export default function Features() {
  const items = [
    'WhatsApp Cloud API Automation',
    'Instagram Auto-Replies & Scheduling',
    'AI Email Writer',
    'Auto Invoice Generator',
    'CRM + Lead Tagging',
    'AI Report Automation & Daily Summary Bot',
    'Integrations: Meta, Google Sheets, OpenAI, Make, n8n'
  ]
  return (
    <div className="min-h-screen bg-[#0F0823] text-white">
      <Navbar />
      <main className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold mb-8">Features</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((title, i) => (
            <SectionCard key={i}>
              <h3 className="font-medium">{title}</h3>
              <p className="text-[#CFCFEA] mt-2 text-sm">Explore deep configuration, templates, and automation logic designed for teams.</p>
            </SectionCard>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
