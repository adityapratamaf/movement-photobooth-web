import { Link } from 'react-router-dom';
import HeroCarousel from '../components/HeroCarousel';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import ValueGrid from '../components/ValueGrid';
import PortfolioGrid from '../components/PortfolioGrid';
import ClientLogoCloud from '../components/ClientLogoCloud';
import TestimonialGrid from '../components/TestimonialGrid';
import {
  clients,
  coreValues,
  createWhatsAppLink,
  heroCarouselSlides,
  heroPoints,
  homeHighlights,
  portfolioItems,
  services,
  testimonials,
} from '../data/siteContent';
import { ArrowRightIcon, SparkIcon } from '../components/icons';

export default function HomePage() {
  return (
    <>
      <HeroCarousel slides={heroCarouselSlides} />

      <PageHero
        eyebrow="Movement Photobooth"
        title="Booth yang bikin event terasa lebih hidup, tapi tetap rapi dijalanin."
        description="Dari fotobooth print sampai videobooth 360, kami bantu bikin tamu senang mampir dan PIC acara tetap tenang."
        actions={[
          { label: 'Chat WhatsApp', href: createWhatsAppLink(), external: true },
          { label: 'Lihat portofolio', to: '/portofolio', variant: 'secondary' },
        ]}
        stats={heroPoints}
        withTopPad={false}
      >
        <div className="hero-spotlight">
          <span className="pill gold">Simple. Elegan. Nggak ribet.</span>
          <h2>Masuk booth, senyum, jadi momen.</h2>
          <p>Flow gampang, visual enak dilihat, dan hasilnya layak dibagiin.</p>
          <ul className="check-list">
            {homeHighlights.map((item) => (
              <li key={item}>
                <SparkIcon className="inline-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </PageHero>

      <section className="section section-soft compact-section">
        <div className="container announcement-strip">
          <span>Wedding</span>
          <span>Corporate</span>
          <span>Brand Activation</span>
          <span>Campus Event</span>
          <span>Community Fest</span>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Layanan utama"
            title="Tinggal pilih vibe booth yang paling pas"
            description="Mau yang hangat dan gampang diikuti, atau yang heboh dan siap jadi pusat perhatian."
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
            eyebrow="Portofolio"
            title="Biar kamu cepat kebayang hasilnya"
            description="Beberapa mood event yang paling sering dipilih klien kami."
          />
          <PortfolioGrid items={portfolioItems.slice(0, 4)} />
          <div className="section-cta-row">
            <Link className="button button-secondary" to="/portofolio">
              Lihat semua portofolio
              <ArrowRightIcon className="button-icon" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Core value"
            title="Yang kami jaga di tiap event"
            description="Bukan cuma hasil yang cakep, tapi prosesnya juga enak dijalanin."
          />
          <ValueGrid values={coreValues.slice(0, 4)} />
          <div className="split-banner">
            <div>
              <h3>Mau lihat value lengkapnya?</h3>
              <p>Buka halaman nilai kami buat lihat cara kerja dan flow kami.</p>
            </div>
            <Link className="text-link bold" to="/nilai-kami">
              Buka halaman nilai kami
              <ArrowRightIcon className="inline-icon" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionTitle
            eyebrow="Our client"
            title="Dipilih brand, tim kantor, sampai komunitas"
            description="Karena mereka butuh vendor yang enak diajak bareng dan hasilnya tetap niat."
          />
          <ClientLogoCloud clients={clients} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Testimonial client"
            title="Tamu happy, PIC juga lega"
            description="Beberapa hal yang paling sering kami dengar setelah event selesai."
          />
          <TestimonialGrid testimonials={testimonials} />
        </div>
      </section>

      <section className="section section-bottom-spacer">
        <div className="container cta-banner">
          <div>
            <span className="eyebrow">Siap bikin event lebih rame?</span>
            <h2>Mau mulai dari fotobooth print atau gas sekalian 360?</h2>
            <p>Ceritain acaranya dulu. Nanti kami bantu arahin opsi yang paling pas.</p>
          </div>
          <a className="button button-primary" href={createWhatsAppLink()} target="_blank" rel="noreferrer">
            Konsultasi via WhatsApp
            <ArrowRightIcon className="button-icon" />
          </a>
        </div>
      </section>
    </>
  );
}
