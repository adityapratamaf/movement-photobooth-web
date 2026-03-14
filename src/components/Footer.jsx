import { Link } from 'react-router-dom';
import {
  brandMark,
  contactInfo,
  navItems,
  socialLinks,
  siteMeta,
  createWhatsAppLink,
} from '../data/siteContent';
import {
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TikTokIcon,
  WhatsAppIcon,
} from './icons';

function SocialIcon({ label, className }) {
  if (label === 'Instagram') return <InstagramIcon className={className} />;
  if (label === 'TikTok') return <TikTokIcon className={className} />;
  return <WhatsAppIcon className={className} />;
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="brand-lockup footer-lockup">
            <img src={brandMark} alt="Logo Movement Photobooth" className="brand-mark" />
            <div>
              <strong>{siteMeta.businessName}</strong>
              <span>{siteMeta.tagLine}</span>
            </div>
          </div>
          <p>Vendor photobooth event service untuk wedding, corporate, activation, dan acara komunitas.</p>
          <a className="button button-gold footer-cta" href={createWhatsAppLink()} target="_blank" rel="noreferrer">
            Chat WhatsApp
          </a>
        </div>

        <div>
          <h3>Navigasi</h3>
          <div className="footer-links">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3>Kontak</h3>
          <div className="footer-contact-list">
            <a href={contactInfo.mapsLink} target="_blank" rel="noreferrer">
              <MapPinIcon className="contact-icon" />
              <span>{contactInfo.address}</span>
            </a>
            <a href={createWhatsAppLink()} target="_blank" rel="noreferrer">
              <PhoneIcon className="contact-icon" />
              <span>{contactInfo.phoneDisplay}</span>
            </a>
            <a href={`mailto:${contactInfo.email}`}>
              <MailIcon className="contact-icon" />
              <span>{contactInfo.email}</span>
            </a>
          </div>
        </div>

        <div>
          <h3>Sosial media</h3>
          <div className="social-row">
            {socialLinks.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
                <SocialIcon label={item.label} className="social-icon" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {siteMeta.businessName}. All rights reserved.</span>
      </div>
    </footer>
  );
}
