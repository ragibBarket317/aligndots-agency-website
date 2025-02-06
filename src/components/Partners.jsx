import { partners } from '@/lib/data'
import Image from 'next/image'

export default function Partners() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          THE UNION MAKES STRENGTH AND WE HAVE THE BEST PARTNERS
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-4">
              <Image
                src={partner.logo || '/placeholder.svg'}
                alt={partner.name}
                width={120}
                height={50}
                className="mx-auto grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
