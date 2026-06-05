import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiUserGroup, HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from '../ui/ThemeToggle';
import LanguageSwitcher from '../ui/LanguageSwitcher';

const Navbar = ({ mode, onThemeToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Effect to disable body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinkClass = ({ isActive }) =>
    `text-2xl md:text-lg transition-colors ${isActive ? 'text-primary' : 'text-text hover:text-accent'}`;

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-sm shadow-md">
        <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <Link to={'/'} className='text-3xl text-primary'>
            <HiUserGroup />
          </Link>

          {/* Desktop Menu */}
          <div className='hidden md:flex gap-6 items-center'>
            <NavLink to={'/bhuwan'} className={navLinkClass}>Bhuwan</NavLink>
            <NavLink to={'/mohanmitra'} className={navLinkClass}>मोहनमित्र</NavLink>
            <NavLink to={'/technofancy'} className={navLinkClass}>Technofancy</NavLink>
            <LanguageSwitcher />
            <ThemeToggle mode={mode} onToggle={onThemeToggle} />
          </div>

          {/* Mobile Menu Icon & Theme/Language Toggles */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle mode={mode} onToggle={onThemeToggle} />
            <LanguageSwitcher />
            <button onClick={toggleMenu} className="text-text focus:outline-none p-2">
              <HiMenu size={28} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu (Slide-in) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={toggleMenu}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute top-0 right-0 h-full w-4/5 max-w-xs bg-background shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-end mb-8">
                  <button onClick={toggleMenu} className="text-text focus:outline-none">
                    <HiX size={32} />
                  </button>
                </div>
                <div className="flex flex-col items-center justify-center flex-grow gap-8">
                  <NavLink to={'/bhuwan'} onClick={toggleMenu} className={navLinkClass}>Bhuwan</NavLink>
                  <NavLink to={'/mohanmitra'} onClick={toggleMenu} className={navLinkClass}>मोहनमित्र</NavLink>
                  <NavLink to={'/technofancy'} onClick={toggleMenu} className={navLinkClass}>Technofancy</NavLink>
                </div>
                <div className="flex justify-center items-center gap-6 pb-8">
                  {/* The toggles are now in the main bar for mobile, so this can be removed or left for redundancy */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;