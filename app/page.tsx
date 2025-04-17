"use client"

import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Process from "@/components/Process"
import About from "@/components/About"
import Ansprechpartner from "@/components/Ansprechpartner"
import ContactForm from "@/components/ContactForm"
import SlidePanel from "@/components/SlidePanel"

export default function HomePage() {
  const [panelContent, setPanelContent] = useState("")
  const [panelTitle, setPanelTitle] = useState("")
  const [panelOpen, setPanelOpen] = useState(false)

  const openPanel = (html: string, title: string) => {
    setPanelContent(html)
    setPanelTitle(title)
    setPanelOpen(true)
  }

  const closePanel = () => {
    setPanelOpen(false)
    setPanelContent("")
    setPanelTitle("")
  }

  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll<HTMLElement>("section")
      reveals.forEach((section) => {
        const windowHeight = window.innerHeight
        const elementTop = section.getBoundingClientRect().top
        const elementVisible = 100
        if (elementTop < windowHeight - elementVisible) {
          section.classList.add("visible")
        } else {
          section.classList.remove("visible")
        }
      })
    }

    const setupMoreInfoButtons = () => {
      const buttons = document.querySelectorAll<HTMLElement>(".more-info-btn")
      buttons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault()
          const parent = btn.closest(".card")
          const info = parent?.querySelector(".extra-info") as HTMLElement | null
          const title = parent?.querySelector("h3")?.textContent || "Weitere Informationen"
          if (info) {
            openPanel(info.innerHTML, title)
          }
        })
      })
    }

    window.addEventListener("scroll", reveal)
    reveal()
    setupMoreInfoButtons()

    return () => {
      window.removeEventListener("scroll", reveal)
    }
  }, [])

  return (
    <>
      <main>
        <Header />
        <Hero />
        <Services />
        <Process />
        <About />
        <Ansprechpartner />
        <ContactForm />
      </main>
      <Footer />
      {panelOpen && <SlidePanel open={panelOpen} content={panelContent} title={panelTitle} onClose={closePanel} />}
    </>
  )
}
