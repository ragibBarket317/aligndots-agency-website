import { services } from '@/lib/data'
import Image from 'next/image'

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-4">
          ONLINE MARKETING SERVICES
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Find out how we can help you achieve your goals with our wide range of
          services. We will provide you with a unique and personalized solution
          to meet your goals.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg text-center"
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={150}
                height={150}
                className="w-16 h-16 mx-auto mb-5"
              />
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
