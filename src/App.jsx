import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Page Components
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import BlogDetails from './pages/BlogDetails';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermsOfService from './pages/TermsOfService';
import ScrollToTop from './components/ScrollToTop';
import Signup from './pages/Signup';
import Login from './pages/Login';
import TrackOrderPage from './pages/TrackOrderPage';
import BulkOrderPage from './pages/BulkOrderPage';
import WhyWoodPressedOilsPage from './pages/WhyWood';



const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={''} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/order" element={<TrackOrderPage />} />
        <Route path="/bulk-order" element={<BulkOrderPage />} />
        <Route path="/why" element={<WhyWoodPressedOilsPage />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;