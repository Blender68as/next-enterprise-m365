export default function Ansprechpartner() {
  return (
    <section id="ansprechpartner" className="container">
      <h2 className="section-title">Ihr Ansprechpartner</h2>
      <div className="contact-person">
        <div className="contact-image">
          <img
            src="/alexander-springer.jfif"
            alt="Portrait von Alexander Springer"
            style={{ width: "200px", borderRadius: "50%" }}
          />
        </div>
        <div className="contact-details">
          <h3>Alexander Springer – Teamleiter</h3>
          <p>
            Alexander Springer ist Ihr erfahrener Ansprechpartner für Digitalisierung und Cloud-Migration in Behörden.
            Mit über 15 Jahren Erfahrung in der Entwicklung maßgeschneiderter Microsoft 365- und SharePoint-Lösungen
            leitet er unser Team und steuert anspruchsvolle IT-Projekte.
          </p>
          <p>
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
    </section>
  )
}
