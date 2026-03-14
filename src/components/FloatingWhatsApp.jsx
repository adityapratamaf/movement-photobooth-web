import { createWhatsAppLink } from '../data/siteContent';
import { WhatsAppIcon } from './icons';

export default function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={createWhatsAppLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Hubungi Movement Photobooth via WhatsApp"
    >
      <WhatsAppIcon className="floating-whatsapp-icon" />
      <span>Chat admin</span>
    </a>
  );
}
