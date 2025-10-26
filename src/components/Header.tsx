import { useState } from 'react';
import { Menu, X, Mail, Phone } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-2">
              <div className="h-10 w-10 bg-slate-800 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl">BM</span>
              </div>
              <span className="font-bold text-xl text-slate-900">BuildMaster</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-slate-900 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-2.5 bg-slate-800 text-white font-medium rounded-md hover:bg-slate-700 transition-colors duration-200"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 hover:text-slate-900 font-medium px-3 py-2 rounded-md hover:bg-slate-50 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-slate-800 text-white font-medium rounded-md hover:bg-slate-700 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Top bar with contact info - desktop only */}
      <div className="hidden lg:block bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center space-x-6 py-2 text-sm text-slate-600">
            <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-slate-900 transition-colors">
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>+1 (234) 567-890</span>
            </a>
            <a href="mailto:sales@buildmaster.com" className="flex items-center space-x-2 hover:text-slate-900 transition-colors">
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>sales@buildmaster.com</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
