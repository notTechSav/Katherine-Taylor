import React from 'react';

const LOOKS = [
  {
    title: 'Sculpted Collar Coat',
    description:
      'Unstructured double-face wool with hand-finished seams, paired with a silk-organza shell for layered translucence.',
    href: '/looks/sculpted-collar-coat',
  },
  {
    title: 'Gallery Column Dress',
    description:
      'Ankle-length column in washed satin, cinched with a tonal suede cord. Wear with porcelain leather flats for a quiet statement.',
    href: '/looks/gallery-column-dress',
  },
  {
    title: 'Monochrome Lounge Set',
    description:
      'Relaxed cashmere knit and tapered trousers designed for luminous interiors and late-evening journaling.',
    href: '/looks/monochrome-lounge-set',
  },
];

const FeaturedLooksSection: React.FC = () => {
  return (
    <section id="featured" className="bg-luxury-white px-6 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-luxury">
        <div className="mb-16 flex flex-col gap-6 text-left md:text-center">
          <span className="text-xs font-light uppercase tracking-uppercase text-gray-500">Featured Looks</span>
          <h2 className="text-4xl font-extralight tracking-display text-luxury-black md:text-5xl">
            Signature pairings for the season ahead
          </h2>
          <p className="text-lg font-light text-gray-700 md:mx-auto">
            Each ensemble is composed to transition with ease—from studio mornings to candlelit evenings—anchored in refined textures and timeless proportions.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 lg:gap-16">
          {LOOKS.map((look) => (
            <article
              key={look.title}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-secondary shadow-luxury-sm transition-all duration-luxury-fast ease-luxury-in hover:shadow-luxury-lg"
            >
              <div className="aspect-square w-full bg-gray-100" />
              <div className="flex flex-1 flex-col gap-4 p-8 md:p-10 lg:p-12">
                <h3 className="text-2xl font-extralight tracking-display text-luxury-black">
                  {look.title}
                </h3>
                <p className="text-base font-light text-gray-700">
                  {look.description}
                </p>
                <a
                  href={look.href}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-light uppercase tracking-uppercase text-gray-900 transition-all duration-luxury-fast ease-luxury-in hover:opacity-60"
                >
                  View Look &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedLooksSection;
