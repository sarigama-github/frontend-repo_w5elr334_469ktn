import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GradientButton from '../components/GradientButton'
import SectionCard from '../components/SectionCard'
import AnimatedIcon from '../components/AnimatedIcon'
import { MessageCircle, Instagram, Bot, Workflow, Receipt, BarChart2 } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F0823] text-white">
      <Navbar />

      <main className="relative overflow-hidden">
        {/* Hero */}
        <section className="pt-28 pb-16">
          <div className="absolute inset-0 opacity-60">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
                >
                  <span className="block">Automate. Integrate. Accelerate.</span>
                </motion.h1>
                <p className="mt-5 text-[#CFCFEA] max-w-xl">QABRIC brings WhatsApp, Instagram, CRM, and AI workflows into one place.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <GradientButton as="a" href="#demo">Try Demo</GradientButton>
                  <GradientButton as="a" href="#get-started" className="bg-white/10 !text-white border border-white/10" >Get Started</GradientButton>
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-3 gap-4">
                  {[{icon: <MessageCircle size={24} />, label:'WhatsApp Automation'}, {icon:<Instagram size={24} />, label:'Instagram Automation'}, {icon:<Bot size={24} />, label:'AI Chatbot'}, {icon:<Workflow size={24} />, label:'CRM Workflow'}, {icon:<Receipt size={24} />, label:'Invoice Automation'}, {icon:<BarChart2 size={24} />, label:'Reports Dashboard'}].map((item, idx) => (
                    <SectionCard key={idx} className="flex flex-col items-center text-center gap-3 p-5">
                      <AnimatedIcon>{item.icon}</AnimatedIcon>
                      <span className="text-sm text-[#CFCFEA]">{item.label}</span>
                    </SectionCard>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* From Chaos to Clarity */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-6"
            >
              <SectionCard>
                <h3 className="text-xl font-semibold mb-2">From Chaos</h3>
                <p className="text-[#CFCFEA]">Disconnected tools, late replies, scattered spreadsheets, and manual processes slow you down.</p>
              </SectionCard>
              <SectionCard>
                <h3 className="text-xl font-semibold mb-2">To Clarity</h3>
                <p className="text-[#CFCFEA]">QABRIC centralizes automation—one hub for messaging, sales, reports, and AI-driven workflows.</p>
              </SectionCard>
            </motion.div>
          </div>
        </section>

        {/* Features grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold mb-6">What you can automate</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'WhatsApp Cloud API Automation', desc: 'Auto-replies, templates, broadcasts, and flows that convert.' },
                { title: 'Instagram Auto-Replies & Scheduling', desc: 'Reply to DMs, auto-tag leads, and schedule posts.' },
                { title: 'AI Email Writer', desc: 'Generate polished replies and outreach with context.' },
                { title: 'Auto Invoice Generator', desc: 'Turn approved quotes into invoices and send instantly.' },
                { title: 'CRM + Lead Tagging', desc: 'Unified pipeline, tags, and priority stage automation.' },
                { title: 'AI Report Automation', desc: 'Daily summary bot delivers KPIs to your inbox.' }
              ].map((f, i) => (
                <SectionCard key={i}>
                  <h3 className="font-medium">{f.title}</h3>
                  <p className="text-[#CFCFEA] mt-2 text-sm">{f.desc}</p>
                </SectionCard>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold mb-6">Loved by growing teams</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { q: 'We cut response time from hours to minutes.', a: 'A retail brand using WhatsApp + AI bot.' },
                { q: 'Reports that used to take a day now arrive every morning.', a: 'A services company with daily KPIs.' },
                { q: 'Invoices are generated without anyone touching a spreadsheet.', a: 'B2B startup on Growth plan.' },
              ].map((t, i) => (
                <SectionCard key={i}>
                  <p className="text-white">“{t.q}”</p>
                  <p className="text-[#CFCFEA] mt-3 text-sm">— {t.a}</p>
                </SectionCard>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
