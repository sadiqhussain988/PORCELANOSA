import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'AI Trainer', to: '/aitralior' }, // Fixed typo from 'aitralior' to 'aitrainer'
    { name: 'Pricing', to: '/pricing' },
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or pressing ESC
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(e.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscKey);
      // Prevent body scrolling when menu is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [window.location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 py-3 shadow-lg'
            : 'bg-black/90 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 z-50">
            <div className="bg-indigo-600 p-1.5 rounded-lg shadow-lg shadow-indigo-500/20">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">
              AURA<span className="text-indigo-500">FIT</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-white underline underline-offset-4 decoration-indigo-500'
                      : 'text-zinc-400 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/pricing"
              className="bg-white text-zinc-950 px-5 py-2 rounded-full text-sm font-bold hover:bg-zinc-200 transition-all active:scale-95"
            >
              Get Started
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden">
            <button
              ref={toggleButtonRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
              aria-expanded={isMobileMenuOpen}
              className="text-zinc-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-zinc-800"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-4'
        }`}
        style={{ top: isScrolled ? '60px' : '72px' }} // Adjust based on navbar height
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div
          className={`absolute top-0 left-0 right-0 bg-zinc-900 border-b border-zinc-800 shadow-xl transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link, idx) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium transition-all duration-200 transform ${
                    isActive
                      ? 'text-white border-l-4 border-indigo-500 pl-4 -ml-6'
                      : 'text-zinc-400 hover:text-white hover:pl-4 hover:-ml-6 hover:border-l-4 hover:border-zinc-700'
                  }`
                }
                style={{
                  transitionDelay: `${idx * 75}ms`,
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                }}
              >
                {link.name}
              </NavLink>
            ))}

            <div className="pt-4 mt-2 border-t border-zinc-800">
              <Link
                to="/pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full bg-indigo-600 text-white px-5 py-4 rounded-xl font-bold text-center hover:bg-indigo-700 transition-all active:scale-95 shadow-lg shadow-indigo-500/20"
                style={{
                  transitionDelay: `${navLinks.length * 75}ms`,
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;