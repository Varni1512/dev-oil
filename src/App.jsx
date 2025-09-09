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



const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
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