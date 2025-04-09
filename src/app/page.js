
import { Services } from "../../public/components/Services"
import { Testimonials } from "../../public/components/Testimonials"
import { Location } from "../../public/components/Location"
import { Contact } from "../../public/components/Contact"
import { Footer } from "../../public/components/Footer"
import { Navbar } from "../../public/components/Navbar"
import { Hero } from "../../public/components/Hero"
import { About } from "../../public/components/About"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
