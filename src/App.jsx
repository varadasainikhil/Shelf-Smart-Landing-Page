import { Analytics } from '@vercel/analytics/react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Screenshots from './components/Screenshots';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Screenshots />
        <CTASection />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
