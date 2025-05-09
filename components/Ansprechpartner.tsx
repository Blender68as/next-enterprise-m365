import Image from "next/image"
import SectionWrapper from "./SectionWrapper"

export default function Ansprechpartner() {
  return (
    <SectionWrapper id="ansprechpartner" variant="contained-bg">
      <h2 className="section-title">Ihr Ansprechpartner</h2>
      <div className="contact-person mt-8 overflow-auto">
        {/* Bild von Alexander Springer */}
        <div className="contact-image float-left mr-8">
          <Image
            src="/alexander-springer.jpg"
            alt="Portrait von Alexander Springer"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        {/* Kontaktdetails */}
        <div className="contact-details">
          <h3 className="mb-4">Alexander Springer – Teamleiter</h3>
          <p className="mb-4">
            Alexander Springer ist Ihr erfahrener Ansprechpartner für Digitalisierung und Cloud-Migration in Behörden.
            Mit über 15 Jahren Erfahrung in der Entwicklung maßgeschneiderter Microsoft 365- und SharePoint-Lösungen
            leitet er unser Team und steuert anspruchsvolle IT-Projekte.
          </p>
          <p className="mb-4">
            Seine Expertise reicht von der Softwareentwicklung in C#/.NET, React und PowerShell bis hin zu modernen
            Cloud-Infrastrukturen. Durch seine Führung werden Projekte effizient, sicher und individuell auf die
            Bedürfnisse unserer Kunden ausgerichtet.
          </p>
          <p>
            Kontaktieren Sie uns für eine individuelle Beratung und erfahren Sie, wie auch Ihre Behörde den Schritt in
            die digitale Zukunft erfolgreich meistern kann.
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
