"use client"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import SafeEmail from "@/components/SafeEmail"
import SectionWrapper from "@/components/SectionWrapper"

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <SectionWrapper id="impressum" variant="contained-bg" outerClassName="visible">
        <h1 className="section-title">Impressum</h1>
        <strong>SP Experts Personengesellschaft</strong>
        <br />
        Ifflandstr. 14
        <br />
        68161 Mannheim
        <br />
        Deutschland
        <br />
        <br />
        Vertreten durch: Alexander Springer
        <br />
        E-Mail: <SafeEmail user="kontakt" domain="behördedigital.de" />
        <br />
        <br />
        Umsatzsteuer-ID: DE284841320
      </SectionWrapper>
      <Footer />
    </>
  )
}
