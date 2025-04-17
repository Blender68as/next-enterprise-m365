import SectionWrapper from "./SectionWrapper"

export default function Process() {
  return (
    <SectionWrapper id="process" width="full" outerClassName="process">
      <h2 className="section-title">Unser Prozess</h2>
      <div className="process-flow">
        <div className="process-step">
          <div className="step-number">1</div>
          <h3>Aufnahme der Anforderungen</h3>
          <p>Wir analysieren Ihre Bedürfnisse und sammeln alle relevanten Informationen.</p>
        </div>
        <div className="process-step">
          <div className="step-number">2</div>
          <h3>Umsetzung durch BehördeDigital</h3>
          <p>Unser Expertenteam realisiert eine maßgeschneiderte Cloud-Lösung für Ihre Behörde.</p>
        </div>
        <div className="process-step">
          <div className="step-number">3</div>
          <h3>Schulungen und Workshops</h3>
          <p>Individuell abgestimmte Schulungen, die Ihr Team fit für die digitale Zukunft machen.</p>
        </div>
        <div className="process-step">
          <div className="step-number">4</div>
          <h3>Digitalisierte Infrastruktur genießen</h3>
          <p>Wir kümmern uns um Wartung und Support – Sie nutzen die Infrastruktur ohne Mehraufwand.</p>
        </div>
      </div>
    </SectionWrapper>
  )
}
