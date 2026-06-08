export default function Hero() {
  return (
    <section className="relative bg-green min-h-screen flex items-center overflow-hidden">

      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1600')] bg-cover bg-center" />

      <div className="absolute inset-0 bg-green/70" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        <div className="text-cream">
          <p className="text-gold font-body text-sm uppercase tracking-widest  mb-4">
            Est. 2020 · Lahore, Pakistan
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight mb-6">
            Where Every Cup <br />
            <span className="text-gold">Tells a Story</span>
          </h1>
          <p className="font-body text-cream/80 text-lg leading-relaxed mb-8 max-w-md">
            Handcrafted coffee, desi chai, and fresh bites — served with warmth in the heart of Lahore.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/menu"
              className="bg-gold text-white  bg-yellow-700 font-medium px-7 py-3 rounded hover:bg-yellow-800 transition-colors"
            >
              View Our Menu
            </a>
            <a
              href="/contact"
              className="border border-cream text-cream font-body font-medium px-7 py-3 rounded hover:bg-cream hover:text-green transition-colors"
            >
              Reserve a Table
            </a>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-2 gap-4">
          <div className="rounded-2xl  overflow-hidden h-56">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400"
              alt="Coffee cup"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden h-56 mt-8">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400"
              alt="Café interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden h-56">
            <img
              src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400"
              alt="Latte art"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden  h-56 mt-8">
            <img
              src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=400"
              alt="Pastries"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/50 animate-bounce">
        <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

    </section>
  )
}