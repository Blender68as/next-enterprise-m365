export default function Hero() {
    return (
      <section className="hero" id="hero">
        <div className="container text-center py-20 text-white" style={{ background: 'linear-gradient(to right, #003366, #005a9e)' }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Digitale Transformation für Behörden</h1>
          <p className="text-lg md:text-xl mb-6 animate-fade-in delay-300">
            Wir unterstützen öffentliche Einrichtungen bei der sicheren Cloud-Migration und Implementierung moderner Microsoft 365 Lösungen.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded animate-fade-in delay-600"
          >
            Kontakt aufnehmen
          </a>
          <div className="mt-3 text-sm text-white/90 animate-fade-in delay-900">
            Das erste Gespräch ist kostenfrei!
          </div>
        </div>
      </section>
    );
  }