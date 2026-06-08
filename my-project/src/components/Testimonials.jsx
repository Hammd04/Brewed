const testimonials = [
  {
    name: "Ayesha Tariq",
    role: "Food Blogger, Lahore",
    review: "Honestly the best cold brew I've had in Lahore. The café has such a warm vibe — I come here every Saturday morning without fail.",
    avatar: "AT",
    rating: 5
  },
  {
    name: "Bilal Mahmood",
    role: "Software Engineer",
    review: "Perfect place to work remotely. Great WiFi, great coffee, and the staff never rushes you. The Desi Chai Latte is absolutely unreal.",
    avatar: "BM",
    rating: 5
  },
  {
    name: "Sana Riaz",
    role: "University Student",
    review: "Affordable, cozy, and the caramel frappe is to die for. Brought my whole friend group here and everyone loved it.",
    avatar: "SR",
    rating: 5
  },
  {
    name: "Usman Khan",
    role: "Business Owner",
    review: "I hold most of my client meetings here. The reservation system is smooth and the ambiance is always professional yet relaxed.",
    avatar: "UK",
    rating: 5
  }
]

const avatarColors = [
  "bg-gold text-white",
  "bg-green text-cream",
  "bg-gold text-white",
  "bg-green text-cream",
]

export default function Testimonials() {
  return (
    <section className="bg-green py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-gold font-body text-sm uppercase tracking-widest mb-3">
            What People Say
          </p>
          <h2 className="font-heading text-4xl font-bold text-cream leading-tight">
            Our Customers Love Us
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-green/50 border border-cream/10 rounded-2xl p-6 flex flex-col gap-4 hover:border-gold/40 transition-all duration-300"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-gold text-sm">★</span>
                ))}
              </div>
              <p className="font-body text-cream/80 text-sm leading-relaxed flex-1">
                "{t.review}"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-cream/10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-body font-medium text-sm flex-shrink- ${avatarColors[i]}`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-body font-medium text-cream text-sm">{t.name}</p>
                  <p className="font-body text-cream/50 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}