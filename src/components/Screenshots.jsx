import { useState } from 'react';
import '../styles/Screenshots.css';

export default function Screenshots() {
  const [activeIndex, setActiveIndex] = useState(0);

  const screenshots = [
    {
      title: 'Your Digital Pantry',
      description: 'Get a clear overview of all your groceries. Our color-coded system shows what’s fresh, expiring soon, or past its best.',
      alt: 'Shelf Smart home dashboard showing products organized by expiry date',
      svg: (
        <svg width="240" height="480" viewBox="0 0 240 480" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="220" height="460" rx="35" fill="var(--color-text)" opacity="0.08"/>
          <rect x="15" y="15" width="210" height="450" rx="32" fill="var(--color-background)"/>
          <rect x="30" y="30" width="60" height="8" rx="4" fill="var(--color-text)" opacity="0.3"/>
          <circle cx="195" cy="34" r="4" fill="var(--color-primary)"/>
          <rect x="30" y="60" width="120" height="12" rx="6" fill="var(--color-text)" opacity="0.4"/>
          <rect x="30" y="78" width="80" height="8" rx="4" fill="var(--color-text)" opacity="0.2"/>
          <rect x="30" y="110" width="180" height="80" rx="16" fill="var(--color-surface)"/>
          <rect x="45" y="130" width="100" height="10" rx="5" fill="var(--color-text)" opacity="0.3"/>
          <rect x="45" y="150" width="150" height="8" rx="4" fill="var(--color-text)" opacity="0.2"/>
          <circle cx="190" cy="150" r="18" fill="var(--color-primary)"/>
          <rect x="30" y="205" width="180" height="80" rx="16" fill="var(--color-surface)"/>
          <rect x="45" y="225" width="100" height="10" rx="5" fill="var(--color-text)" opacity="0.3"/>
          <rect x="45" y="245" width="150" height="8" rx="4" fill="var(--color-text)" opacity="0.2"/>
          <circle cx="190" cy="245" r="18" fill="var(--color-primary)"/>
          <rect x="30" y="300" width="180" height="80" rx="16" fill="var(--color-surface)"/>
          <rect x="45" y="320" width="100" height="10" rx="5" fill="var(--color-text)" opacity="0.3"/>
          <rect x="45" y="340" width="150" height="8" rx="4" fill="var(--color-text)" opacity="0.2"/>
          <circle cx="190" cy="340" r="18" fill="var(--color-primary)" opacity="0.5"/>
          <rect x="30" y="420" width="180" height="40" rx="20" fill="var(--color-surface)"/>
          <circle cx="60" cy="440" r="10" fill="var(--color-primary)"/>
          <circle cx="120" cy="440" r="10" fill="var(--color-text)" opacity="0.3"/>
          <circle cx="180" cy="440" r="10" fill="var(--color-text)" opacity="0.3"/>
        </svg>
      ),
    },
    {
      title: 'Detailed Product View',
      description: 'Dive deeper into each item. See its expiration countdown, add notes, and find relevant recipes instantly.',
      alt: 'Product detail view with expiration date and recipe recommendations',
      svg: (
        <svg width="240" height="480" viewBox="0 0 240 480" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="220" height="460" rx="35" fill="var(--color-text)" opacity="0.08"/>
          <rect x="15" y="15" width="210" height="450" rx="32" fill="var(--color-background)"/>
          <rect x="30" y="60" width="180" height="120" rx="16" fill="var(--color-surface)"/>
          <rect x="45" y="80" width="150" height="16" rx="8" fill="var(--color-text)" opacity="0.4"/>
          <rect x="45" y="108" width="100" height="10" rx="5" fill="var(--color-text)" opacity="0.2"/>
          <rect x="45" y="140" width="150" height="20" rx="10" fill="var(--color-primary)" opacity="0.4"/>
          <rect x="30" y="200" width="180" height="200" rx="16" fill="var(--color-surface)"/>
          <rect x="45" y="220" width="150" height="8" rx="4" fill="var(--color-text)" opacity="0.2"/>
          <rect x="45" y="240" width="120" height="8" rx="4" fill="var(--color-text)" opacity="0.2"/>
          <rect x="45" y="260" width="150" height="8" rx="4" fill="var(--color-text)" opacity="0.2"/>
          <rect x="45" y="280" width="100" height="8" rx="4" fill="var(--color-text)" opacity="0.2"/>
        </svg>
      ),
    },
    {
      title: 'Waste-Reducing Recipes',
      description: 'Don\'t know what to make? Discover delicious recipes based on the ingredients you have on hand. A perfect way to use up food.',
      alt: 'Recipe discovery screen showing personalized recipe recommendations',
      svg: (
        <svg width="240" height="480" viewBox="0 0 240 480" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="220" height="460" rx="35" fill="var(--color-text)" opacity="0.08"/>
          <rect x="15" y="15" width="210" height="450" rx="32" fill="var(--color-background)"/>
          <rect x="30" y="60" width="180" height="100" rx="16" fill="var(--color-surface)"/>
          <rect x="45" y="75" width="150" height="12" rx="6" fill="var(--color-text)" opacity="0.3"/>
          <rect x="45" y="95" width="100" height="8" rx="4" fill="var(--color-text)" opacity="0.2"/>
          <rect x="30" y="175" width="180" height="100" rx="16" fill="var(--color-surface)"/>
          <rect x="45" y="190" width="150" height="12" rx="6" fill="var(--color-text)" opacity="0.3"/>
          <rect x="45" y="210" width="100" height="8" rx="4" fill="var(--color-text)" opacity="0.2"/>
          <rect x="30" y="290" width="180" height="100" rx="16" fill="var(--color-surface)"/>
          <rect x="45" y="305" width="150" height="12" rx="6" fill="var(--color-text)" opacity="0.3"/>
          <rect x="45" y="325" width="100" height="8" rx="4" fill="var(--color-text)" opacity="0.2"/>
        </svg>
      ),
    },
    {
      title: 'Customizable Notifications',
      description: 'Stay in control with smart reminders. Get notified a week before, a day before, or on the day of expiry. You choose.',
      alt: 'Notification screen showing expiry alerts',
      svg: (
        <svg width="240" height="480" viewBox="0 0 240 480" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="220" height="460" rx="35" fill="var(--color-text)" opacity="0.08"/>
          <rect x="15" y="15" width="210" height="450" rx="32" fill="var(--color-background)"/>
          <rect x="30" y="60" width="180" height="60" rx="16" fill="var(--color-primary)" opacity="0.2"/>
          <rect x="45" y="75" width="150" height="10" rx="5" fill="var(--color-primary)" opacity="0.8"/>
          <rect x="45" y="95" width="100" height="8" rx="4" fill="var(--color-primary)" opacity="0.5"/>
          <rect x="30" y="135" width="180" height="60" rx="16" fill="var(--color-surface)"/>
          <rect x="45" y="150" width="150" height="10" rx="5" fill="var(--color-text)" opacity="0.3"/>
          <rect x="45" y="170" width="100" height="8" rx="4" fill="var(--color-text)" opacity="0.2"/>
          <rect x="30" y="210" width="180" height="60" rx="16" fill="var(--color-surface)"/>
          <rect x="45" y="225" width="150" height="10" rx="5" fill="var(--color-text)" opacity="0.3"/>
          <rect x="45" y="245" width="100" height="8" rx="4" fill="var(--color-text)" opacity="0.2"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="screenshots section" id="screenshots">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <h2 className="section-title">A Joy to Use</h2>
          <p className="section-description">
            Designed with iOS guidelines in mind, Shelf Smart feels right at home on your device. It’s powerful, yet simple and intuitive.
          </p>
        </div>

        {/* Screenshots Carousel */}
        <div className="screenshots-carousel">
          {/* Main Display */}
          <div className="screenshot-main">
            <div className="screenshot-frame">
              {/* Placeholder for screenshot */}
              <div className="screenshot-placeholder">
                {screenshots[activeIndex].svg}
                <div className="placeholder-label">
                  {screenshots[activeIndex].title}
                </div>
              </div>
            </div>

            {/* Screenshot Info */}
            <div className="screenshot-info">
              <h3 className="screenshot-title">{screenshots[activeIndex].title}</h3>
              <p className="screenshot-description">{screenshots[activeIndex].description}</p>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="screenshot-thumbnails">
            {screenshots.map((screenshot, index) => (
              <button
                key={index}
                className={`thumbnail ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`View ${screenshot.title} screenshot`}
              >
                <div className="thumbnail-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="thumbnail-title">{screenshot.title}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}