'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function CustomAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex items-center justify-between px-6 py-4 text-gray-800 hover:bg-gray-50 transition-colors"
            aria-expanded={openIndex === index}
            aria-controls={`accordion-content-${index}`}
          >
            <span className="text-left font-medium">{item.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            id={`accordion-content-${index}`}
            role="region"
            aria-labelledby={`accordion-trigger-${index}`}
            className={`transition-all duration-200 ease-in-out ${
              openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 py-4 text-gray-600 bg-gray-50">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
