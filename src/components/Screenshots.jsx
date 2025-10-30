import { useState } from 'react';
import '../styles/Screenshots.css';

export default function Screenshots() {
  const [activeIndex, setActiveIndex] = useState(0);

  const screenshots = [
    {
      title: 'Color-Coded Expiry Tracking',
      description: 'Your pantry organized by expiration date with visual status indicators: Green for fresh (7+ days), Yellow for expiring soon (3-6 days), Red for expired. Never let food go bad again.',
      alt: 'ShelfSmart iOS app home screen displaying pantry inventory with color-coded expiration alerts - green, yellow, and red status indicators',
      image: '/images/iphone-homeview-Photoroom.png',
      width: 351,
      height: 700
    },
    {
      title: 'Product Details & Barcode Scanning',
      description: 'View detailed product information retrieved via barcode scanning. Track expiration countdown, add notes, manage consumption, and get instant recipe recommendations for each item.',
      alt: 'ShelfSmart product detail screen showing item information, expiration countdown timer, and barcode scanning integration',
      image: '/images/iphone-detailproductview-Photoroom.png',
      width: 734,
      height: 700
    },
    {
      title: 'Smart Recipe Discovery',
      description: 'Find thousands of recipes filtered by your pantry items. Filter by cuisine, diet (Vegan, Keto, Paleo), and meal type. All recipes automatically filtered for your allergies and dietary restrictions.',
      alt: 'ShelfSmart recipe discovery screen with smart filtering options for cuisine, diet type, and personalized meal recommendations',
      image: '/images/iphone-randomRecipeview-Photoroom.png',
      width: 576,
      height: 700
    },
  ];

  return (
    <section className="screenshots section" id="screenshots">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <h2 className="section-title">Beautiful Design Meets Powerful Features</h2>
          <p className="section-description">
            Built entirely in SwiftUI with full Dark Mode support. ShelfSmart follows Apple Human Interface Guidelines, delivering a powerful yet simple and intuitive experience.
          </p>
        </div>

        {/* Screenshots Carousel */}
        <div className="screenshots-carousel">
          {/* Main Display */}
          <div className="screenshot-main">
            <div className="screenshot-frame">
              {/* Placeholder for screenshot */}
              <div className="screenshot-placeholder">
                <img
                  src={screenshots[activeIndex].image}
                  alt={screenshots[activeIndex].alt}
                  className="screenshot-image"
                  width={screenshots[activeIndex].width}
                  height={screenshots[activeIndex].height}
                  loading="lazy"
                />
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