'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/how-we-help', label: 'How We Help' },
    { href: '/resources', label: 'Resources' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1 sm:space-x-2 group">
            <Image
              src="/images/logo.png"
              alt="CyberRecovery Logo"
              width={40}
              height={40}
              className="h-8 w-8 sm:h-10 sm:w-10"
              priority
            />
            <span className="text-lg sm:text-xl md:text-2xl font-bold gradient-text hidden min-[375px]:inline-block">CyberRecovery</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm lg:text-base text-gray-700 hover:text-primary-600 transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <Link
              href="/contact?type=scam"
              className="px-3 py-1.5 lg:px-4 lg:py-2 text-xs lg:text-sm text-primary-600 hover:text-primary-700 transition-colors font-medium whitespace-nowrap"
            >
              Report a Scam
            </Link>
            <Link
              href="/services"
              className="px-4 py-1.5 lg:px-6 lg:py-2 text-xs lg:text-sm bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg hover:from-primary-500 hover:to-secondary-500 transition-all cyber-glow whitespace-nowrap"
            >
              Explore Services
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-gray-700 hover:text-primary-600 transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                ))}
                  <div className="pt-4 space-y-2 border-t border-gray-200">
                  <Link
                    href="/contact?type=scam"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 text-primary-600 hover:text-primary-700 transition-colors font-medium"
                  >
                    Report a Scam
                  </Link>
                  <Link
                    href="/services"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg text-center"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

