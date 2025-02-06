'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Subscribe() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle subscription logic here
    console.log('Subscribing email:', email)
    setEmail('')
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
          <div className="w-32 md:w-48">
            <Image
              src="/newsletter.png"
              alt="Newsletter subscription"
              width={200}
              height={200}
              className="w-full h-auto"
            />
          </div>

          <div className="flex-1 max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Subscribe To Our Newsletter
            </h2>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 border-b border-gray-300 focus:border-gray-900 outline-none bg-transparent"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800 transition-colors whitespace-nowrap"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
