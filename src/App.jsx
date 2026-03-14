import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import PortfolioPage from './pages/PortfolioPage';
import ValuesPage from './pages/ValuesPage';
import ContactPage from './pages/ContactPage';
import PhotoBoothOnlinePage from './pages/PhotoBoothOnlinePage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="layanan" element={<ServicesPage />} />
        <Route path="layanan/:slug" element={<ServiceDetailPage />} />
        <Route path="portofolio" element={<PortfolioPage />} />
        <Route path="nilai-kami" element={<ValuesPage />} />
        <Route path="kontak" element={<ContactPage />} />
        <Route path="photobooth-online" element={<PhotoBoothOnlinePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
