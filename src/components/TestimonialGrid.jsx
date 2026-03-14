export default function TestimonialGrid({ testimonials }) {
  return (
    <div className="testimonial-grid">
      {testimonials.map((item) => (
        <article key={`${item.name}-${item.company}`} className="testimonial-card">
          <span className="quote-mark">“</span>
          <p>{item.quote}</p>
          <div className="testimonial-author">
            <strong>{item.name}</strong>
            <span>
              {item.role} · {item.company}
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
