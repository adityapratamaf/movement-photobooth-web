import { Link } from 'react-router-dom';
import { ArrowRightIcon } from './icons';

export default function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-card-head">
        <div className="service-icon" aria-hidden="true">
          {service.icon}
        </div>
        <span className="pill accent">{service.badge}</span>
      </div>
      <h3>{service.name}</h3>
      <p>{service.shortDescription}</p>
      <div className="chip-row">
        {service.quickFacts.map((fact) => (
          <span key={fact} className="pill light">
            {fact}
          </span>
        ))}
      </div>
      <ul className="service-bullets compact">
        {service.highlights.slice(0, 2).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="card-action-row">
        <Link to={`/layanan/${service.slug}`} className="text-link">
          Lihat detail layanan
          <ArrowRightIcon className="inline-icon" />
        </Link>
      </div>
    </article>
  );
}
