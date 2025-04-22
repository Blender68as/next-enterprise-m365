"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header>
      <div className="container">
        <nav>
          <Link href="/" onClick={closeMenu}>
            <div className="logo flex">
              <Image src="/logo-full.webp" alt="Logo" width={50} height={50} className="mr-4" />
              BehördeDigital
            </div>
          </Link>

          <div className={`menu ${menuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <Link href="/" onClick={closeMenu}>
                  Startseite
                </Link>
              </li>
              <li>
                <Link href="/#beforeServices" onClick={closeMenu}>
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="/#beforeAbout" onClick={closeMenu}>
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/#beforeContact" onClick={closeMenu}>
                  Kontakt
                </Link>
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
