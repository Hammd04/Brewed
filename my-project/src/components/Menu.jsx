const categories = [
  {
    name: "Hot Coffee",
    items: [
      {
        name: "Classic Espresso",
        desc: "Strong, bold, and pure — single or double shot.",
        price: "Rs. 350",
        img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400"
      },
      {
        name: "Creamy Latte",
        desc: "Smooth espresso with steamed milk and light foam.",
        price: "Rs. 550",
        img: "https://images.unsplash.com/photo-1561882468-9110d70d5941?w=400"
      },
      {
        name: "Desi Chai Latte",
        desc: "Our signature blend of chai spices with steamed milk.",
        price: "Rs. 450",
        img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400"
      },
    ]
  },
  {
    name: "Cold Coffee",
    items: [
      {
        name: "Iced Americano",
        desc: "Espresso over ice with a splash of cold water.",
        price: "Rs. 500",
        img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400"
      },
      {
        name: "Cold Brew",
        desc: "Slow steeped for 12 hours. Smooth, strong, refreshing.",
        price: "Rs. 600",
        img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400"
      },
      {
        name: "Caramel Frappe",
        desc: "Blended coffee with caramel, cream, and ice.",
        price: "Rs. 650",
        img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400"
      },
    ]
  }
]

export default function Menu() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-gold font-body text-sm uppercase tracking-widest mb-3">
            Menu & Pricing
          </p>
          <h2 className="font-heading text-4xl font-bold text-green leading-tight">
            Something for Every Mood
          </h2>
        </div>

        {categories.map((cat) => (
          <div key={cat.name} className="mb-14">
            <h3 className="font-heading text-2xl font-bold text-green mb-6 pb-2 border-b border-green/20">
              {cat.name}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.items.map((item) => (
                <div key={item.name} className="bg-white rounded-2xl overflow-hidden border border-green/10 hover:shadow-md transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-heading text-lg font-bold text-green">{item.name}</h4>
                      <span className="font-body text-sm font-medium text-gold">{item.price}</span>
                    </div>
                    <p className="font-body text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-4">
          <a
            href="/menu"
            className="inline-block bg-green text-cream font-body font-medium px-8 py-3 rounded hover:bg-green/80 transition-colors"
          >
            View Full Menu
          </a>
        </div>

      </div>
    </section>
  )
}