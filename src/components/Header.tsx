'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Предполагаем, что вы установили 'lucide-react' для иконок
// npm install lucide-react
import { Menu, X } from 'lucide-react'; 

const NavLinks = [
    { title: 'О нас', href: '#about' },
    { title: 'Продукция', href: '#products' },
    { title: 'Локации', href: '#locations' },
    { title: 'Отзывы', href: '#reviews' },
    { title: 'Фермерам', href: '#farmers' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = scrolled 
    ? "py-3 bg-white/95 backdrop-blur-md border-b border-green-dark/10 shadow-soft" 
    : "py-4 bg-beige-light/90 backdrop-blur-md border-b border-green-dark/10";

  // Варианты анимации для мобильного меню
  const menuVariants = {
    hidden: { opacity: 0, height: 0, y: -20 },
    visible: { 
        opacity: 1, 
        height: 'auto', 
        y: 0, 
        transition: { duration: 0.3, ease: 'easeInOut' }
    },
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClasses}`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          
          {/* Логотип */}
          <Link href="#" className="flex items-center gap-3 text-green-dark no-underline group shrink-0">
            <motion.div 
                animate={{ rotate: scrolled ? -20 : 0 }} // Анимация поворота гуся при скролле
                className="w-12 h-12 bg-green-main rounded-full flex items-center justify-center text-2xl transition-all"
            >
              <span className="text-white">🪿</span>
            </motion.div>
            <span className="font-span text-2xl font-bold whitespace-nowrap">
              Гусь Маркет
            </span>
          </Link>

          {/* Десктопная навигация */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-10">
            {NavLinks.map((link, index) => (
                <Link key={link.title} href={link.href} className="nav-link">
                    {link.title}
                </Link>
            ))}
            <a href="https://instagram.com/gusmarket.by" target="_blank" className="btn-primary">
                Instagram
            </a>
          </nav>

          {/* Кнопка мобильного меню */}
          <button 
            className="lg:hidden text-green-dark p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Мобильное меню (Анимация Framer Motion) */}
      <AnimatePresence>
        {isMenuOpen && (
            <motion.nav
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuVariants}
                className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-green-dark/10 shadow-medium overflow-hidden"
            >
                <div className="p-4 flex flex-col items-start gap-4">
                    {NavLinks.map((link) => (
                        <Link 
                            key={link.title} 
                            href={link.href} 
                            className="nav-link text-xl w-full py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.title}
                        </Link>
                    ))}
                    <a 
                        href="https://instagram.com/gusmarket.by" 
                        target="_blank" 
                        className="btn-primary w-full mt-2"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Instagram
                    </a>
                </div>
            </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;