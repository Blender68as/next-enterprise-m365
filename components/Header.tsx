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
          <a href="/" onClick={closeMenu}>
            <div className="logo flex">
              <img src="/logo-full.webp" alt="Logo" className="mr-4 h-[50px]" />
              BehördeDigital
            </div>
          </a>

          <div className={`menu ${menuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <a href="/" onClick={closeMenu}>
                  Startseite
                </a>
              </li>
              <li>
                <a href="/#beforeServices" onClick={closeMenu}>
                  Leistungen
                </a>
              </li>
              <li>
                <a href="/#beforeAbout" onClick={closeMenu}>
                  Über uns
                </a>
              </li>
              <li>
                <a href="/#contact" onClick={closeMenu}>
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
