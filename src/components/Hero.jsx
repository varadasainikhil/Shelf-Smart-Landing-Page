import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container">
        <div className="hero-content">
          {/* Text Content */}
          <div className="hero-text">
            <h1 className="hero-title fade-in">
              Shop Smarter, Waste Less
            </h1>
            <p className="hero-description fade-in">
              Effortlessly track your groceries, get timely expiry alerts, and discover recipes to use what you have. Shelf Smart is the intelligent way to manage your kitchen, save money, and help the planet.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta fade-in">
              <a
                href="https://apps.apple.com/app/shelf-smart"
                className="btn btn-primary btn-large btn-wrap"
                aria-label="Download Shelf Smart on the App Store"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Download Shelf Smart
              </a>

              <a
                href="#how-it-works"
                className="btn btn-secondary btn-large"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero-image fade-in">
            <div className="hero-image-wrapper">
              {/* Placeholder for app mockup */}
              <div className="app-mockup">
                <img src="/images/hero-mockup.png" alt="Shelf Smart app screenshot showing the main pantry view" className="mockup-image" />
              </div>

              {/* Decorative Elements */}
              <div className="hero-decoration hero-decoration-1" aria-hidden="true"></div>
              <div className="hero-decoration hero-decoration-2" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
