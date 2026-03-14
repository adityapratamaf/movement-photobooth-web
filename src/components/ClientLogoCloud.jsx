export default function ClientLogoCloud({ clients }) {
  return (
    <div className="client-grid">
      {clients.map((client) => (
        <article key={client.name} className="client-card">
          <img src={client.logo} alt={`Logo ${client.name}`} className="client-logo" />
        </article>
      ))}
    </div>
  );
}
