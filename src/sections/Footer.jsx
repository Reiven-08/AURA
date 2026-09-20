import './Footer.css'

const footerLinks = [
  { label: 'The Object', href: '#object' },
  { label: 'Sound', href: '#sound' },
  { label: 'Engineered', href: '#engineered' },
  { label: 'Finishes', href: '#finishes' },
  { label: 'Experience', href: '#experience' },
]

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'Contact', href: '#' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__top">
          <a href="#" className="footer__logo">A U R A</a>

          <nav className="footer__nav">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="footer__link t-label">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer__social">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} className="footer__social-link t-label">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copy t-meta">
            &copy; {new Date().getFullYear()} AURA Audio. All rights reserved.
          </span>
          <span className="footer__legal t-meta">
            Privacy &nbsp;&middot;&nbsp; Terms
          </span>
        </div>
      </div>
    </footer>
  )
}
