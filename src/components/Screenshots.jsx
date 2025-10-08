import { useState } from 'react';
import '../styles/Screenshots.css';

export default function Screenshots() {
  const [activeIndex, setActiveIndex] = useState(0);

  const screenshots = [
    {
      title: 'Your Digital Pantry',
      description: 'Get a clear overview of all your groceries. Our color-coded system shows what\'s fresh, expiring soon, or past its best.',
      alt: 'Shelf Smart home dashboard showing products organized by expiry date',
      image: '/images/iphone-homeview-Photoroom.png',
    },
    {
      title: 'Detailed Product View',
      description: 'Dive deeper into each item. See its expiration countdown, add notes, and find relevant recipes instantly.',
      alt: 'Product detail view with expiration date and recipe recommendations',
      image: '/images/iphone-detailproductview-Photoroom.png',
    },
    {
      title: 'Waste-Reducing Recipes',
      description: 'Don\'t know what to make? Discover delicious recipes based on the ingredients you have on hand. A perfect way to use up food.',
      alt: 'Recipe discovery screen showing personalized recipe recommendations',
      image: '/images/iphone-randomRecipeview-Photoroom.png',
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
                <img src={screenshots[activeIndex].image} alt={screenshots[activeIndex].alt} className="screenshot-image" />
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