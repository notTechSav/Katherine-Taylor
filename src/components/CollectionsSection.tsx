import React from 'react';

const COLLECTIONS = [
  {
    title: 'The Morning Ritual',
    description:
      'Featherweight layers and relaxed tailoring for a deliberately unhurried start. Soft oatmeal, ash, and porcelain hues set a serene tone.',
    cta: 'Shop Ritual Capsule',
    href: '/collections/morning-ritual',
  },
  {
    title: 'The Gallery Afternoon',
    description:
      'Studio jackets, column skirts, and fluid trousers with quiet structure. Designed to move effortlessly through luminous spaces.',
    cta: 'Explore Gallery Looks',
    href: '/collections/gallery-afternoon',
  },
  {
    title: 'The Evening Reverie',
    description:
      'Sculpted silhouettes and luminous silks paired with understated adornment. Ease and presence in equal measure.',
    cta: 'View Evening Edit',
    href: '/collections/evening-reverie',
  },
];

const CollectionsSection: React.FC = () => {
  return (
    <section id="collections" className="px-6 py-24 md:py-32 lg:py-40">
      <div className="mx-auto flex max-w-luxury flex-col gap-16">
        <header className="flex flex-col gap-6 text-left md:text-center">
          <span className="text-xs font-light uppercase tracking-uppercase text-gray-500">Collections</span>
          <h2 className="text-4xl font-extralight tracking-display text-luxury-black md:text-5xl">
            Elevated staples for every quiet moment
          </h2>
          <p className="text-lg font-light text-gray-700 md:mx-auto">
            Curated capsules compose a modular wardrobe. Each piece layers with the next to create a balanced and adaptable edit, grounded in tactile natural fibers.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 lg:gap-16">
          {COLLECTIONS.map((collection) => (
            <article
              key={collection.title}
              className="flex h-full flex-col gap-8 rounded-3xl border border-gray-100 bg-luxury-white p-8 shadow-luxury-sm transition-all duration-luxury-fast ease-luxury-in hover:shadow-luxury-lg md:p-10 lg:p-12"
            >
              <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-100" />
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-extralight tracking-display text-luxury-black">
                  {collection.title}
                </h3>
                <p className="text-base font-light text-gray-700">
                  {collection.description}
                </p>
                <a
                  href={collection.href}
                  className="inline-flex items-center gap-2 text-sm font-light uppercase tracking-uppercase text-gray-900 transition-all duration-luxury-fast ease-luxury-in hover:opacity-60"
                >
                  {collection.cta}
                  <span aria-hidden="true" className="text-gray-500">&rarr;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
