import { Link } from 'react-router-dom';

export default function PortfolioGrid({ items }) {
  return (
    <div className="portfolio-grid">
      {items.map((item) => (
        <article key={item.title} className="portfolio-card">
          <div className="portfolio-image-shell">
            <img src={item.image} alt={item.title} className="portfolio-image" />
          </div>
          <div className="portfolio-meta">
            <div className="portfolio-topline">
              <span className="pill light">{item.category}</span>
              <span className="pill outline">{item.service}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.result}</p>
            <Link className="text-link" to={`/layanan/${item.serviceSlug}`}>
              Cocok buat event seperti ini
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
