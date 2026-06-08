 const services = [
  {
    icon: "🚴",
    title: "Fast Home Delivery",
    desc: "Order your favourite brew from anywhere in Lahore and get it delivered hot to your doorstep within 30 minutes."
  },
  {
    icon: "☕",
    title: "Fresh Roasted Beans",
    desc: "We roast our beans in-house every week. No stale stock — just fresh, aromatic coffee the way it should be."
  },
  {
    icon: "🌿",
    title: "Organic Ingredients",
    desc: "From our milk to our syrups, we use natural and organic ingredients. No artificial flavours, ever."
  },
  {
    icon: "📅",
    title: "Table Reservations",
    desc: "Skip the wait. Book your table online and walk straight in — we'll have everything ready for you."
  }
]

export default function Services() {
  return (
    <section className="bg-green py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-gold font-body text-sm uppercase tracking-widest mb-3">
            What We Offer
          </p>
          <h2 className="font-heading text-4xl font-bold text-cream leading-tight">
            More Than Just Coffee
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-green/50 border border-cream/10 rounded-2xl p-6 hover:border-gold/50 hover:bg-green/70 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-heading text-lg font-bold text-cream mb-3">{s.title}</h3>
              <p className="font-body text-cream/70 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}