import React from 'react';

const JOURNAL_ENTRIES = [
  {
    title: 'On Considered Wardrobes',
    excerpt:
      'Exploring the philosophy of refined repetition—how fewer, intentional pieces invite a more mindful approach to daily dressing.',
    date: 'May 12, 2024',
    href: '/journal/considered-wardrobes',
  },
  {
    title: 'Textures of the Atelier',
    excerpt:
      'A sensory tour through our fabric library, highlighting the artisans and processes behind each textile selection.',
    date: 'April 28, 2024',
    href: '/journal/textures-of-the-atelier',
  },
];

const JournalAndRatesSection: React.FC = () => {
  return (
    <section id="journal" className="bg-luxury-white px-6 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-luxury">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr] md:gap-12 lg:gap-16">
          <div className="flex flex-col gap-8">
            <header className="flex flex-col gap-6">
              <span className="text-xs font-light uppercase tracking-uppercase text-gray-500">Journal</span>
              <h2 className="text-4xl font-extralight tracking-display text-luxury-black md:text-5xl">
                Notes from the atelier
              </h2>
              <p className="text-lg font-light text-gray-700">
                Insights into craftsmanship, styling philosophies, and the rituals that shape each collection. Slow moments, thoughtfully archived.
              </p>
            </header>
            <div className="flex flex-col gap-8">
              {JOURNAL_ENTRIES.map((entry) => (
                <article
                  key={entry.title}
                  className="flex flex-col gap-4 rounded-3xl border border-gray-100 bg-luxury-white p-8 shadow-luxury-sm transition-all duration-luxury-fast ease-luxury-in hover:shadow-luxury-lg md:p-10 lg:p-12"
                >
                  <span className="text-xs font-light uppercase tracking-uppercase text-gray-500">{entry.date}</span>
                  <h3 className="text-2xl font-extralight tracking-display text-luxury-black">
                    {entry.title}
                  </h3>
                  <p className="text-base font-light text-gray-700">{entry.excerpt}</p>
                  <a
                    href={entry.href}
                    className="inline-flex items-center gap-2 text-sm font-light uppercase tracking-uppercase text-gray-900 transition-all duration-luxury-fast ease-luxury-in hover:opacity-60"
                  >
                    Continue Reading &rarr;
                  </a>
                </article>
              ))}
            </div>
          </div>
          <aside className="flex flex-col gap-6 rounded-3xl border border-gray-100 bg-luxury-white p-8 shadow-luxury-md transition-all duration-luxury-fast ease-luxury-in hover:shadow-luxury-lg md:p-10 lg:p-12">
            <span className="text-xs font-light uppercase tracking-uppercase text-gray-500">Rates</span>
            <h3 className="text-2xl font-extralight tracking-display text-luxury-black">
              Private styling experiences
            </h3>
            <ul className="flex flex-col gap-4 text-sm font-light text-gray-700">
              <li className="flex items-start justify-between gap-6">
                <span>Atelier Consultation</span>
                <span className="text-gray-500">$450</span>
              </li>
              <li className="flex items-start justify-between gap-6">
                <span>Seasonal Wardrobe Edit</span>
                <span className="text-gray-500">$1,250</span>
              </li>
              <li className="flex items-start justify-between gap-6">
                <span>Destination Styling</span>
                <span className="text-gray-500">$2,400</span>
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-luxury-black px-8 py-4 text-sm font-light uppercase tracking-uppercase text-luxury-white transition-all duration-luxury-fast ease-luxury-in hover:opacity-80"
            >
              Reserve a Consultation
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default JournalAndRatesSection;
