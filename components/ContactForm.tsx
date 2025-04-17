import SectionWrapper from "./SectionWrapper"

export default function ContactForm() {
  return (
    <SectionWrapper id="contact" variant="contained-bg">
      <h2 className="section-title">Kontakt</h2>
      <div className="contact-form">
        <form action="#" method="post">
          <input type="text" name="name" placeholder="Ihr Name" required />
          <input type="email" name="email" placeholder="Ihre E-Mail" required />
          <input type="tel" name="telefon" placeholder="Ihre Telefonnummer" />
          <input type="text" name="institution" placeholder="Behörde/Institution" />
          <textarea name="message" rows={5} placeholder="Ihre Nachricht / Anliegen" required></textarea>
          <button type="submit">Anfrage senden</button>
        </form>
      </div>
    </SectionWrapper>
  )
}
