import { Link } from 'react-router-dom';
import { createWhatsAppLink } from '../data/siteContent';
import { ArrowRightIcon } from '../components/icons';

export default function NotFoundPage() {
  return (
    <section className="section section-top-pad section-bottom-spacer">
      <div className="container not-found-shell">
        <span className="eyebrow">Halaman nggak ketemu</span>
        <h1>Kayaknya kamu nyasar sedikit.</h1>
        <p>Tenang, kamu bisa balik ke beranda atau langsung chat admin dari sini.</p>
        <div className="hero-actions">
          <Link className="button button-secondary" to="/">
            Balik ke beranda
          </Link>
          <a className="button button-primary" href={createWhatsAppLink()} target="_blank" rel="noreferrer">
            Chat admin
            <ArrowRightIcon className="button-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
