import { features } from '@/lib/data'
import Image from 'next/image'

export default function Features() {
  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-orange-500 mb-4">
            Why are we one of the best in the business ?
          </h2>
          <p className="text-center text-gray-600 text-sm sm:text-base mb-8">
            We don’t do cookie-cutter marketing—we craft strategies that
            actually work by understanding your business inside out. For years,
            we’ve been helping businesses grow with data-driven tactics,
            creative execution, and a relentless focus on results. 🚀
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-black text-center">
            What's different from us?
          </h3>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line - Hidden on mobile, shown from tablet up */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-orange-500" />

          {/* Features */}
          <div className="space-y-12 md:space-y-24">
            {features.map((feature, index) => (
              <div key={index} className="relative md:w-[70%] md:mx-auto">
                {/* Timeline Dot - Hidden on mobile, shown from tablet up */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full z-10" />

                {/* Mobile Layout - Stack vertically */}
                <div className="md:hidden space-y-6">
                  <div className="text-left px-4">
                    <h4 className="text-xl font-bold text-black mb-3">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div
                    className={`flex-1 ${index % 2 !== 0 ? 'md:order-1' : ''}`}
                  >
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                      <Image
                        src={feature.image || '/placeholder.svg'}
                        alt={feature.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </div>

                {/* Tablet/Desktop Layout - Side by side with timeline */}
                <div
                  className={`hidden md:flex ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  } items-center gap-8 lg:gap-16`}
                >
                  {/* Content Side */}
                  <div className="flex-1 w-full">
                    <div
                      className={`${
                        index % 2 === 1 ? 'text-right' : 'text-left'
                      } p-4`}
                    >
                      <h4 className="text-xl lg:text-2xl text-black font-bold mb-4">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div
                    className={`flex-1 ${index % 2 !== 0 ? 'md:order-1' : ''}`}
                  >
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                      <Image
                        src={feature.image || '/placeholder.svg'}
                        alt={feature.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
