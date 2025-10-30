import { useState } from 'react';
import '../styles/FAQ.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How does ShelfSmart help reduce food waste?',
      answer: 'ShelfSmart tracks your food expiration dates with a color-coded system (Green for 7+ days, Yellow for 3-6 days, Red for expired) and sends automatic notifications 7 days before and on expiration date. It suggests recipes based on items that are expiring soon, helping you reduce household food waste by up to 25% and save over $1,500 per year.'
    },
    {
      question: 'How does the barcode scanner work?',
      answer: 'Our lightning-fast barcode scanner supports EAN13 and UPC barcodes. Simply point your camera at any product barcode to instantly retrieve product information including name, brand, and ingredients from our comprehensive global database. You can also manually add fresh produce and homemade items.'
    },
    {
      question: 'What are the color-coded expiration alerts?',
      answer: 'ShelfSmart uses an intuitive visual system: Green means fresh (7+ days remaining), Yellow means use soon (3-6 days remaining), and Red means expiring today or already expired. This makes it easy to see at a glance what needs to be used first, helping you plan meals efficiently.'
    },
    {
      question: 'Does ShelfSmart manage food allergies and dietary restrictions?',
      answer: 'Yes! Set your allergies once and stay protected. ShelfSmart supports 12 common food intolerances including dairy, egg, gluten, grain, peanut, seafood, sesame, shellfish, soy, sulfite, tree nut, and wheat. All recipe recommendations are automatically filtered for your safety. Ideal for families with multiple dietary needs.'
    },
    {
      question: 'Can I use Sign in with Apple?',
      answer: 'Absolutely! ShelfSmart supports Sign in with Apple, so you can sign in securely without providing an email address. Your privacy is protected, and authentication is handled entirely by Apple. You can also delete your account and data anytime directly from the app.'
    },
    {
      question: 'Is ShelfSmart free to use?',
      answer: 'Yes! ShelfSmart is completely free with no hidden costs, subscriptions, or in-app purchases. All features including barcode scanning, expiry tracking, color-coded alerts, notifications, recipe discovery with filtering, allergy management, and iCloud sync are available at no charge.'
    },
    {
      question: 'How do recipe filters and "Surprise Me" work?',
      answer: 'Discover thousands of recipes based on your pantry items. Filter by cuisine (Italian, Asian, Mexican, Mediterranean), diet (Vegan, Vegetarian, Keto, Paleo, Whole30), and meal type (Breakfast, Lunch, Dinner, Snacks, Desserts). Use "Surprise Me" for random recipe inspiration. All recipes include ingredients, step-by-step instructions, prep time, servings, and health scores.'
    },
    {
      question: 'Can I sync across multiple devices?',
      answer: 'Yes! ShelfSmart uses seamless iCloud Sync to automatically keep your pantry inventory up-to-date across all your iPhone and iPad devices. Smart notifications sync across all devices too. Your data stays private and secure in your iCloud, and offline mode is available for viewing products and recipes.'
    },
    {
      question: 'What types of notifications does ShelfSmart send?',
      answer: 'ShelfSmart sends automatic push notifications 7 days before food expires and on the expiration date itself. Notifications sync across all your devices, so you stay informed whether you\'re on your iPhone or iPad. Never miss an expiring item again!'
    },
    {
      question: 'Is my data private and secure?',
      answer: 'Your kitchen, your data, your privacy. Sign in with Apple is supported with no email required. All data is stored securely in your personal iCloud account—we never have access to it. There\'s no advertising or data selling. ShelfSmart is fully GDPR compliant, and you can delete your account and data anytime.'
    },
    {
      question: 'What iOS version do I need?',
      answer: 'ShelfSmart requires iOS 14.0 or later. It\'s built entirely in SwiftUI with full Dark Mode support, smooth animations, and haptic feedback. The app is optimized for all iPhone sizes and follows Apple Human Interface Guidelines for a native iOS experience.'
    },
    {
      question: 'Can I track different storage locations?',
      answer: 'Yes! ShelfSmart allows you to organize items by storage location. Track items in your pantry, fridge, and freezer separately. This helps you quickly find items and efficiently manage different storage areas in your kitchen.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq section" id="faq">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-description">
            Everything you need to know about ShelfSmart
          </p>
        </div>

        {/* FAQ List */}
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="faq-question-text">{faq.question}</span>
                <svg
                  className="faq-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div
                id={`faq-answer-${index}`}
                className="faq-answer"
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="faq-cta">
          <p>Still have questions?</p>
          <a href="mailto:shelfsmartapp@gmail.com" className="btn btn-secondary">
            Contact Support
          </a>
        </div>
      </div>

      {/* FAQ Schema Markup for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>
    </section>
  );
}
