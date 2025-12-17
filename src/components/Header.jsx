import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Packages', path: '/packages' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' }
  ];

  // FIXED: Removed TypeScript type `(path: string)`
  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const whatsappNumber = '917708286888';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white shadow-md'
      }`}
    >
      <div className="container mx-auto px-4">

        <div className="flex items-center justify-between h-16 md:h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
              <Sparkles size={28} style={{ color: 'var(--primary)' }} />
            </motion.div>

            <div className="text-xl md:text-2xl" style={{ color: 'var(--primary)' }}>
              <span className="hidden sm:inline">Helan Makeup Artistry</span>
              <span className="sm:hidden">Helan</span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative transition-colors duration-200 hover:opacity-80"
                style={{
                  color: isActive(link.path) ? 'var(--primary)' : 'var(--gray)'
                }}
              >
                {link.name}

                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5"
                    style={{ backgroundColor: 'var(--primary)' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* DESKTOP CTA BUTTONS */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">

            {/* Call Now */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg"
              style={{ backgroundColor: 'var(--primary)', color: 'var(--white)' }}
            >
              <Phone size={18} />
              <span>Call Now</span>
            </motion.a>

            {/* Book Now */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/book-now"
                className="px-6 py-2 rounded-lg"
                style={{ backgroundColor: 'var(--black)', color: 'var(--white)' }}
              >
                Book Now
              </Link>
            </motion.div>

          </div>

          {/* MOBILE MENU BUTTON */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg"
            style={{ color: 'var(--primary)' }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

        </div>

        {/* MOBILE NAV */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t"
              style={{ borderColor: 'var(--off-white)' }}
            >
              <nav className="flex flex-col py-4">

                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={closeMenu}
                      className={`px-4 py-3 flex items-center justify-between ${
                        isActive(link.path) ? 'font-semibold' : ''
                      }`}
                      style={{
                        color: isActive(link.path) ? 'var(--primary)' : 'var(--gray)',
                        backgroundColor: isActive(link.path)
                          ? 'var(--off-white)'
                          : 'transparent'
                      }}
                    >
                      {link.name}

                      {isActive(link.path) && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: 'var(--primary)' }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile CTA Buttons */}
                <div className="px-4 pt-4 space-y-3">

                  {/* Call Now */}
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    className="flex items-center justify-center px-4 py-3 rounded-lg"
                    style={{ backgroundColor: 'var(--primary)', color: 'var(--white)' }}
                  >
                    <Phone size={18} />
                    <span>Call Now</span>
                  </motion.a>

                  {/* Book Now */}
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/book-now"
                      onClick={closeMenu}
                      className="block w-full text-center px-4 py-3 rounded-lg"
                      style={{ backgroundColor: 'var(--black)', color: 'var(--white)' }}
                    >
                      Book Now
                    </Link>
                  </motion.div>

                </div>

              </nav>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.header>
  );
}
