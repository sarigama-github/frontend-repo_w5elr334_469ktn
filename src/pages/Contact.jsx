import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionCard from '../components/SectionCard'
import GradientButton from '../components/GradientButton'

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0F0823] text-white">
      <Navbar />
      <main className="pt-24 pb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <SectionCard>
          <h1 className="text-3xl font-semibold mb-4">Contact</h1>
          <form className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-[#CFCFEA]">Name</label>
              <input className="mt-1 w-full rounded-xl bg-[#1C1238]/60 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[#F9E27A]" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-[#CFCFEA]">Email</label>
              <input type="email" className="mt-1 w-full rounded-xl bg-[#1C1238]/60 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[#F9E27A]" placeholder="you@company.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-[#CFCFEA]">Business Type</label>
              <input className="mt-1 w-full rounded-xl bg-[#1C1238]/60 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[#F9E27A]" placeholder="D2C brand, agency, SaaS, etc." />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-[#CFCFEA]">Message</label>
              <textarea rows={4} className="mt-1 w-full rounded-xl bg-[#1C1238]/60 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[#F9E27A]" placeholder="Tell us what you want to automate" />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between">
              <GradientButton>Send Message</GradientButton>
              <a href="https://wa.me/" target="_blank" rel="noreferrer" className="text-[#F9E27A]">WhatsApp us →</a>
            </div>
          </form>
        </SectionCard>
        <SectionCard>
          <h2 className="text-xl font-semibold mb-2">Office</h2>
          <p className="text-[#CFCFEA]">Remote-first. Registered in Bengaluru, India.</p>
        </SectionCard>
      </main>
      <Footer />

      {/* Simple AI Chatbot widget placeholder */}
      <div className="fixed bottom-6 right-6">
        <button className="rounded-full p-4 bg-gradient-to-r from-[#B38CF7] to-[#F3C15C] shadow-[0_0_25px_rgba(179,140,247,0.35)]">Chat</button>
      </div>
    </div>
  )
}
