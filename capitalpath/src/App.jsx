import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import IntakePage from './pages/IntakePage';
import UploadPage from './pages/UploadPage';
import AssessmentPage from './pages/AssessmentPage';
import LendersPage from './pages/LendersPage';
import DashboardPage from './pages/DashboardPage';
import OGImagePage from './pages/OGImagePage';

function Layout() {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';
  const isOG = location.pathname === '/og';

  if (isOG) return <OGImagePage />;

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/intake" element={<IntakePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/assessment" element={<AssessmentPage />} />
          <Route path="/lenders" element={<LendersPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/og" element={<OGImagePage />} />
        </Routes>
      </main>
      {!isDashboard && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
