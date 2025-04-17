import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="container" style={{ marginTop: '120px', paddingBottom: '80px' }}>
        <h1 className="section-title">Impressum</h1>
        <strong>SP Experts Personengesellschaft</strong>
        <br />
        Ifflandstr. 14
        <br />
        68161 Mannheim
        <br />
        Deutschland
        <br />
        <br />
        Vertreten durch: Alexander Springer
        <br />
        E-Mail: kontakt@BehördeDigital.de
        <br />
        <br />
        Umsatzsteuer-ID: DE284841320
      </main>
      <Footer />
    </>
  );
}