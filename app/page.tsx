import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import About from '@/components/About';
import Ansprechpartner from '@/components/Ansprechpartner';
import ContactForm from '@/components/ContactForm';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="container">
        <Hero />
        <Services />
        <Process />
        <About />
        <Ansprechpartner />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
