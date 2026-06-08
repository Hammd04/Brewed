import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md text-green' : 'bg-green text-cream'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

       <Link to="/" className="flex items-center gap-1">
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12h16l-2 10H8L6 12z" fill="#C8860A"/>
    <path d="M22 14h2a3 3 0 0 1 0 6h-2" stroke="#C8860A" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 12c0-2 1.5-3 1.5-5" stroke="#C8860A" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 12c0-2 1.5-3 1.5-5" stroke="#C8860A" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="6" y1="23" x2="22" y2="23" stroke="#C8860A" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
  <span className="font-heading text-2xl font-bold tracking-wide">
    Brewed <span className="text-gold">in Lahore</span>
  </span>
</Link>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
          <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
          <li><Link to="/menu" className="hover:text-gold transition-colors">Menu</Link></li>
          <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
        </ul>

        <Link to="/contact" className="hidden md:block bg-gold text-white text-sm font-medium px-5 py-2 rounded bg-yellow-700 hover:bg-yellow-800 transition-colors">
          Reserve a Table
        </Link>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-green border-t border-green-800 px-6 pb-4 flex flex-col gap-4 text-sm font-medium">
          <Link to="/" onClick={() => setOpen(false)} className="hover:text-gold transition-colors">Home</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="hover:text-gold transition-colors">About</Link>
          <Link to="/menu" onClick={() => setOpen(false)} className="hover:text-gold transition-colors">Menu</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-gold transition-colors">Contact</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="bg-gold text-white bg-yellow-700  px-4 py-2 rounded text-centertransition-colors">Reserve a Table</Link>
        </div>
      )}
    </nav> 
  )
}