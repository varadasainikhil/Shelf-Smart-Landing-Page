import { useState } from 'react';
import '../styles/FAQ.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How does Shelf Smart help reduce food waste?',
      answer: 'Shelf Smart tracks your grocery expiration dates and sends you timely notifications before food spoils. It also suggests recipes based on items that are expiring soon, helping you use ingredients before they go to waste. Our color-coded system makes it easy to see what needs to be used first.'
    },
    {
      question: 'Is Shelf Smart free to use?',
      answer: 'Yes! Shelf Smart is completely free with no hidden costs, subscriptions, or in-app purchases. All features including barcode scanning, expiry tracking, notifications, recipe suggestions, and iCloud sync are available at no charge.'
    },
    {
      question: 'Does Shelf Smart work offline?',
      answer: 'Yes, Shelf Smart works offline. All your grocery data is stored locally on your device, so you can access your inventory, add items, and view recipes even without an internet connection. iCloud sync requires connectivity but your core data remains accessible offline.'
    },
    {
      question: 'Can I sync my grocery list across multiple devices?',
      answer: 'Absolutely! Shelf Smart uses iCloud to automatically sync your grocery inventory across all your iOS devices (iPhone and iPad). Add an item on your iPhone, and it instantly appears on your iPad. Your account and preferences are always in sync.'
    },
    {
      question: 'How do I add groceries to Shelf Smart?',
      answer: 'There are two easy ways to add groceries: 1) Scan the product barcode for instant entry with auto-filled details, or 2) Manually enter the product name, category, and expiration date. Both methods take just seconds and help you build your digital pantry quickly.'
    },
    {
      question: 'What types of notifications does Shelf Smart send?',
      answer: 'Shelf Smart sends customizable push notifications at intervals you choose (1 day, 3 days, 1 week before expiration). You can adjust notification timing in settings to match your shopping and cooking habits. Never miss an expiring item again!'
    },
    {
      question: 'Does Shelf Smart suggest recipes based on my ingredients?',
      answer: 'Yes! Shelf Smart\'s intelligent recipe engine recommends meals based on ingredients you have, prioritizing items nearing expiration. You can also search our extensive recipe database with filters for dietary restrictions (vegan, gluten-free), cuisine types, allergens, and meal types.'
    },
    {
      question: 'What iOS version do I need to run Shelf Smart?',
      answer: 'Shelf Smart requires iOS 14.0 or later. It\'s optimized for all iPhone and iPad models running this version, ensuring smooth performance and access to all features including barcode scanning, notifications, and iCloud sync.'
    },
    {
      question: 'Is my data private and secure?',
      answer: 'Your privacy is our priority. All your grocery data is stored locally on your device and synced via your personal iCloud account—we never have access to it. Authentication is handled securely by Google Firebase. We don\'t sell or share your personal information. Read our Privacy Policy for complete details.'
    },
    {
      question: 'Can I track different storage locations (pantry, fridge, freezer)?',
      answer: 'Yes! Shelf Smart allows you to categorize items by storage location and type. You can organize groceries by pantry, refrigerator, freezer, or create custom categories. This helps you quickly find items and manage different storage areas efficiently.'
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
            Everything you need to know about Shelf Smart
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
