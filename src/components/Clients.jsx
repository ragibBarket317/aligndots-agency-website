import { clients } from '@/lib/data'
import Image from 'next/image'

export default function Clients() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-4">
          Our team had the honor to work with
        </h2>
        <p className="text-center text-gray-600 mb-12">
          atB jobs : Brand Promotion, Social media moderation
        </p>
        <div className="flex justify-center">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={client.logo || '/placeholder.svg'}
                alt={client.name}
                width={100}
                height={100}
                className="grayscale hover:grayscale-0 transition-all w-28 h-28 rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
