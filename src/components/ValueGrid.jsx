export default function ValueGrid({ values }) {
  return (
    <div className="value-grid">
      {values.map((value, index) => (
        <article key={value.title} className="value-card">
          <span className="value-index">0{index + 1}</span>
          <h3>{value.title}</h3>
          <p>{value.description}</p>
        </article>
      ))}
    </div>
  );
}
