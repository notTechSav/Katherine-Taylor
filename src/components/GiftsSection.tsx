import React from 'react';

const GIFTS = [
  {
    title: 'Signature Fragrance Discovery',
    description:
      'A trio of soft musk, cedar, and iris accords in reusable glass vials. Curated for layering with the atelier wardrobe.',
    href: '/gifts/fragrance-discovery',
  },
  {
    title: 'Artisan Tea Ceremony Set',
    description:
      'Hand-thrown porcelain cups paired with single-origin ceremonial tea leaves, encouraging slow afternoon rituals.',
    href: '/gifts/tea-ceremony-set',
  },
  {
    title: 'Tailored Gift Experience',
    description:
      'Invite someone into the studio for a private fitting and bespoke styling session with our lead curator.',
    href: '/gifts/tailored-experience',
  },
];

const GiftsSection: React.FC = () => {
  return (
    <section id="gifts" className="bg-luxury-white px-6 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-luxury">
        <div className="mb-16 flex flex-col gap-6 text-left md:text-center">
          <span className="text-xs font-light uppercase tracking-uppercase text-gray-500">Gifting</span>
          <h2 className="text-4xl font-extralight tracking-display text-luxury-black md:text-5xl">
            Moments curated for treasured company
          </h2>
          <p className="text-lg font-light text-gray-700 md:mx-auto">
            Thoughtful gestures that extend the Katherine Taylor experience beyond the atelier—designed to be savored slowly and shared generously.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 lg:gap-16">
          {GIFTS.map((gift) => (
            <article
              key={gift.title}
              className="flex h-full flex-col gap-6 rounded-3xl border border-gray-100 bg-luxury-white p-8 shadow-luxury-sm transition-all duration-luxury-fast ease-luxury-in hover:shadow-luxury-lg md:p-10 lg:p-12"
            >
              <div className="aspect-square w-full overflow-hidden rounded-2xl bg-gray-100" />
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-extralight tracking-display text-luxury-black">
                  {gift.title}
                </h3>
                <p className="text-base font-light text-gray-700">
                  {gift.description}
                </p>
                <a
                  href={gift.href}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-light uppercase tracking-uppercase text-gray-900 transition-all duration-luxury-fast ease-luxury-in hover:opacity-60"
                >
                  Arrange Gift &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftsSection;
