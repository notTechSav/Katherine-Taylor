import React from 'react';

const ContactInquirySection: React.FC = () => {
  return (
    <section id="contact" className="bg-luxury-white px-6 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-luxury rounded-3xl border border-gray-100 bg-secondary p-8 shadow-luxury-md md:p-10 lg:p-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_1fr] md:gap-12 lg:gap-16">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-light uppercase tracking-uppercase text-gray-500">Contact</span>
            <h2 className="text-4xl font-extralight tracking-display text-luxury-black md:text-5xl">
              Reserve a private appointment
            </h2>
            <p className="text-lg font-light text-gray-700">
              Share your intentions and we will curate a bespoke styling session within the atelier. Expect a response within two business days.
            </p>
            <ul className="space-y-3 text-sm font-light text-gray-600">
              <li>Weekday studio hours: 10am – 6pm</li>
              <li>Saturday appointments by request</li>
              <li>Virtual consultations available worldwide</li>
            </ul>
          </div>
          <form className="grid grid-cols-1 gap-6">
            <label className="flex flex-col gap-2 text-sm font-light uppercase tracking-uppercase text-gray-600">
              Full Name
              <input
                type="text"
                className="rounded-full border border-gray-200 bg-white px-6 py-3 text-base font-light text-gray-900 shadow-luxury-sm transition-all duration-luxury-fast ease-luxury-in focus:border-gray-300 focus:outline-none focus:ring-0"
                placeholder="Your name"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-light uppercase tracking-uppercase text-gray-600">
              Email Address
              <input
                type="email"
                className="rounded-full border border-gray-200 bg-white px-6 py-3 text-base font-light text-gray-900 shadow-luxury-sm transition-all duration-luxury-fast ease-luxury-in focus:border-gray-300 focus:outline-none focus:ring-0"
                placeholder="name@email.com"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-light uppercase tracking-uppercase text-gray-600">
              Appointment Intent
              <textarea
                className="min-h-[140px] rounded-3xl border border-gray-200 bg-white px-6 py-4 text-base font-light text-gray-900 shadow-luxury-sm transition-all duration-luxury-fast ease-luxury-in focus:border-gray-300 focus:outline-none focus:ring-0"
                placeholder="Share details about your desired experience"
              />
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-luxury-black px-12 py-5 text-sm font-light uppercase tracking-uppercase text-luxury-white transition-all duration-luxury-fast ease-luxury-in hover:opacity-80"
            >
              Submit Inquiry
            </button>
            <p className="text-xs font-light uppercase tracking-uppercase text-gray-500">
              We respond personally to each message. Your details remain confidential.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactInquirySection;
