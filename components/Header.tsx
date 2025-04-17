import { useState } from "react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo flex items-center">
            <img src="/logo-full.webp" alt="Logo" className="mr-3 h-[50px]" />
            BehördeDigital
          </div>

          <div className={`menu ${menuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <a href="#hero" onClick={closeMenu}>
                  Startseite
                </a>
              </li>
              <li>
                <a href="#services" onClick={closeMenu}>
                  Leistungen
                </a>
              </li>
              <li>
                <a href="#about" onClick={closeMenu}>
                  Über uns
                </a>
              </li>
              <li>
                <a href="#contact" onClick={closeMenu}>
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            aria-label="Menü öffnen"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  )
}
