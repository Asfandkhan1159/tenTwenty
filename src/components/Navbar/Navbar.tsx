import { useState } from 'react'

const NAV_LINKS = ['About', 'News', 'Services', 'Our Team', 'Make Enquiry']

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar" aria-label="Main navigation">
      {/* Desktop links */}
      <ul className="navbar__links" role="list">
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="navbar__link">
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile: Contact us button left + hamburger right */}
      <a href="#contact" className="navbar__cta md:hidden">
        Contact us <span aria-hidden="true">→</span>
      </a>

      {/* Desktop: Contact us right */}
      <a href="#contact" className="navbar__cta hidden md:flex">
        Contact us <span aria-hidden="true">→</span>
      </a>

      {/* Hamburger — mobile only */}
      <button
        className="navbar__hamburger"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/90 z-[100] flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-6 right-6 text-white text-2xl"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="text-white text-2xl font-light tracking-widest"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
