import { useMemo, useState } from 'react';
import { createWhatsAppLink, services } from '../data/siteContent';
import { ArrowRightIcon } from './icons';

const initialForm = {
  name: '',
  eventType: '',
  eventDate: '',
  service: services[0].name,
  guestCount: '',
  note: '',
};

export default function InquiryForm() {
  const [form, setForm] = useState(initialForm);

  const whatsappLink = useMemo(() => {
    const message = [
      `Halo Movement Photobooth, aku ${form.name || 'calon klien'}.`,
      form.eventType ? `Jenis acara: ${form.eventType}.` : null,
      form.eventDate ? `Tanggal event: ${form.eventDate}.` : null,
      form.service ? `Layanan yang diminati: ${form.service}.` : null,
      form.guestCount ? `Estimasi tamu: ${form.guestCount} orang.` : null,
      form.note ? `Catatan tambahan: ${form.note}.` : null,
    ]
      .filter(Boolean)
      .join(' ');

    return createWhatsAppLink(message);
  }, [form]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  return (
    <form className="inquiry-form" onSubmit={(event) => event.preventDefault()}>
      <div className="form-grid">
        <label>
          Nama kamu
          <input name="name" value={form.name} onChange={handleChange} placeholder="Contoh: Rara" />
        </label>
        <label>
          Jenis acara
          <input name="eventType" value={form.eventType} onChange={handleChange} placeholder="Wedding, gathering, launching" />
        </label>
        <label>
          Tanggal acara
          <input name="eventDate" type="date" value={form.eventDate} onChange={handleChange} />
        </label>
        <label>
          Layanan yang diminati
          <select name="service" value={form.service} onChange={handleChange}>
            {services.map((service) => (
              <option key={service.slug} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Estimasi tamu
          <input name="guestCount" value={form.guestCount} onChange={handleChange} placeholder="Contoh: 200" />
        </label>
        <label className="field-full">
          Catatan singkat
          <textarea
            name="note"
            value={form.note}
            onChange={handleChange}
            rows="4"
            placeholder="Venue, mood acara, atau request khusus."
          />
        </label>
      </div>
      <a className="button button-primary" href={whatsappLink} target="_blank" rel="noreferrer">
        Kirim ke WhatsApp
        <ArrowRightIcon className="button-icon" />
      </a>
      <p className="form-note">Begitu diklik, detail ini langsung jadi draft pesan ke admin.</p>
    </form>
  );
}
