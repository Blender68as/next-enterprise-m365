import SectionWrapper from "./SectionWrapper"

export default function Hero() {
  return (
    <SectionWrapper id="hero" width="full" outerClassName="hero">
      <h1>Digitale Transformation für Behörden</h1>
      <p>
        Wir unterstützen öffentliche Einrichtungen bei der sicheren Cloud-Migration und Implementierung moderner
        Microsoft 365 Lösungen.
      </p>
      <a href="#contact" className="cta">
        Kontakt aufnehmen
      </a>
      <div className="free-note">Das erste Gespräch ist kostenfrei!</div>
    </SectionWrapper>
  )
}
