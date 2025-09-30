import React from 'react';
import './styles/globals.css';
import HomepageHeroSection from './components/HomepageHeroSection';
import CollectionsSection from './components/CollectionsSection';
import FeaturedLooksSection from './components/FeaturedLooksSection';
import GiftsSection from './components/GiftsSection';
import JournalAndRatesSection from './components/JournalAndRatesSection';
import VideoSection from './components/VideoSection';
import FAQSection from './components/FAQSection';
import ContactInquirySection from './components/ContactInquirySection';

function App() {
  return (
    <div className="App">
      <HomepageHeroSection />
      <CollectionsSection />
      <FeaturedLooksSection />
      <GiftsSection />
      <JournalAndRatesSection />
      <VideoSection />
      <FAQSection />
      <ContactInquirySection />
    </div>
  );
}

export default App;
