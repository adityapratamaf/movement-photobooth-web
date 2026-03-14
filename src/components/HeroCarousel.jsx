import { useEffect, useState } from 'react';
import { ArrowRightIcon } from './icons';

function formatSlideNumber(number) {
  return String(number).padStart(2, '0');
}

export default function HeroCarousel({ slides = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (slides.length <= 1 || isPaused) return undefined;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(intervalId);
  }, [isPaused, slides.length]);

  if (!slides.length) {
    return null;
  }

  const activeSlide = slides[activeIndex];

  const showPreviousSlide = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + slides.length) % slides.length);
  };

  const showNextSlide = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
  };

  return (
    <section className="hero-carousel-section section-top-pad">
      <div className="container">
        <div
          className="hero-carousel-shell"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="hero-carousel-slides" aria-live="polite">
            {slides.map((slide, index) => (
              <article
                key={slide.title}
                className={`hero-carousel-slide ${index === activeIndex ? 'active' : ''}`}
                aria-hidden={index === activeIndex ? 'false' : 'true'}
              >
                <img className="hero-carousel-image" src={slide.image} alt={slide.alt || slide.title} />
              </article>
            ))}
          </div>

          <div className="hero-carousel-overlay" />

          <div className="hero-carousel-content">
            <div className="hero-carousel-headline-row">
              <span className="pill gold">Portofolio pilihan</span>
              <span className="hero-carousel-counter">
                {formatSlideNumber(activeIndex + 1)}/{formatSlideNumber(slides.length)}
              </span>
            </div>

            <div className="hero-carousel-copy">
              <span className="pill outline dark">{activeSlide.category}</span>
              <h2>{activeSlide.title}</h2>
              <p>{activeSlide.description}</p>
            </div>

            <div className="hero-carousel-controls">
              <div className="hero-carousel-meta-row">
                <span>{activeSlide.service}</span>
                <span>{activeSlide.highlight}</span>
              </div>

              <div className="hero-carousel-nav-shell">
                <div className="hero-carousel-dots" role="tablist" aria-label="Pilih slide hero">
                  {slides.map((slide, index) => (
                    <button
                      key={slide.title}
                      type="button"
                      className={`hero-carousel-dot ${index === activeIndex ? 'active' : ''}`}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Tampilkan slide ${index + 1}: ${slide.title}`}
                      aria-selected={index === activeIndex}
                      role="tab"
                    />
                  ))}
                </div>

                <div className="hero-carousel-nav">
                  <button
                    type="button"
                    className="hero-carousel-button is-prev"
                    onClick={showPreviousSlide}
                    aria-label="Slide sebelumnya"
                  >
                    <ArrowRightIcon className="hero-carousel-button-icon" />
                  </button>
                  <button type="button" className="hero-carousel-button" onClick={showNextSlide} aria-label="Slide berikutnya">
                    <ArrowRightIcon className="hero-carousel-button-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
