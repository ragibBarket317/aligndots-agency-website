import Clients from '@/components/Clients'
import ConsultationBanner from '@/components/ConsultationBanner'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Partners from '@/components/Partners'
import Services from '@/components/Services'
import Subscribe from '@/components/Subscribe'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        {/* <Partners /> */}
        <Clients />
        <ConsultationBanner />
        <FAQ />
        <Contact />
        <Subscribe />
      </main>
      <Footer />
    </>
  )
}
