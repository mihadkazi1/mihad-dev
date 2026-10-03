import { Navbar } from './components/Navbar'
import { ScrollToTop } from './components/ScrollToTop'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { WhatIDo } from './components/WhatIDo'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Credentials } from './components/Credentials'
import { LeadershipCommunity } from './components/LeadershipCommunity'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#08090c] text-zinc-100">
      <ScrollToTop />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Credentials />
        <LeadershipCommunity />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
