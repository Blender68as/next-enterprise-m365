import SectionWrapper from "./SectionWrapper"

export default function About() {
  return (
    <>
      <div id="beforeAbout" style={{ scrollMarginTop: 90 }}></div>
      <SectionWrapper id="about" variant="contained-bg">
        <h2 className="section-title">Über uns</h2>
        <div className="team">
          <p>
            Wir sind ein spezialisiertes Team, das auf Microsoft 365 Architektur, Entwicklung und Administration im
            öffentlichen Sektor fokussiert ist.
          </p>
          <p>
            <em>
              Unsere Mission: Behörden den Weg in die digitale Zukunft ebnen – mit stabilen, sicheren und
              zukunftsweisenden Lösungen.
            </em>
          </p>
        </div>
      </SectionWrapper>
    </>
  )
}
