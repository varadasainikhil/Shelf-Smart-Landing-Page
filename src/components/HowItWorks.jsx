import '../styles/HowItWorks.css';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Scan & Add Items',
      description: 'Use our lightning-fast barcode scanner to add products instantly with EAN13/UPC codes. Manually add fresh produce and homemade items. Set expiration dates with a few taps.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 1v6h6V1H1zm2 2h2v2H3V3zm8-2v6h6V1h-6zm2 2h2v2h-2V3zM1 15v6h6v-6H1zm2 2h2v2H3v-2zm8-2v6h6v-6h-6zm2 2h2v2h-2v-2z"/>
          <line x1="7" y1="15" x2="7" y2="21"/>
          <line x1="17" y1="15" x2="17" y2="21"/>
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Track with Color Codes',
      description: 'Your pantry dashboard shows color-coded status at a glance: Green for fresh (7+ days), Yellow for expiring soon (3-6 days), Red for expired. Get automatic notifications 7 days before expiration.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z"/>
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Discover & Cook',
      description: 'Find recipes based on your pantry items. Filter by cuisine, diet, and meal type. Use "Surprise Me" for inspiration. Save money by using what you already have and reduce waste by up to 25%.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18.36 4.64a9 9 0 10-12.72 0"/>
          <path d="M12 2v10"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="how-it-works section" id="how-it-works">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <h2 className="section-title">Get Started in 3 Easy Steps</h2>
          <p className="section-description">
            Managing your kitchen has never been this simple.
          </p>
        </div>

        {/* Steps */}
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              {/* Step Number Badge */}
              <div className="step-number-badge">{step.number}</div>

              {/* Step Content */}
              <div className="step-content">
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>

              {/* Connector Line (except for last step) */}
              {index < steps.length - 1 && (
                <div className="step-connector" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="how-cta">
          <a href="https://apps.apple.com/us/app/shelfsmart/id6752867283" className="btn btn-primary btn-large">
            Get Started for Free
          </a>
        </div>
      </div>
    </section>
  );
}