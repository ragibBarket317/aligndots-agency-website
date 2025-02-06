export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black pt-20">
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          AGENCY OF THE
          <br />
          DIGITAL MARKETING
        </h1>
        <p className="text-md md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          We do marketing that’s out of this world. 🚀 As experts in email
          marketing, web development, sales funnels, and social media, we craft
          strategies that don’t just work—they win. Whether you need a killer
          website, high-converting emails, or a 360° growth plan, we’ve got you
          covered. Let’s turn clicks into customers and brands into legends. 😎
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  )
}
