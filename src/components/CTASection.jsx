import '../styles/CTASection.css';

export default function CTASection() {
  return (
    <section className="cta-section section" id="download">
      <div className="container">
        <div className="cta-content">
          {/* App Icon */}
          <div className="cta-icon">
            <img src="/images/app-icon-512.png" alt="ShelfSmart App Icon" />
          </div>

          {/* Text Content */}
          <div className="cta-text">
            <h2 className="cta-title">Stop Wasting Food, Start Saving Money</h2>
            <p className="cta-description">
              Join thousands of users reducing waste and saving over $1,500 per year with ShelfSmart.
              It's free to download with all features included.
            </p>

            {/* Benefits List */}
            <ul className="cta-benefits">
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Color-coded expiration tracking with automatic notifications
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Lightning-fast barcode scanner for instant product lookup
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Thousands of recipes with smart filtering and allergy management
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Seamless iCloud sync and privacy-first with Sign in with Apple
              </li>
            </ul>

            {/* Download Button */}
            <a
              href="https://apps.apple.com/us/app/shelfsmart/id6752867283"
              className="btn btn-primary btn-large cta-button"
              aria-label="Download ShelfSmart on the App Store"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              Download ShelfSmart
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}