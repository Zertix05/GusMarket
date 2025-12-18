'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-8 font-['Manrope',-apple-system,sans-serif]">
      <div className="container mx-auto px-6 max-w-[1400px]">
        
        {/* Основной контент футера */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Блок Брендинга */}
          <div className="flex flex-col gap-5">
            <Link href="#" className="flex items-center gap-3 no-underline group">
              <div className="w-12 h-12 bg-[#4A7C23] rounded-full flex items-center justify-center text-2xl transition-all duration-300 group-hover:rotate-[-10deg] group-hover:scale-105">
                🪿
              </div>
              <span className="font-['Cormorant_Garamond',Georgia,serif] text-2xl font-bold text-white">
                Гусь Маркет
              </span>
            </Link>
            <p className="text-white/70 text-[15.2px] leading-[1.8] max-w-[300px]">
              Фермерский рынок в центре Минска. Свежая продукция, атмосфера праздника, поддержка белорусских производителей.
            </p>
            <div className="mt-1 ">
              <a  
                href="https://instagram.com/gusmarket.by" 
                target="_blank" 
                className="w-11 h-11 pb-1 bg-white/10 rounded-xl flex items-center justify-center text-xl no-underline transition-all hover:bg-[#4A7C23]"
              >
                📷
              </a>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="text-white font-semibold text-base mb-5">Навигация</h4>
            <ul className="list-none p-0 m-0 space-y-3">
              {[
                { name: 'О нас', href: '#about' },
                { name: 'Продукция', href: '#products' },
                { name: 'Локации', href: '#locations' },
                { name: 'Отзывы', href: '#reviews' },
                { name: 'Фермерам', href: '#farmers' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-white/70 no-underline text-[15.2px] transition-colors hover:text-[#6B9B3C]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Локации */}
          <div>
            <h4 className="text-white font-semibold text-base mb-5">Локации</h4>
            <ul className="list-none p-0 m-0 space-y-3">
              <li><span className="text-white/70 text-[15.2px]">ТРЦ «Червенский»</span></li>
              <li><span className="text-white/70 text-[15.2px]">ул. Маяковского, 6</span></li>
              <li><span className="text-white/70 text-[15.2px]">ТЦ «Чижовка Green»</span></li>
              <li><span className="text-white/70 text-[15.2px]">ул. Уборевича, 176</span></li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-white font-semibold text-base mb-5">Контакты</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/70 text-[15.2px]">
                <span className="text-xl">📷</span>
                <span>@gusmarket.by</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 text-[15.2px]">
                <span className="text-xl">🕐</span>
                <span>Пт, Сб, Вс: 12:00–20:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя панель */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-white/50 text-[14.4px] m-0">
            © 2024 Гусь Маркет. Все права защищены.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/50 no-underline text-[14.4px] transition-colors hover:text-white">
              Публичный договор
            </Link>
            <Link href="#" className="text-white/50 no-underline text-[14.4px] transition-colors hover:text-white">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;