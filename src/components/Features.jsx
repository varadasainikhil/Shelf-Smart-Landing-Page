import '../styles/Features.css';

export default function Features() {
  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 4.5h18M4.5 3v18M19.5 3v18M8.25 7.5h7.5M8.25 12h7.5M8.25 16.5h4.5"/>
        </svg>
      ),
      title: 'Smart Expiry Tracking',
      description: 'Our intelligent system categorizes your food, so you can see what’s fresh, what’s expiring soon, and what’s gone bad at a glance.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 16a4 4 0 100-8 4 4 0 000 8zm0 0V8m0 8a4 4 0 110-8 4 4 0 010 8zm0-8V4m0 16v-4"/>
        </svg>
      ),
      title: 'Timely Notifications',
      description: 'Receive smart reminders before your food expires. Customize notification timing to fit your schedule and reduce waste.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      ),
      title: 'Recipe Recommendations',
      description: 'Get inspired with recipes based on the ingredients you already have. A delicious way to prevent food waste.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m8-10a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87"/>
        </svg>
      ),
      title: 'iCloud Sync',
      description: 'Your grocery list is always up-to-date on your iPhone and iPad. Add an item on one device, and it appears on the other.',
    },
  ];

  return (
    <section className="features section" id="features">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <h2 className="section-title">A Smarter Way to Manage Your Groceries</h2>
          <p className="section-description">
            From smart tracking to recipe suggestions, Shelf Smart is packed with features to help you save money and fight food waste.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid" role="list" aria-label="Key features of Shelf Smart">
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
