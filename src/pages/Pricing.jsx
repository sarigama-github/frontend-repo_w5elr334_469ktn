import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionCard from '../components/SectionCard'
import GradientButton from '../components/GradientButton'

export default function Pricing() {
  const tiers = [
    { name: 'Starter', price: 1999, features: ['Basic WhatsApp + Email automation'] },
    { name: 'Growth', price: 5999, features: ['WhatsApp + Instagram + CRM + Reports'] },
    { name: 'Pro', price: 14999, features: ['Full suite + chatbot + analytics + API access'] },
  ]
  const [yearly, setYearly] = React.useState(false)

  const priceDisplay = (p) => yearly ? Math.round(p * 10) : p
  const suffix = yearly ? '/yr' : '/mo'

  return (
    <div className="min-h-screen bg-[#0F0823] text-white">
      <Navbar />
      <main className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold">Pricing</h1>
          <div className="flex items-center gap-3 text-sm text-[#CFCFEA]">
            <span>Monthly</span>
            <button onClick={() => setYearly(!yearly)} className="relative w-12 h-6 rounded-full bg-white/10 border border-white/10">
              <span className={`absolute top-0.5 ${yearly ? 'right-0.5' : 'left-0.5'} w-5 h-5 rounded-full bg-gradient-to-r from-[#B38CF7] to-[#F3C15C] transition-all`} />
            </button>
            <span>Yearly</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <SectionCard key={t.name} className="flex flex-col">
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="mt-3 text-4xl font-bold">₹{priceDisplay(t.price)}<span className="text-base font-normal text-[#CFCFEA]">{suffix}</span></p>
              <ul className="mt-4 space-y-2 text-sm text-[#CFCFEA]">
                {t.features.map((f) => <li key={f}>• {f}</li>)}
              </ul>
              <GradientButton className="mt-6">Choose {t.name}</GradientButton>
            </SectionCard>
          ))}
          <SectionCard className="flex flex-col">
            <h3 className="text-xl font-semibold">Custom Enterprise</h3>
            <p className="mt-3 text-[#CFCFEA]">Tailored workflows, SSO, SLAs, and dedicated support.</p>
            <GradientButton className="mt-6">Contact Sales</GradientButton>
          </SectionCard>
        </div>
      </main>
      <Footer />
    </div>
  )
}
