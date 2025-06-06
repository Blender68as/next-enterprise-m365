export const metadata = {
  title: "Datenschutzerklärung | Behörde.Digital",
  description: "Impressum der Behörde.Digital – Ihr Partner für Microsoft 365 in öffentlichen Institutionen.",
  robots: "noindex, nofollow",
  icons: {
    icon: "/logo-full.webp",
  },
}

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import SafeEmail from "@/components/SafeEmail"
import SectionWrapper from "@/components/SectionWrapper"

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <SectionWrapper id="datenschutz" variant="contained-bg" outerClassName="visible">
        <h1 className="section-title">Datenschutzerklärung</h1>
        <p>
          Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten ausschließlich
          auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TMG).
        </p>
        <h2>1. Verantwortlicher</h2>
        <p>
          SP Experts Personengesellschaft
          <br />
          Ifflandstr. 14
          <br />
          68161 Mannheim
          <br />
          Deutschland
          <br />
          E-Mail: <SafeEmail user="kontakt" domain="Behörde.Digital" />
        </p>
        <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
        Beim Besuch unserer Website werden automatisch Informationen durch den Browser des Endgeräts gesendet. Diese
        Informationen umfassen:
        <ul>
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>Browsertyp und -version</li>
          <li>Verwendetes Betriebssystem</li>
        </ul>
        <p>Diese Daten werden zur Sicherstellung eines stabilen Betriebs protokolliert und nach 14 Tagen gelöscht.</p>
        <h2>3. Kontaktformular</h2>
        <p>
          Wenn Sie uns per Formular Anfragen zukommen lassen, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für
          den Fall von Anschlussfragen bei uns gespeichert. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. b DSGVO.
        </p>
        <h2>4. Verwendung von Microsoft 365</h2>
        <p>
          Für interne Kommunikation und Dokumentenverarbeitung nutzen wir Microsoft 365. Die Datenverarbeitung erfolgt
          ausschließlich innerhalb europäischer Rechenzentren gemäß den EU-Standardvertragsklauseln.
        </p>
        <h2>5. Ihre Rechte</h2>
        <ul>
          <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung (Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
        </ul>
        <p>
          Zur Ausübung Ihrer Rechte wenden Sie sich bitte an{" "}
          <strong>
            <SafeEmail user="datenschutz" domain="Behörde.Digital" />
          </strong>
          .
        </p>
        <h2>6. Auftragsverarbeiter</h2>
        <p>
          Wir setzen Hosting- und IT-Dienstleister ein, mit denen Auftragsverarbeitungsverträge gemäß Art. 28 DSGVO
          bestehen. Die Server befinden sich in Deutschland bzw. innerhalb der EU.
        </p>
        <h2>7. Sicherheit</h2>
        <p>
          Unsere Website verwendet SSL-Verschlüsselung zur sicheren Übertragung aller Daten. Darüber hinaus setzen wir
          organisatorische und technische Maßnahmen zum Schutz Ihrer Daten ein.
        </p>
        <h2>8. Änderungen dieser Datenschutzerklärung</h2>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Die jeweils aktuelle Version finden
          Sie stets auf dieser Seite.
        </p>
        <br />
        <p>Stand: April 2025</p>
      </SectionWrapper>
      <Footer />
    </>
  )
}
