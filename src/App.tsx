import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy loading pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const RunningContracts = lazy(() => import('./pages/RunningContracts'));
const PreviousTenders = lazy(() => import('./pages/PreviousTenders'));
const TurnoverTimeline = lazy(() => import('./pages/TurnoverTimeline'));
const ToolsAndEquipments = lazy(() => import('./pages/ToolsAndEquipments'));
const Contact = lazy(() => import('./pages/Contact'));

// Fallback component during lazy loading
const Loader = () => <div>Loading...</div>;

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/running-contracts" element={<RunningContracts />} />
              <Route path="/previous-tenders" element={<PreviousTenders />} />
              <Route path="/turnover-timeline" element={<TurnoverTimeline />} />
              <Route path="/tools-and-equipments" element={<ToolsAndEquipments />} />
              <Route path="/contact" element={<Contact />} />
              {/* Fallback route for 404 */}
              <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
