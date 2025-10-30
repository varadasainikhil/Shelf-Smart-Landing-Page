import '../styles/Features.css';

export default function Features() {
  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
      ),
      title: 'Smart Expiration Tracker',
      description: 'Never let food go bad again. Track every item with color-coded status: Green (7+ days), Yellow (3-6 days), Red (expired). Get automatic notifications 7 days before and on expiration date.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="4" y1="10" x2="20" y2="10"/>
        </svg>
      ),
      title: 'Barcode Scanner',
      description: 'Add items in seconds with our lightning-fast barcode scanner. Scan any EAN13 or UPC barcode to automatically retrieve product information including name, brand, and ingredients.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      ),
      title: 'Recipe Discovery Engine',
      description: 'Discover thousands of recipes based on your pantry items. Filter by cuisine, diet (Vegan, Keto, Paleo), and meal type. Use "Surprise Me" for random inspiration with detailed instructions and nutrition info.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
      title: 'Allergy Management',
      description: 'Set your allergies once and stay protected. Supports 12 common food intolerances including dairy, gluten, peanut, seafood, and more. All recipes automatically filtered for your safety.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
        </svg>
      ),
      title: 'Seamless iCloud Sync',
      description: 'Access your pantry inventory from any device, anywhere. Automatic sync across iPhone and iPad with smart notifications. Your data stays private and secure in iCloud with offline mode available.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      title: 'Save Money & Reduce Waste',
      description: 'The average American family wastes over $1,500 per year on expired food. Get notified before food expires, plan meals around what you have, and reduce household food waste by up to 25%.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      title: 'Beautiful iOS Design',
      description: 'Modern, intuitive interface built entirely in SwiftUI with full Dark Mode support. Smooth animations, haptic feedback, and optimized for all iPhone sizes following Apple Human Interface Guidelines.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      ),
      title: 'Privacy First',
      description: 'Your kitchen, your data, your privacy. Sign in with Apple supported with no email required. Data stored securely in your iCloud with no advertising or data selling. GDPR compliant.',
    },
  ];

  return (
    <section className="features section" id="features">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <h2 className="section-title">Your Ultimate Kitchen Companion</h2>
          <p className="section-description">
            From expiration tracking to recipe discovery, ShelfSmart is packed with powerful features to help you reduce food waste and save money.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid" role="list" aria-label="Key features of ShelfSmart">
          {features.map((feature, index) => (
            <div key={index} className="feature-card card" role="listitem">
              <div className="feature-icon" aria-hidden="true">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
