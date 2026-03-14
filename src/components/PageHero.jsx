import { Link } from 'react-router-dom';
import { ArrowRightIcon } from './icons';

function HeroAction({ action }) {
  const content = (
    <>
      {action.label}
      {action.icon !== false ? <ArrowRightIcon className="button-icon" /> : null}
    </>
  );

  if (action.href) {
    return (
      <a
        className={`button ${action.variant === 'secondary' ? 'button-secondary' : 'button-primary'}`}
        href={action.href}
        target={action.external ? '_blank' : undefined}
        rel={action.external ? 'noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link className={`button ${action.variant === 'secondary' ? 'button-secondary' : 'button-primary'}`} to={action.to}>
      {content}
    </Link>
  );
}

export default function PageHero({ eyebrow, title, description, actions = [], stats = [], children, withTopPad = true }) {
  return (
    <section className={`hero-section ${withTopPad ? 'section-top-pad' : 'section-tight-top'}`.trim()}>
      <div className="container page-hero">
        <div className="hero-copy">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h1>{title}</h1>
          <p>{description}</p>
          {actions.length ? (
            <div className="hero-actions">
              {actions.map((action) => (
                <HeroAction key={action.label} action={action} />
              ))}
            </div>
          ) : null}
          {stats.length ? (
            <div className="hero-stats">
              {stats.map((stat) => (
                <article key={stat.title} className="stat-card">
                  <strong>{stat.title}</strong>
                  <span>{stat.description}</span>
                </article>
              ))}
            </div>
          ) : null}
        </div>
        <div className="hero-panel">{children}</div>
      </div>
    </section>
  );
}
