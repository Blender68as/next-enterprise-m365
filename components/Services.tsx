import SectionWrapper from "./SectionWrapper"

type ServicesProps = {
  onMoreInfo: (content: string, title: string) => void
}

export default function Services({ onMoreInfo }: ServicesProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const card = e.currentTarget.closest(".card")
    if (!card) return

    const title = card.querySelector("h3")?.textContent || ""
    const extraInfo = card.querySelector(".extra-info")?.innerHTML || ""
    onMoreInfo(extraInfo, title)
  }

  return (
    <>
      <div id="beforeServices" style={{ scrollMarginTop: 90 }}></div>
      <SectionWrapper id="services" variant="contained">
        <h2 className="section-title">Unsere Leistungen</h2>
        <div className="cards">
          <div className="card">
            <h3>Cloud-Starterpaket</h3>
            <p>
              Einrichtung eines Microsoft 365 Tenants inkl. Exchange Online, OneDrive und professioneller Migration von
              Daten und E-Mails.
            </p>
            <div className="extra-info">
              <h3>Beschreibung & Umfang</h3>
              <p>
                Einrichtung eines neuen Microsoft 365-Tenants, grundlegende Identity und Security-Konfiguration (Entra
                ID ehem. AD, MFA). Migration des bestehenden E-Mail-Servers zu Exchange Online, Einrichtung von OneDrive
                für Benutzer. Optional: Übernahme bestehender Daten (PST-Import, File-Share zu OneDrive).
              </p>
              <br />
              <h3>Mehrwert für die Behörde</h3>
              <p>
                Schneller Einstieg in die Cloud ohne eigene Infrastruktur. Sofort nutzbare, aktuelle Software (E-Mail,
                Office). Entlastung der lokalen IT (Wegfall von Server-Betrieb). Verbesserte Ausfallsicherheit durch
                Microsofts Rechenzentren.
              </p>
            </div>
            <a href="#" className="link with-icon more-info-btn" onClick={handleClick}>
              <span className="plus-icon">+</span> Weitere Informationen
            </a>
          </div>

          <div className="card">
            <h3>Digitale Zusammenarbeit</h3>
            <p>
              Implementierung von Microsoft Teams und SharePoint für modernes Intranet und optimierte Kommunikation.
            </p>
            <div className="extra-info">
              <h3>Beschreibung & Umfang</h3>
              <p>
                Einführung von Microsoft Teams als zentrales Kommunikationsmedium (Chats, Video-Konferenzen,
                Teams-Kanäle). Aufbau eines einfachen Intranets mit SharePoint Online (Hauptseite für interne News,
                Bereiche für Abteilungen). Migration wichtiger gemeinsamer Dateiablagen von Fileserver auf SharePoint
                (inkl. Berechtigungen). Schulung der Mitarbeiter in der Nutzung von Teams und dem neuen Intranet.
              </p>
              <br />
              <h3>Mehrwert für die Behörde</h3>
              <p>
                Effizientere interne Kommunikation, weniger E-Mails und schnellere Absprachen. Homeoffice und mobiles
                Arbeiten werden problemlos möglich​. Zentrale Ablage von Informationen fördert Transparenz und
                Wissensaustausch. Externe Partner können bei Projekten eingebunden werden (z.B. gemeinsamer Teams-Kanal)
                – fördert die Kooperation über Organisationsgrenzen hinweg​. Insgesamt steigt die Produktivität und
                Zufriedenheit der Mitarbeiter.
              </p>
            </div>
            <a href="#" className="link with-icon more-info-btn" onClick={handleClick}>
              <span className="plus-icon">+</span> Weitere Informationen
            </a>
          </div>

          <div className="card">
            <h3>Security &amp; Compliance</h3>
            <p>Beratung und Umsetzung von Sicherheits- und Compliance-Lösungen für behördliche Anforderungen.</p>
            <div className="extra-info">
              <h3>Beschreibung & Umfang</h3>
              <p>
                Durchsicht der bestehenden oder geplanten Microsoft 365-Umgebung unter Sicherheits- und
                Datenschutz-Aspekten. Einrichtung von Best Practices: z.B. strikte Zugriffskontrollen (Conditional
                Access), Multi-Faktor-Authentisierung überall, Mail-Verschlüsselung bzw.
                Sensibilisierungsklassifikationen (Azure Information Protection) für vertrauliche Daten. <br />
                Beratung zu DSGVO-Konfigurationen: Speicherung nur in europäischen Rechenzentren, Deaktivieren nicht
                benötigter Telemetrie, Einrichten von Löschfristen und Aufbewahrungsrichtlinien. Unterstützung bei der
                Erstellung von Datenschutz-Folgenabschätzungen (DPIA) für den Cloud-Einsatz, inkl. Vorlagen.
              </p>
              <br />
              <h3>Mehrwert für die Behörde</h3>
              <p>
                Erhöhte Sicherheit der Daten und Systeme – ein Muss gerade wegen der NIS2-Vorgaben. Umsetzung der
                rechtlichen Anforderungen schafft Vertrauen bei Datenschutzbeauftragten und Führung (Cloud-Einsatz ist
                kontrolliert und nachweisbar compliant). Reduziertes Risiko von Datenschutzvorfällen oder
                Cyberangriffen. Durch Verschlüsselung und restriktives Rechtemanagement bleiben sensible Informationen
                geschützt​, ohne dass die Nutzer auf Komfort verzichten müssen. Eine solide Compliance begünstigt
                letztlich auch die Akzeptanz von Cloud-Lösungen in Politik und Verwaltung, weil Risiken transparent
                gemindert werden.
              </p>
            </div>
            <a href="#" className="link with-icon more-info-btn" onClick={handleClick}>
              <span className="plus-icon">+</span> Weitere Informationen
            </a>
          </div>

          <div className="card">
            <h3>Prozessautomatisierung</h3>
            <p>
              Optimierung interner Prozesse mit Power Automate &amp; Power Apps – schnell, effizient und kosteneffektiv.
            </p>
            <div className="extra-info">
              <h3>Beschreibung & Umfang</h3>
              <p>
                Analyse eines oder mehrerer bestehender Verwaltungsprozesse auf Automatisierungspotenzial (z.B.
                Rechnungsfreigabe, Urlaubsantrag, Bürgeranfrage-Weiterleitung). Umsetzung als digitaler Workflow mit
                Power Automate; bei Bedarf Entwicklung einer einfachen Power App für Eingaben oder mobile Nutzung.
                Integration mit bestehenden Fachverfahren oder Datenbanken via Standard-Konnektoren, sofern möglich.
                Übergabe von Dokumentationen und Schulung ausgewählter Key-User zur Pflege der Workflows.
              </p>
              <br />
              <h3>Mehrwert für die Behörde</h3>
              <p>
                Reduktion manueller Tätigkeiten und damit Zeitgewinn. Prozesse werden medienbruchfrei, was OZG-konforme
                Abläufe unterstützt​. Fehler und Liegezeiten werden minimiert (z.B. keine Papierstapel mehr, die auf
                Bearbeitung warten). Die Verwaltung wird nach innen effizienter und kann Serviceversprechen (schnellere
                Bearbeitung) gegenüber Bürgern besser einhalten. Zudem lernt die Behörde am konkreten Beispiel, wie
                weitere Prozesse eigenständig digitalisiert werden können (Empowerment).
              </p>
            </div>
            <a href="#" className="link with-icon more-info-btn" onClick={handleClick}>
              <span className="plus-icon">+</span> Weitere Informationen
            </a>
          </div>

          <div className="card">
            <h3>KI-gestützte Tools</h3>
            <p>Integration von Microsoft 365 Copilot und weiteren KI-Anwendungen zur Steigerung der Produktivität.</p>
            <div className="extra-info">
              <h3>Beschreibung & Umfang</h3>
              <p>
                Gemeinsame Pilotierung von Microsoft 365 Copilot in der Behörde. Beratung zur Lizenzierung (z.B.
                Zusatzkosten für Copilot), Einrichtung und Konfiguration der KI-Dienste in einem sicheren Rahmen (ggf.
                mit Test-Mandanten und Dummy-Daten). Auswahl konkreter Anwendungsfälle – z.B. Copilot in Word für
                Textentwürfe oder in Teams für Meeting-Zusammenfassungen – und begleitete Tests mit einer kleinen Gruppe
                von Mitarbeitern. Workshop zu KI-Ethik & Datenschutz: Dos and Don’ts bei der Nutzung von KI in der
                Behörde. Erfolgskontrolle und Empfehlung für Roll-out.
              </p>
              <br />
              <h3>Mehrwert für die Behörde</h3>
              <p>
                Die Behörde kann praxisnah erproben, welchen Nutzen KI-Werkzeuge bieten, ohne gleich flächendeckend
                Lizenzen zu kaufen. Frühzeitige Erfahrungen verschaffen einen Wissensvorsprung (man ist „vorne dabei“
                bei neuen Technologien). Mitarbeiter werden an produktive KI-Nutzung herangeführt und Ängste abgebaut.
                Bei Erfolg kann die Lösung auf mehr Nutzer ausgeweitet werden, was mittelfristig zu erheblichen
                Effizienzgewinnen führen kann (schnellere Schreibarbeiten, besseres Informationsmanagement). Zudem
                demonstriert die Verwaltung Innovationsbereitschaft nach außen.
              </p>
            </div>
            <a href="#" className="link with-icon more-info-btn" onClick={handleClick}>
              <span className="plus-icon">+</span> Weitere Informationen
            </a>
          </div>

          <div className="card">
            <h3>Entwicklung von Custom Solutions</h3>
            <p>Maßgeschneiderte Entwicklungen zur Optimierung Ihrer Arbeitsprozesse und Systemintegration.</p>
            <div className="extra-info">
              <h3>Beschreibung & Umfang</h3>
              <p>
                Maßgeschneiderte Entwicklung von individuellen Anwendungen unter Nutzung von Microsoft-Technologien.
                Dies kann zum Beispiel die Entwicklung spezifischer Portale, maßgeschneiderter Verwaltungs-Apps oder
                Integrationslösungen für Fachverfahren umfassen, die über Standardfunktionen hinausgehen. Oft werden
                bestehende Prozesse digitalisiert und optimal auf die Arbeitsweise der Behörde abgestimmt.
              </p>
              <br />
              <h3>Mehrwert für die Behörde</h3>
              <p>
                Passgenaue Lösungen, die exakt auf die spezifischen Anforderungen und Prozesse der jeweiligen Behörde
                zugeschnitten sind. Schließung von Funktionslücken, Verbesserung der Effizienz und Reduktion von
                Medienbrüchen, wodurch Arbeitsabläufe optimal unterstützt werden.
              </p>
            </div>
            <a href="#" className="link with-icon more-info-btn" onClick={handleClick}>
              <span className="plus-icon">+</span> Weitere Informationen
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
