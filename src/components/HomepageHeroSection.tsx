import React from 'react';

const HomepageHeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center gap-12 px-6 py-24 text-center md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-luxury">
        <span className="text-xs font-light uppercase tracking-uppercase text-gray-500">Introducing the Atelier Edit</span>
        <h1 className="mt-6 text-6xl font-extralight tracking-display text-luxury-black leading-[1.1] md:text-7xl lg:text-8xl">
          Quiet Luxury, Crafted for the Everyday
        </h1>
        <p className="mx-auto mt-8 text-xl font-light text-gray-700 md:text-2xl">
          Discover an intentional wardrobe of serene silhouettes, softened hues, and impeccable tailoring designed to accompany each considered moment of your day.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#collections"
            className="inline-flex items-center justify-center rounded-full bg-luxury-black px-12 py-5 text-sm font-light uppercase tracking-widest text-luxury-white transition-all duration-luxury-fast ease-luxury-in hover:opacity-80"
          >
            Explore Collections
          </a>
          <a
            href="#journal"
            className="inline-flex items-center justify-center rounded-full border border-gray-200 px-12 py-5 text-sm font-light uppercase tracking-uppercase text-gray-900 transition-all duration-luxury-fast ease-luxury-in hover:border-gray-300 hover:opacity-60"
          >
            View Journal
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomepageHeroSection;
