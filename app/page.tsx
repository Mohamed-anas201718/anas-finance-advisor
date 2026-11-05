import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import InsuranceCalculator from '@/components/InsuranceCalculator';
import WhyTataAia from '@/components/WhyTataAia';
import AdvisorProfile from '@/components/AdvisorProfile';
import ContactSection from '@/components/ContactSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <Hero />
      <Solutions />
      <InsuranceCalculator />
      <WhyTataAia />
      <AdvisorProfile />
      <ContactSection />
      <FaqSection />
      <Footer />
      <FloatingContact />
    </main>
  );
}
