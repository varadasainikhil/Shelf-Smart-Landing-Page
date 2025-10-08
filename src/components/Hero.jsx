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
                <div className="mockup-placeholder">
                  <svg width="200" height="400" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* iPhone Frame */}
                    <rect x="10" y="10" width="180" height="380" rx="30" fill="var(--color-text)" opacity="0.1"/>
                    <rect x="15" y="15" width="170" height="370" rx="27" fill="var(--color-background)"/>

                    {/* Screen Content - Simplified UI */}
                    <rect x="25" y="80" width="150" height="60" rx="12" fill="var(--color-surface)"/>
                    <rect x="35" y="95" width="60" height="8" rx="4" fill="var(--color-text)" opacity="0.3"/>
                    <rect x="35" y="110" width="100" height="6" rx="3" fill="var(--color-text)" opacity="0.2"/>
                    <circle cx="165" cy="110" r="15" fill="var(--color-primary)" opacity="0.3"/>

                    <rect x="25" y="155" width="150" height="60" rx="12" fill="var(--color-surface)"/>
                    <rect x="35" y="170" width="60" height="8" rx="4" fill="var(--color-text)" opacity="0.3"/>
                    <rect x="35" y="185" width="100" height="6" rx="3" fill="var(--color-text)" opacity="0.2"/>
                    <circle cx="165" cy="185" r="15" fill="var(--color-primary)"/>

                    <rect x="25" y="230" width="150" height="60" rx="12" fill="var(--color-surface)"/>
                    <rect x="35" y="245" width="60" height="8" rx="4" fill="var(--color-text)" opacity="0.3"/>
                    <rect x="35" y="260" width="100" height="6" rx="3" fill="var(--color-text)" opacity="0.2"/>
                    <circle cx="165" cy="260" r="15" fill="var(--color-primary)" opacity="0.5"/>
                  </svg>
                  <div className="mockup-label">Replace with app screenshot</div>
                </div>
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
