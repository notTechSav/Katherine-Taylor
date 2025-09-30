import React from 'react';

const FAQ_ITEMS = [
  {
    question: 'Do you offer bespoke tailoring?',
    answer:
      'Yes. Each bespoke engagement begins with an atelier consultation where we capture measurements, discuss fabric narratives, and map your lifestyle needs. Lead time averages six weeks.',
  },
  {
    question: 'Can I visit the studio?',
    answer:
      'Studio visits are available by appointment. We recommend reserving a time at least one week in advance to ensure a dedicated stylist is available to host you.',
  },
  {
    question: 'How are garments cared for?',
    answer:
      'We provide a custom care dossier with every purchase, detailing recommended cleaning methods and storage rituals to preserve each garment’s integrity.',
  },
];

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="bg-luxury-white px-6 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-luxury">
        <div className="mb-16 flex flex-col gap-6 text-left md:text-center">
          <span className="text-xs font-light uppercase tracking-uppercase text-gray-500">FAQ</span>
          <h2 className="text-4xl font-extralight tracking-display text-luxury-black md:text-5xl">
            Considered questions, thoughtful answers
          </h2>
          <p className="text-lg font-light text-gray-700 md:mx-auto">
            The details that define a Katherine Taylor experience—crafted to ensure each interaction feels personal and exceptionally cared for.
          </p>
        </div>
        <dl className="space-y-6">
          {FAQ_ITEMS.map((item) => (
            <div
              key={item.question}
              className="rounded-3xl border border-gray-100 bg-luxury-white p-8 shadow-luxury-sm transition-all duration-luxury-fast ease-luxury-in hover:shadow-luxury-lg md:p-10 lg:p-12"
            >
              <dt className="text-xl font-extralight tracking-display text-luxury-black">
                {item.question}
              </dt>
              <dd className="mt-4 text-base font-light text-gray-700">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default FAQSection;
