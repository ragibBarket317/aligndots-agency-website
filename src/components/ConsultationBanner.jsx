import { Calendar } from 'lucide-react'
import Link from 'next/link'

export default function ConsultationBanner() {
  return (
    <section className="">
      <div className="">
        <Link
          href="https://calendly.com/thealigndots"
          className="block group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative overflow-hidden bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg">
            <div className="px-6 py-8 sm:py-10 text-center">
              <div className="flex flex-col md:flex md:flex-row items-center justify-center gap-2 mb-2">
                <Calendar className="w-6 h-6 text-white" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  BOOK YOUR FREE CONSULTATION
                </h2>
              </div>
              <p className="text-white/90 text-sm sm:text-base">
                See What We Can Do for You – Let's Talk!
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
