'use client'

import { useState } from 'react'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    privacyAccepted: false,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <div className="flex-1 ">
            <div className="flex flex-col justify-center h-full">
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-orange-500 mb-6">
                  Dhaka
                </h2>
                <p className="text-gray-600 mb-2">
                  244 East Kafrul, Dhaka, Bangladesh
                </p>
                <a
                  href="mailto:hello.internetrepublica.com"
                  className="text-orange-500 hover:underline"
                >
                  thealigndots@gmail.com
                </a>
              </div>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-2 rounded-full border hover:border-orange-500 hover:text-orange-500 transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full border hover:border-orange-500 hover:text-orange-500 transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full border hover:border-orange-500 hover:text-orange-500 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full border hover:border-orange-500 hover:text-orange-500 transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-2 border-b border-gray-300 focus:border-orange-500 outline-none transition-colors"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border-b border-gray-300 focus:border-orange-500 outline-none transition-colors"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full px-4 py-2 border-b border-gray-300 focus:border-orange-500 outline-none transition-colors"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Company (web)"
                    className="w-full px-4 py-2 border-b border-gray-300 focus:border-orange-500 outline-none transition-colors"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="mt-1"
                    checked={formData.privacyAccepted}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        privacyAccepted: e.target.checked,
                      })
                    }
                    required
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    I have read and accept the{' '}
                    <a href="#" className="text-orange-500 hover:underline">
                      privacy policy
                    </a>
                    .
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white font-semibold py-3 px-6 rounded hover:bg-orange-600 transition-colors"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
