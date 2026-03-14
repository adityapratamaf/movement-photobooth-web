import { useMemo, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import PortfolioGrid from '../components/PortfolioGrid';
import { createWhatsAppLink, portfolioItems } from '../data/siteContent';

const categories = ['Semua', ...new Set(portfolioItems.map((item) => item.category))];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'Semua') return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const featuredItems = portfolioItems.slice(0, 3);

  return (
    <>
      <section className="section section-top-pad portfolio-top-section">
        <div className="container portfolio-top-shell">
          <div className="section-title">
            <span className="eyebrow">Portofolio</span>
            <h1>Supaya calon klien nggak cuma ngebayangin, tapi langsung kebaca vibe-nya.</h1>
            <p>Setiap event punya mood yang beda. Makanya layout halaman ini juga kami bikin lebih visual dan lebih ringan dilihat.</p>
          </div>
          <div className="portfolio-feature-strip">
            {featuredItems.map((item) => (
              <article key={item.title} className="portfolio-top-card">
                <img src={item.image} alt={item.title} />
                <div>
                  <span className="pill light">{item.category}</span>
                  <h3>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
          <a className="button button-secondary" href={createWhatsAppLink()} target="_blank" rel="noreferrer">
            Tanya mood yang paling cocok
          </a>
        </div>
      </section>

      <section className="section section-bottom-spacer">
        <div className="container">
          <SectionTitle
            eyebrow="Filter event"
            title="Cari vibe yang paling dekat dengan acaramu"
            description="Klik kategori yang kamu mau, lalu lihat contoh visualnya."
          />
          <div className="filter-row" role="tablist" aria-label="Filter portofolio">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-pill ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <PortfolioGrid items={filteredItems} />
        </div>
      </section>
    </>
  );
}
