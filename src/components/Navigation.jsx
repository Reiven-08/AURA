import { useState, useEffect } from 'react'
import './Navigation.css'

const navLinks = [
  { label: 'The Object', href: '#object' },
  { label: 'Sound', href: '#sound' },
  { label: 'Engineered', href: '#engineered' },
  { label: 'Finishes', href: '#finishes' },
  { label: 'Experience', href: '#experience' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a href="#" className="nav__logo">A U R A</a>

        <div className={`nav__links${menuOpen ? ' nav__links--open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav__link t-label"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="nav__cta-mobile t-label"
            onClick={() => setMenuOpen(false)}
          >
            Buy Now
          </a>
        </div>

        <a href="#" className="nav__cta t-label">Buy Now</a>

        <button
          className={`nav__burger${menuOpen ? ' nav__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
