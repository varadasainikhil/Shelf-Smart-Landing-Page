import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Screenshots from './components/Screenshots';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Shelf Smart - Never Waste Food Again | Smart Grocery Expiry Tracker</title>
        <meta
          name="description"
          content="Track grocery expiry dates, get smart notifications, and discover recipes with Shelf Smart. Reduce food waste and save money with our intelligent iOS app."
        />
      </Helmet>

      <div className="App">
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main id="main-content">
          <Hero />
          <Features />
          <HowItWorks />
          <Screenshots />
          <CTASection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
