import { Link, useParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import PortfolioGrid from '../components/PortfolioGrid';
import { createWhatsAppLink, portfolioItems, serviceMap } from '../data/siteContent';
import { ArrowRightIcon } from '../components/icons';
import NotFoundPage from './NotFoundPage';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = serviceMap[slug];

  if (!service) {
    return <NotFoundPage />;
  }

  const relatedPortfolio = portfolioItems.filter((item) => item.serviceSlug === slug);

  return (
    <>
      <PageHero
        eyebrow={service.badge}
        title={service.name}
        description={service.summary}
        actions={[
          {
            label: 'Tanya layanan ini',
            href: createWhatsAppLink(`Halo Movement Photobooth, aku mau tanya detail ${service.name}.`),
            external: true,
          },
          { label: 'Kembali ke layanan', to: '/layanan', variant: 'secondary' },
        ]}
        stats={service.stats}
      >
        <div className="hero-spotlight compact">
          <span className="pill gold">{service.icon} Detail layanan</span>
          <h2>{service.teaser}</h2>
          <p>{service.momentLine}</p>
          <div className="chip-row">
            {service.idealFor.slice(0, 4).map((item) => (
              <span key={item} className="pill light">
                {item}
              </span>
            ))}
          </div>
        </div>
      </PageHero>

      <section className="section">
        <div className="container two-column-feature">
          <div>
            <SectionTitle
              eyebrow="Yang kamu dapat"
              title="Detail servis yang paling sering ditanya"
              description="Dibuat ringkas biar gampang dibaca calon klien."
            />
          </div>
          <ul className="service-bullets">
            {service.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            eyebrow="Pilihan paket"
            title="Durasi bisa ikut kebutuhan acara"
            description="Mau sesi singkat atau all day, tinggal pilih yang paling pas."
          />
          <div className="cards-grid three-columns">
            {service.packages.map((pkg) => (
              <article key={pkg.name} className="package-card">
                <span className="pill accent">{pkg.name}</span>
                <p className="package-copy">{pkg.description}</p>
                <ul className="service-bullets compact">
                  {pkg.inclusions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-column-feature reverse-gap">
          <div className="content-panel">
            <SectionTitle
              eyebrow="Cocok buat"
              title="Paling sering dipakai untuk event seperti ini"
              description="Biar kamu cepat tahu apakah layanan ini nyambung dengan acaramu."
            />
            <div className="chip-row spacious">
              {service.idealFor.map((item) => (
                <span key={item} className="pill outline dark">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="content-panel">
            <SectionTitle
              eyebrow="Add-on favorit"
              title="Kalau mau naik level sedikit"
              description="Tambahan yang paling sering dipilih klien."
            />
            <div className="chip-row spacious">
              {service.addOns.map((item) => (
                <span key={item} className="pill light">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionTitle
            eyebrow="Portofolio terkait"
            title="Beberapa mood event yang paling cocok"
            description="Lihat visualnya dulu biar makin kebayang."
          />
          <PortfolioGrid items={relatedPortfolio} />
        </div>
      </section>

      <section className="section section-bottom-spacer">
        <div className="container cta-banner">
          <div>
            <span className="eyebrow">Sudah cocok sama {service.name}?</span>
            <h2>Tinggal lanjut ngobrol biar kami bantu arahin paketnya.</h2>
            <p>Kasih tahu tanggal dan venue. Nanti kami bantu rapikan opsinya.</p>
          </div>
          <div className="stacked-actions">
            <a
              className="button button-primary"
              href={createWhatsAppLink(`Halo Movement Photobooth, aku tertarik dengan ${service.name} untuk event aku.`)}
              target="_blank"
              rel="noreferrer"
            >
              Chat admin sekarang
              <ArrowRightIcon className="button-icon" />
            </a>
            <Link className="text-link bold" to="/kontak">
              Atau isi form kebutuhan event
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
