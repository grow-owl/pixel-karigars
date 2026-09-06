import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FaqPage from './pages/FaqPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      {/* Handles window top scrolling and hash smooth scroll across routes */}
      <ScrollToTop />

      <Routes>
        {/* Main Landing Page */}
        <Route path="/" element={<HomePage />} />

        {/* Dedicated Standalone FAQ Page */}
        <Route path="/faq" element={<FaqPage />} />

        {/* Alternate FAQs URL alias redirect */}
        <Route path="/faqs" element={<Navigate to="/faq" replace />} />

        {/* Catch-all fallback redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

