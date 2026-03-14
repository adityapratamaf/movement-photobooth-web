import SectionTitle from '../components/SectionTitle';
import InquiryForm from '../components/InquiryForm';
import { contactInfo, createWhatsAppLink } from '../data/siteContent';
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from '../components/icons';

const contactCards = [
  {
    title: 'WhatsApp / Telepon',
    value: contactInfo.phoneDisplay,
    href: createWhatsAppLink(),
    icon: PhoneIcon,
  },
  {
    title: 'Email',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    icon: MailIcon,
  },
  {
    title: 'Alamat',
    value: contactInfo.address,
    href: contactInfo.mapsLink,
    icon: MapPinIcon,
  },
  {
    title: 'Jam operasional',
    value: contactInfo.operationalHours,
    href: null,
    icon: ClockIcon,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="section section-top-pad contact-top-section">
        <div className="container contact-top-shell">
          <div className="contact-top-card main">
            <span className="eyebrow">Kontak</span>
            <h1>Kalau event-nya sudah kebayang, sekarang tinggal ngobrol yang enak.</h1>
            <p>Kasih tahu tanggal, venue, atau minimal mood acaranya. Kami bantu arahin booth yang paling pas.</p>
            <a className="button button-primary" href={createWhatsAppLink()} target="_blank" rel="noreferrer">
              Langsung ke WhatsApp
            </a>
          </div>
          {contactCards.map((card) => {
            const Icon = card.icon;
            const content = (
              <article className="contact-top-card small" key={card.title}>
                <Icon className="contact-icon-large" />
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.value}</p>
                </div>
              </article>
            );

            if (!card.href) return content;
            return (
              <a key={card.title} href={card.href} target="_blank" rel="noreferrer">
                {content}
              </a>
            );
          })}
        </div>
      </section>

      <section className="section">
        <div className="container form-shell">
          <div>
            <SectionTitle
              eyebrow="Form kebutuhan event"
              title="Biar chat pertama kamu nggak mulai dari nol"
              description="Isi seperlunya. Nanti form ini langsung bikin draft pesan ke WhatsApp."
            />
          </div>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
