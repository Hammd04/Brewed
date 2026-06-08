export default function Contact() {
  return (
    <div className="bg-cream min-h-screen">

      <div className="bg-green py-16 text-center">
        <p className="text-gold font-body text-sm uppercase tracking-widest mb-3">Get In Touch</p>
        <h1 className="font-heading text-5xl font-bold text-cream">Contact Us</h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">

        <div>
          <h2 className="font-heading text-3xl font-bold text-green mb-8">Visit Us or Say Hello</h2>

          <div className="flex flex-col gap-6 mb-10">
            {[
              { icon: "📍", label: "Address", value: "12 MM Alam Road, Gulberg III, Lahore" },
              { icon: "📞", label: "Phone", value: "+92 300 1234567" },
              { icon: "✉️", label: "Email", value: "hello@brewedinlahore.pk" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-body text-xs text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="font-body text-gray-700 font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-10">
            <h3 className="font-heading text-xl font-bold text-green mb-4">Opening Hours</h3>
            <div className="flex flex-col gap-3 font-body text-sm">
              {[
                { day: "Monday – Friday", hours: "8:00 AM – 10:00 PM" },
                { day: "Saturday", hours: "9:00 AM – 11:00 PM" },
                { day: "Sunday", hours: "10:00 AM – 9:00 PM" },
              ].map((h) => (
                <div key={h.day} className="flex justify-between border-b border-green/10 pb-3">
                  <span className="text-gray-500">{h.day}</span>
                  <span className="text-green font-medium">{h.hours}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            {["Facebook", "Instagram", "Twitter"].map((s) => (
              <a
                key={s}
                href="#"
                className="border border-green/30 text-green font-body text-sm px-4 py-2 rounded-lg hover:bg-green hover:text-cream transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-green/10 p-8 shadow-sm">
          <h2 className="font-heading text-2xl font-bold text-green mb-6">Send Us a Message</h2>

          <div className="flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="font-body text-xs text-gray-500 uppercase tracking-widest mb-2 block">Your Name</label>
                <input
                  type="text"
                  placeholder="Ahmed Ali"
                  className="w-full border border-green/20 rounded-lg px-4 py-3 font-body text-sm text-gray-700 focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label className="font-body text-xs text-gray-500 uppercase tracking-widest mb-2 block">Your Email</label>
                <input
                  type="email"
                  placeholder="ahmed@email.com"
                  className="w-full border border-green/20 rounded-lg px-4 py-3 font-body text-sm text-gray-700 focus:outline-none focus:border-gold transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="font-body text-xs text-gray-500 uppercase tracking-widest mb-2 block">Phone (optional)</label>
              <input
                type="tel"
                placeholder="+92 300 0000000"
                className="w-full border border-green/20 rounded-lg px-4 py-3 font-body text-sm text-gray-700 focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            <div>
              <label className="font-body text-xs text-gray-500 uppercase tracking-widest mb-2 block">Subject</label>
              <select className="w-full border border-green/20 rounded-lg px-4 py-3 font-body text-sm text-gray-700 focus:outline-none focus:border-gold transition-colors">
                <option>Table Reservation</option>
                <option>General Inquiry</option>
                <option>Feedback</option>
                <option>Corporate Event</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="font-body text-xs text-gray-500 uppercase tracking-widest mb-2 block">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full border border-green/20 rounded-lg px-4 py-3 font-body text-sm text-gray-700 focus:outline-none focus:border-gold transition-colors resize-none"
              />
            </div>

            <button className="w-full bg-green text-cream font-body font-medium py-3 rounded-lg hover:bg-green/80 transition-colors">
              Send Message
            </button>
          </div>
        </div>

      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="rounded-2xl overflow-hidden h-72 border border-green/10">
          <iframe
            title="Brewed in Lahore Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.234!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMxJzEzLjQiTiA3NMKwMjEnMzEuMyJF!5e0!3m2!1sen!2spk!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>

    </div>
  )
}