import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Screenshots', href: '#screenshots' },
      { label: 'Download', href: '#download' },
    ],
    support: [
      { label: 'Contact Us', href: 'mailto:shelfsmartapp@gmail.com' },
      { label: 'Report a Bug', href: 'mailto:shelfsmartapp@gmail.com' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy.html' },
      { label: 'Terms of Service', href: '/terms.html' },
    ],
  };

  const handleLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img
                src="/images/app-icon-64.png"
                alt="Shelf Smart App Icon"
                width="32"
                height="32"
                className="footer-logo-icon"
              />
              <span>Shelf Smart</span>
            </div>
            <p className="footer-tagline">
              Your smart kitchen companion.
            </p>
          </div>

          {/* Links Sections */}
          <div className="footer-links">
            {/* Product */}
            <div className="footer-column">
              <h3 className="footer-heading">Product</h3>
              <ul className="footer-list">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="footer-column">
              <h3 className="footer-heading">Support</h3>
              <ul className="footer-list">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="footer-column">
              <h3 className="footer-heading">Legal</h3>
              <ul className="footer-list">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)} target={link.href.startsWith('/') ? '_blank' : undefined} rel={link.href.startsWith('/') ? 'noopener noreferrer' : undefined}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Shelf Smart. All rights reserved.
          </p>
          <p className="footer-made">
            Made with <span className="heart" aria-label="love">♥</span> for a sustainable future
          </p>
        </div>
      </div>
    </footer>
  );
}