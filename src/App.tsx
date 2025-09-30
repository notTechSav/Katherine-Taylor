import React from 'react';
import './styles/globals.css';
import Header from './components/Header';
import HomepageHeroSection from './components/HomepageHeroSection';
import CollectionsSection from './components/CollectionsSection';
import FeaturedLooksSection from './components/FeaturedLooksSection';
import GiftsSection from './components/GiftsSection';
import JournalAndRatesSection from './components/JournalAndRatesSection';
import FAQSection from './components/FAQSection';
import ContactInquirySection from './components/ContactInquirySection';

function App() {
  return (
    <div className="min-h-screen bg-luxury-white text-gray-700">
      <Header />
      <main>
        <HomepageHeroSection />
        <CollectionsSection />
        <FeaturedLooksSection />
        <GiftsSection />
        <JournalAndRatesSection />
        <FAQSection />
        <ContactInquirySection />
      </main>
      <footer className="border-t border-gray-100 py-16">
        <div className="mx-auto flex max-w-luxury flex-col gap-4 px-6 text-xs font-light uppercase tracking-uppercase text-gray-500 md:flex-row md:items-center md:justify-between">
          <span>&copy; {new Date().getFullYear()} Katherine Taylor Studio</span>
          <span>Designed for enduring elegance</span>
          <span>Privacy & Ethos</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
