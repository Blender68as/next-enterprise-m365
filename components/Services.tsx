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
              <h3>Beschreibung &amp; Umfang</h3>
              <ul>
                <li>Einrichtung eines neuen Microsoft 365-Tenants nach BSI IT-Grundschutz und ISO 27001</li>
                <li>
                  Grundlegende Identity- &amp; Security-Konfiguration (Entra ID, MFA, Conditional Access) gemäß ITIL
                </li>
                <li>Migration von E-Mails und Daten: Exchange Online, OneDrive (PST-Import, Fileshare-to-OneDrive)</li>
                <li>Qualitätssicherung und Dokumentation nach ISO 9001-Standards</li>
              </ul>
              <br />
              <h3>Mehrwert für die Behörde</h3>
              <ul>
                <li>Schneller, kosteneffizienter Einstieg in die Cloud – keine eigene Infrastruktur nötig</li>
                <li>Nachweisbare Compliance durch ISO 27001-Zertifizierung und BSI IT-Grundschutz</li>
                <li>Strukturiertes Identity- &amp; Access-Management gemäß ITIL</li>
              </ul>
              <br />
              <h3>KPIs &amp; Verbesserungen</h3>
              <ul>
                <li>
                  Bis zu 54 % geringere Gesamtbetriebskosten im Vergleich zu On-Premises (
                  <a
                    href="https://www.microsoft.com/content/dam/microsoft/final/en-us/microsoft-brand/documents/TEI-of-Microsoft-365-E5-August-2023.pdf"
                    target="_blank"
                    rel="noopener"
                  >
                    Quelle
                  </a>
                  )
                </li>
                <li>
                  16 % Reduktion der Zeit zur Ressourcenallokation (
                  <a
                    href="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/final/en-us/microsoft-brand/documents/The_Total_Economic_Impact_Of_Microsoft_Office_365_PPM.PDF"
                    target="_blank"
                    rel="noopener"
                  >
                    Quelle
                  </a>
                  )
                </li>
              </ul>
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
              <h3>Beschreibung &amp; Umfang</h3>
              <ul>
                <li>
                  Rollout von Microsoft Teams für Chat, Videokonferenzen und Kanäle – inklusive Governance nach ITIL
                </li>
                <li>
                  Aufbau eines individuellen Intranets mit SharePoint Online (z.B. Abteilungs-Sites, News &amp;
                  Dokumentenbibliotheken)
                </li>
                <li>
                  Migration gemeinsamer Ablagen vom Fileserver (oder andere externe Datenquellen) zu SharePoint – inkl.
                  Berechtigungs- und Sensitivity-Label-Setup
                </li>
                <li>Einbindung externer Partner via Gastzugänge in Teams – DSGVO- &amp; BSI-konform</li>
                <li>Schulungen und Best-Practice-Dokumentation nach ISO 9001</li>
              </ul>
              <br />
              <h3>Mehrwert für die Behörde</h3>
              <ul>
                <li>Effizientere Kommunikation und weniger E-Mail-Traffic</li>
                <li>Mobiles und ortsunabhängiges Arbeiten</li>
                <li>Transparenz und Wissensaustausch durch zentrale Dokumentenablage</li>
                <li>Governance und Compliance sichergestellt durch ISO 27001 und ITIL-Prozesse</li>
              </ul>
              <br />
              <h3>KPIs &amp; Verbesserungen</h3>
              <ul>
                <li>
                  17,3 % Reduktion des E‑Mail-Aufkommens (
                  <a href="https://tomtalks.blog/microsoft-teams-statistics/" target="_blank" rel="noopener">
                    Quelle
                  </a>
                  )
                </li>
                <li>
                  45 % Zunahme der Chat-Nutzung nach Einführung von Teams (
                  <a href="https://www.notta.ai/en/blog/microsoft-teams-statistics" target="_blank" rel="noopener">
                    Quelle
                  </a>
                  )
                </li>
              </ul>
            </div>
            <a href="#" className="link with-icon more-info-btn" onClick={handleClick}>
              <span className="plus-icon">+</span> Weitere Informationen
            </a>
          </div>
          <div className="card">
            <h3>Security &amp; Compliance</h3>
            <p>Beratung und Umsetzung von Sicherheits- und Compliance-Lösungen für behördliche Anforderungen.</p>
            <div className="extra-info">
              <h3>Beschreibung &amp; Umfang</h3>
              <ul>
                <li>Security-Assessment nach BSI IT-Grundschutz und ISO 27001</li>
                <li>
                  Implementierung von Microsoft Defender for Endpoint, DLP, Sensitivity Labels &amp; Information
                  Protection
                </li>
                <li>Einrichtung von Conditional Access, MFA und Privileged Access Management gemäß ITIL</li>
                <li>DSGVO- &amp; NIS2-Konformitätsprüfung inkl. DPIA-Vorlagen</li>
                <li>Governance-Framework und Dokumentation nach ISO 9001</li>
              </ul>
              <br />
              <h3>Mehrwert für die Behörde</h3>
              <ul>
                <li>Maximale Absicherung sensibler Daten durch ISO 27001- &amp; BSI-Grundschutz-Standards</li>
                <li>Transparente, auditfähige Prozesse gemäß ITIL</li>
                <li>Reduziertes Risiko von Sicherheitsvorfällen und Datenschutz­verletzungen</li>
                <li>Erhöhte Akzeptanz in Politik und Verwaltung durch nachweisbare Compliance</li>
              </ul>
              <br />
              <h3>KPIs &amp; Verbesserungen</h3>
              <ul>
                <li>
                  48 % Reduzierung der Gesamtkosten im Vergleich zu Legacy-SIEM-Lösungen (
                  <a
                    href="https://www.microsoft.com/en-us/security/blog/2020/11/16/forrester-tei-study-azure-sentinel-delivers-201-percent-roi-over-3-years-and-a-payback-of-less-than-6-months/"
                    target="_blank"
                    rel="noopener"
                  >
                    Quelle
                  </a>
                  )
                </li>
                <li>
                  50 % schnellere Bedrohungsabwicklung durch automatisierte Playbooks (
                  <a
                    href="https://www.microsoft.com/en-us/security/blog/2021/02/18/forrester-consulting-tei-study-azure-security-center-delivers-219-percent-roi-over-3-years-and-a-payback-of-less-than-6-months/"
                    target="_blank"
                    rel="noopener"
                  >
                    Quelle
                  </a>
                  )
                </li>
              </ul>
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
              <h3>Beschreibung &amp; Umfang</h3>
              <ul>
                <li>
                  Analyse behördlicher Abläufe auf Automatisierungspotenzial (z.B. Rechnungsfreigabe, Urlaubsanträge)
                </li>
                <li>Umsetzung mit PowerAutomate &amp; PowerApps – eGov- und eAkte-Integration</li>
                <li>RPA-Szenarien für wiederkehrende Aufgaben und Fachverfahren-Konnektoren</li>
                <li>Dokumentation und Schulung ausgewählter Key-User nach ISO 9001</li>
                <li>Change- &amp; Incident-Management-Prozesse nach ITIL</li>
              </ul>
              <br />
              <h3>Mehrwert für die Behörde</h3>
              <ul>
                <li>Medienbruchfreie, OZG-konforme Abläufe</li>
                <li>Zeit- und Kostenersparnis durch automatisierte Workflows</li>
                <li>Verbesserte Servicequalität und schnellere Bearbeitungszeiten</li>
              </ul>
              <br />
              <h3>KPIs &amp; Verbesserungen</h3>
              <ul>
                <li>
                  ROI von bis zu 248% über drei Jahre durch durchgängige Automatisierungsprozesse (
                  <a
                    href="https://www.microsoft.com/en-us/power-platform/blog/power-automate/boost-efficiency-and-increase-roi-with-next-level-process-automation/"
                    target="_blank"
                    rel="noopener"
                  >
                    Quelle
                  </a>
                  )
                </li>
                <li>
                  200-450 Stunden jährliche Zeitersparnis pro Mitarbeiter durch RPA-gestützte Abläufe (
                  <a
                    href="https://www.microsoft.com/en-us/power-platform/blog/power-automate/boost-efficiency-and-increase-roi-with-next-level-process-automation/"
                    target="_blank"
                    rel="noopener"
                  >
                    Quelle
                  </a>
                  )
                </li>
              </ul>
            </div>
            <a href="#" className="link with-icon more-info-btn" onClick={handleClick}>
              <span className="plus-icon">+</span> Weitere Informationen
            </a>
          </div>
          <div className="card">
            <h3>KI-gestützte Tools</h3>
            <p>Integration von Microsoft 365 Copilot und weiteren KI-Anwendungen zur Steigerung der Produktivität.</p>
            <div className="extra-info">
              <h3>Beschreibung &amp; Umfang</h3>
              <ul>
                <li>Pilotierung von Microsoft 365 Copilot in Test-Mandanten mit Dummy-Daten</li>
                <li>Beratung zur Lizenzierung und sicheren Konfiguration nach BSI IT-Grundschutz</li>
                <li>Auswahl und Umsetzung von KI-Anwendungsfällen (z.B. Textentwürfe, Meeting-Zusammenfassungen)</li>
                <li>Workshop zu KI-Ethik, Datenschutz &amp; ITIL-konformen Prozessen</li>
                <li>Erfolgskontrolle und Roadmap für den Roll-out</li>
              </ul>
              <br />
              <h3>Mehrwert für die Behörde</h3>
              <ul>
                <li>Frühe Praxiserfahrung mit KI-Technologien</li>
                <li>Wettbewerbsvorteil und Innovationsnachweis</li>
                <li>Reduktion administrativer Tätigkeiten durch intelligente Assistenten</li>
                <li>Sichere, regelbasierte KI-Nutzung im Einklang mit ISO 27001</li>
              </ul>
              <br />
              <h3>KPIs &amp; Verbesserungen</h3>
              <ul>
                <li>
                  Durchschnittliche Einsparung von 70 Stunden pro Anwender und Jahr (
                  <a
                    href="https://tei.forrester.com/go/microsoft/365E3TeamsCopilot/index.html?lang=en-us"
                    target="_blank"
                    rel="noopener"
                  >
                    Quelle
                  </a>
                  )
                </li>
                <li>
                  Projektierter ROI von bis zu 353% über drei Jahre (
                  <a
                    href="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/final/en-us/microsoft-brand/documents/TEI-of-Microsoft-365-Copilot-for-SMB-Oct-2024.pdf"
                    target="_blank"
                    rel="noopener"
                  >
                    Quelle
                  </a>
                  )
                </li>
              </ul>
            </div>
            <a href="#" className="link with-icon more-info-btn" onClick={handleClick}>
              <span className="plus-icon">+</span> Weitere Informationen
            </a>
          </div>
          <div className="card">
            <h3>Entwicklung von Custom Solutions</h3>
            <p>Maßgeschneiderte Entwicklungen zur Optimierung Ihrer Arbeitsprozesse und Systemintegration.</p>
            <div className="extra-info">
              <h3>Beschreibung &amp; Umfang</h3>
              <ul>
                <li>Individuelle API-Entwicklung und Systemintegration für Fachverfahren</li>
                <li>Custom Apps &amp; Add-Ons für Teams, SharePoint &amp; weitere Microsoft 365 Komponenten</li>
                <li>CI/CD-Pipelines und Release-Management nach DevOps-Prinzipien &amp; ITIL</li>
                <li>Code-Reviews, Security-Scans und Qualitätssicherung nach ISO 9001 &amp; ISO 27001</li>
                <li>Anbindung externer Systeme (ERP, eGov-, eAkte-Plattformen)</li>
              </ul>
              <br />
              <h3>Mehrwert für die Behörde</h3>
              <ul>
                <li>Passgenaue Lösungen ohne Medienbrüche</li>
                <li>Schnelle Bereitstellung neuer Features durch automatisierte Pipelines</li>
                <li>Hohe Code-Qualität und Sicherheit durch zertifizierte Prozesse</li>
                <li>Skalierbare eGov-Architektur für zukünftige Anforderungen</li>
              </ul>
              <br />
              <h3>KPIs &amp; Verbesserungen</h3>
              <ul>
                <li>
                  35% kürzere Entwicklungszyklen durch Low-Code-Lösungen (
                  <a
                    href="https://www.microsoft.com/en-us/power-platform/blog/2024/09/03/reduce-development-times-and-increase-roi-with-microsoft-power-platform/"
                    target="_blank"
                    rel="noopener"
                  >
                    Quelle
                  </a>
                  )
                </li>
                <li>
                  25% geringere Wartungskosten durch automatisierte CI/CD-Pipelines (
                  <a
                    href="https://www.microsoft.com/en-us/power-platform/blog/2024/09/03/reduce-development-times-and-increase-roi-with-microsoft-power-platform/"
                    target="_blank"
                    rel="noopener"
                  >
                    Quelle
                  </a>
                  )
                </li>
              </ul>
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
