import React from 'react';

const NAV_ITEMS = [
  { label: 'Collections', href: '#collections' },
  { label: 'Featured', href: '#featured' },
  { label: 'Gifts', href: '#gifts' },
  { label: 'Journal', href: '#journal' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isCondensed, setIsCondensed] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsCondensed(window.scrollY > 8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur transition-all duration-luxury-fast ease-luxury-in ${
        isCondensed
          ? 'bg-luxury-white/95 border-b border-gray-100 shadow-luxury-sm'
          : 'bg-luxury-white/80 border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-luxury items-center justify-between px-6">
        <a href="#hero" className="flex items-center gap-3 text-gray-900 transition-all duration-luxury-fast ease-luxury-in hover:opacity-60">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200">
            <span className="h-3 w-3 rounded-full bg-gray-400" />
          </span>
          <span className="text-sm font-light uppercase tracking-uppercase">Katherine Taylor</span>
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-light uppercase tracking-uppercase text-gray-900 transition-all duration-luxury-fast ease-luxury-in hover:opacity-60"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-900 transition-all duration-luxury-fast ease-luxury-in hover:border-gray-300 hover:opacity-60"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <circle cx="11" cy="11" r="6" />
              <line x1="20" y1="20" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Cart"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-900 transition-all duration-luxury-fast ease-luxury-in hover:border-gray-300 hover:opacity-60"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <path d="M6 6h15l-1.5 9h-12z" />
              <circle cx="9" cy="19" r="1" />
              <circle cx="18" cy="19" r="1" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
