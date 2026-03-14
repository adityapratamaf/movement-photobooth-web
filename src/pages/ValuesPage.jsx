import SectionTitle from '../components/SectionTitle';
import ValueGrid from '../components/ValueGrid';
import { coreValues, createWhatsAppLink, processSteps } from '../data/siteContent';

export default function ValuesPage() {
  return (
    <>
      <section className="section section-top-pad values-top-section">
        <div className="container values-top-shell">
          <div className="values-badge-column">
            <span className="eyebrow">Nilai Kami</span>
            <h1>Santai di komunikasi, serius di detail kecil yang bikin event terasa enak.</h1>
            <p>Kami suka hasil yang cakep. Tapi lebih dari itu, kami suka proses yang bikin PIC merasa dibantu.</p>
            <a className="button button-primary" href={createWhatsAppLink()} target="_blank" rel="noreferrer">
              Ngobrol soal event
            </a>
          </div>
          <div className="values-metric-grid">
            <article className="value-metric-card big">
              <strong>6 value inti</strong>
              <span>Yang kami pegang dari chat awal sampai after event.</span>
            </article>
            <article className="value-metric-card">
              <strong>Flow jelas</strong>
              <span>Biar tim event nggak saling nunggu.</span>
            </article>
            <article className="value-metric-card">
              <strong>Visual rapi</strong>
              <span>Nggak numpang lewat di venue.</span>
            </article>
            <article className="value-metric-card accent">
              <strong>Koordinasi enak</strong>
              <span>EO, venue, dan vendor bisa jalan bareng.</span>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Nilai utama"
            title="Enam hal yang kami pegang di setiap event"
            description="Simple, tapi ngaruh besar ke jalannya acara."
          />
          <ValueGrid values={coreValues} />
        </div>
      </section>

      <section className="section section-alt section-bottom-spacer">
        <div className="container">
          <SectionTitle
            eyebrow="Cara kami jalan"
            title="Flow kerja dari chat sampai hari acara"
            description="Biar semua pihak tahu alurnya dan nggak saling nunggu."
          />
          <div className="process-grid">
            {processSteps.map((step) => (
              <article key={step.step} className="process-card">
                <span className="process-step">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
