export default function About() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <div className="relative">
          <div className="rounded-2xl overflow-hidden h-96">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800"
              alt="Brewed in Lahore café interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-gold text-white font-heading text-center px-8 py-6 rounded-2xl shadow-lg">
            <p className="text-4xl font-bold">4+</p>
            <p className="text-sm font-body mt-1">Years Serving<br />Lahore</p>
          </div>
        </div>

        <div>
          <p className="text-gold font-body text-sm uppercase tracking-widest mb-3">
            Our Story
          </p>
          <h2 className="font-heading text-4xl font-bold text-green leading-tight mb-6">
            Born in Lahore, <br /> Brewed with Love
          </h2>
          <p className="font-body text-gray-600 leading-relaxed mb-4">
            Brewed in Lahore started as a small corner café in Gulberg with one simple idea — great coffee should feel like home. We source our beans from the finest farms and roast them fresh every week.
          </p>
          <p className="font-body text-gray-600 leading-relaxed mb-8">
            Whether you're here for a quiet morning chai, a business meeting, or just to escape the city noise — our doors are always open and our cups are always full.
          </p>

          <div className="grid grid-cols-3 gap-6 mb-8">
            {[
              { number: '15+', label: 'Menu Items' },
              { number: '500+', label: 'Daily Customers' },
              { number: '4.9★', label: 'Google Rating' },
            ].map((stat) => (
              <div key={stat.label} className="text-center border border-green/20 rounded-xl py-4">
                <p className="font-heading text-2xl font-bold text-green">{stat.number}</p>
                <p className="font-body text-xs text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <a
            href="/about"
            className="inline-block bg-green text-cream font-body font-medium px-7 py-3 rounded hover:bg-green/80 transition-colors"
          >
            Learn More About Us
          </a>
        </div>

      </div>
    </section>
  )
}