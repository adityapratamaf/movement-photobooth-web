import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import { comparisonPoints, createWhatsAppLink, services } from '../data/siteContent';
import { ArrowRightIcon, CameraIcon } from '../components/icons';

export default function ServicesPage() {
  return (
    <>
      <section className="section section-top-pad service-top-section">
        <div className="container service-top-shell">
          <div className="service-top-copy">
            <span className="eyebrow">Layanan</span>
            <h1>Dua produk utama, plus satu cara seru buat coba sendiri.</h1>
            <p>
              Fotobooth print buat yang suka hasil fisik. Videobooth 360 buat yang pengen lebih wah. Dan sekarang ada juga
              photobooth online buat pengalaman cepat langsung dari browser.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={createWhatsAppLink()} target="_blank" rel="noreferrer">
                Tanya paket via WhatsApp
                <ArrowRightIcon className="button-icon" />
              </a>
              <Link className="button button-secondary" to="/photobooth-online">
                Coba photobooth online
                <CameraIcon className="button-icon" />
              </Link>
            </div>
          </div>
          <div className="service-top-stack">
            {services.map((service) => (
              <article key={service.slug} className="service-mini-card">
                <div className="service-mini-head">
                  <span className="service-mini-icon" aria-hidden="true">{service.icon}</span>
                  <span className="pill accent">{service.badge}</span>
                </div>
                <h3>{service.name}</h3>
                <p>{service.teaser}</p>
              </article>
            ))}
            <article className="service-mini-card highlight">
              <div className="service-mini-head">
                <CameraIcon className="inline-icon" />
                <span className="pill gold">Fitur baru</span>
              </div>
              <h3>Photobooth Online</h3>
              <p>Masuk kamera, jepret, jadi frame ala photostrip, lalu langsung download. Tanpa database.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Daftar layanan"
            title="Pilih yang paling nyambung sama kebutuhan acara"
            description="Detail layanan dibuat simpel biar cepat dibaca dan gampang dibandingkan."
          />
          <div className="cards-grid two-columns">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            eyebrow="Perbandingan cepat"
            title="Lihat bedanya dalam sekali scroll"
            description="Biar kamu bisa ambil keputusan lebih cepat tanpa baca terlalu banyak."
          />
          <div className="comparison-shell">
            <div className="comparison-head">
              <div></div>
              <div className="comparison-title-card">
                <h3>Fotobooth Print</h3>
              </div>
              <div className="comparison-title-card accent">
                <h3>Videobooth 360</h3>
              </div>
            </div>
            {comparisonPoints.map((item) => (
              <div key={item.label} className="comparison-row">
                <div className="comparison-label">{item.label}</div>
                <div className="comparison-cell">{item.print}</div>
                <div className="comparison-cell accent">{item.video360}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-bottom-spacer">
        <div className="container cta-banner">
          <div>
            <span className="eyebrow">Masih bingung pilihnya?</span>
            <h2>Chat aja dulu. Kami bantu pilihkan yang paling pas.</h2>
            <p>Tinggal kasih tahu tipe event, venue, dan estimasi tamu.</p>
          </div>
          <a className="button button-primary" href={createWhatsAppLink()} target="_blank" rel="noreferrer">
            Minta saran cepat
            <ArrowRightIcon className="button-icon" />
          </a>
        </div>
      </section>
    </>
  );
}
