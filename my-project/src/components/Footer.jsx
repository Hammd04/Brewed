 
 import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className=" bg-yellow-700 text-white">

      <div className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

        <div>
          <h2 className="font-heading text-2xl font-bold mb-4">
            Brewed <span className="text-gold">in Lahore</span>
          </h2>
          <p className="font-body text-cream/60 text-sm leading-relaxed mb-6">
            Handcrafted coffee and warm vibes in the heart of Lahore. Come for the coffee, stay for the feeling.
          </p>
          <div className="flex gap-3">
            {["facebook", "instagram", "twitter"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors text-xs uppercase font-body font-medium"
              >
                {s[0].toUpperCase()}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-lg font-bold mb-4 text-gold">Quick Links</h3>
          <ul className="flex flex-col gap-3 font-body text-sm text-cream/60">
            {[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/about" },
              { label: "Our Menu", to: "/menu" },
              { label: "Contact", to: "/contact" },
            ].map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="hover:text-gold transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg font-bold mb-4 text-gold">Opening Hours</h3>
          <ul className="flex flex-col gap-3 font-body text-sm text-cream/60">
            <li className="flex justify-between">
              <span>Monday – Friday</span>
              <span className="text-cream">8am – 10pm</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday</span>
              <span className="text-cream">9am – 11pm</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span className="text-cream">10am – 9pm</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg font-bold mb-4 text-gold">Find Us</h3>
          <ul className="flex flex-col gap-3 font-body text-sm text-cream/60">
            <li>📍 12 MM Alam Road, Gulberg III, Lahore</li>
            <li>📞 +92 300 1234567</li>
            <li>✉️ hello@brewedinlahore.pk</li>
          </ul>
          <div className="mt-6">
            <h3 className="font-heading text-lg font-bold mb-3 text-gold">Newsletter</h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-cream/10 border border-cream/20 rounded px-3 py-2 text-sm font-body text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold"
              />
              <button className="bg-gold text-white px-4 py-2 rounded text-sm font-body font-medium hover:bg-yellow-700 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-body text-cream/40">
          <p>© 2026 Brewed in Lahore. All rights reserved.</p>
          <p>Built with ☕ in Lahore, Pakistan</p>
        </div>
      </div>

    </footer>
  )
}