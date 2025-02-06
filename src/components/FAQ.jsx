import { ChevronDown } from 'lucide-react'
import { faqs } from '@/lib/data'
import { CustomAccordion } from './CustomAccordion'

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            FREQUENTLY{' '}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              ASKED QUESTION
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Have Questions Or Concerns? Check Out These Answers.
          </p>
          <div className="mt-6">
            <ChevronDown className="w-8 h-8 text-gray-400 mx-auto animate-bounce" />
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <CustomAccordion items={faqs} />
        </div>
      </div>
    </section>
  )
}
