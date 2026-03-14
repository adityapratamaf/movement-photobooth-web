import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems, brandMark, createWhatsAppLink, siteMeta } from '../data/siteContent';
import { ArrowRightIcon, CameraIcon, CloseIcon, MenuIcon } from './icons';

function navLinkClass({ isActive }) {
  return isActive ? 'nav-link active' : 'nav-link';
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link to="/" className="brand-lockup" onClick={() => setIsOpen(false)}>
          <img src={brandMark} alt="Logo Movement Photobooth" className="brand-mark" />
          <div>
            <strong>{siteMeta.businessName}</strong>
            <span>Photobooth event service</span>
          </div>
        </Link>

        <nav className="desktop-nav" aria-label="Navigasi utama">
          {navItems.filter((item) => item.to !== '/photobooth-online').map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="desktop-cta nav-action-group">
          <NavLink to="/photobooth-online" className={({ isActive }) => `icon-cta ${isActive ? 'active' : ''}`} aria-label="Buka Photobooth Online">
            <CameraIcon className="button-icon" />
            <span>Online Booth</span>
          </NavLink>
          <a className="button button-primary" href={createWhatsAppLink()} target="_blank" rel="noreferrer">
            Chat WhatsApp
            <ArrowRightIcon className="button-icon" />
          </a>
        </div>

        <button
          type="button"
          className="menu-button"
          aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <CloseIcon className="menu-icon" /> : <MenuIcon className="menu-icon" />}
        </button>
      </div>

      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <div className="container mobile-drawer-inner">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass} onClick={() => setIsOpen(false)}>
              {item.to === '/photobooth-online' ? (
                <>
                  <CameraIcon className="inline-icon" />
                  <span>{item.label}</span>
                </>
              ) : (
                item.label
              )}
            </NavLink>
          ))}
          <a className="button button-primary mobile-cta" href={createWhatsAppLink()} target="_blank" rel="noreferrer">
            Minta penawaran cepat
            <ArrowRightIcon className="button-icon" />
          </a>
        </div>
      </div>
    </header>
  );
}
