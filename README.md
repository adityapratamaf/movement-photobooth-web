# Movement Photobooth

Landing page React + Vite untuk usaha vendor photobooth event service **Movement Photobooth**.

## Yang sudah dibuat

- React + Vite + React Router
- Multi-page: Beranda, Layanan, Detail Layanan, Portofolio, Nilai Kami, Kontak
- Bahasa Indonesia yang santai, persuasif, dan tidak terlalu panjang
- Hero carousel di bagian atas beranda
- Produk utama: **Fotobooth Print** dan **Videobooth 360**
- Portofolio visual, core value layanan, our client, testimonial client, CTA WhatsApp, dan footer lengkap
- Tema warna dominan **oren `#ffc544`** dan **biru `#00b8c8`** dengan nuansa simple elegan
- Layout responsive untuk web, tablet, dan mobile

## Cara jalanin

```bash
npm install
npm run dev
```

Kalau mau build production:

```bash
npm run build
npm run preview
```

## Struktur file yang paling penting

- `src/data/siteContent.js`
  Semua konten utama ada di sini: nama usaha, nomor WA, alamat, layanan, testimonial, client, dan portofolio.
- `src/pages/`
  Isi halaman per route.
- `src/components/`
  Komponen reusable seperti navbar, footer, hero carousel, card, dan form.
- `src/styles.css`
  Semua styling utama, termasuk responsive layout.

## Kalau kamu baru belajar React, lihat ini dulu

- `src/App.jsx` → routing halaman
- `src/pages/HomePage.jsx` → susunan landing page utama
- `src/components/HeroCarousel.jsx` → contoh state sederhana untuk carousel
- `src/components/InquiryForm.jsx` → contoh form dengan `useState` dan `useMemo`
- `src/data/siteContent.js` → pola data-driven supaya konten gampang diganti

## Yang sebaiknya kamu ganti dulu sebelum live

1. Nomor WhatsApp, alamat, email, dan sosial media di `contactInfo`
2. Testimoni dummy menjadi testimoni asli klien
3. Logo client placeholder menjadi logo client asli
4. Visual portofolio placeholder menjadi foto event asli
5. Detail paket sesuai layanan asli dan harga kamu
