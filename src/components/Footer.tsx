'use client';

import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Clock, Instagram, Send, Smartphone } from 'lucide-react';


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
                <Image
                 src="/images/gus_market.png"
                 alt="Гусь Маркет"
                  width={48}
                  height={48}
                  className="object-contain  rounded-full"
                  priority/>
              </div>
              <span className=" text-2xl font-bold text-white">
                Гусь Маркет
              </span>
            </Link>
            <p className="text-white/70 text-[15.2px] leading-[1.8] max-w-[300px]">
              Фермерский рынок в Минске. Свежая продукция, атмосфера праздника, поддержка белорусских производителей.
            </p>
           <div className="mt-1 flex gap-4">
            <a
              href="https://instagram.com/gusmarket.by"
              target="_blank"
              aria-label="Instagram"
              className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center transition-all hover:bg-[#4A7C23]"
            >
              <Instagram size={22} />
            </a>

            <a
              href="https://t.me/gusmarket_by"
              target="_blank"
              aria-label="Telegram"
              className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center transition-all hover:bg-[#4A7C23]"
            >
              <Send size={20} />
            </a>
          </div>

            
          </div>

          {/* Навигация */}
          <div>
            <h4 className="text-white font-semibold text-base mb-5">Навигация</h4>
            <ul className="list-none p-0 m-0 space-y-3">
              {[
                { name: 'О нас', href: '#about' },
                 { name: 'Фермеры и производители', href: '#manufacters' },
                { name: 'Продукция', href: '#products' },
                { name: 'Локации', href: '#locations' },              
                { name: 'Отзывы', href: '#reviews' },
                { name: 'Фермерам', href: '#farmers' },
                { name: 'Партнерам', href: '#partners' }
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
              <li><span className="text-white/70 text-[15.2px]">ТОЦ «Авиа Молл»</span></li>
              <li><span className="text-white/70 text-[15.2px]">ул. Братская 18</span></li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-white font-semibold text-base mb-5">Контакты</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/70 text-[15.2px]">
              <Instagram size={18} />
              <a
                href="https://instagram.com/gusmarket.by"
                target="_blank"
                className="hover:text-[#6B9B3C] transition-colors"
              >
                @gusmarket.by
              </a>
            </div>

            <div className="flex items-center gap-3 text-white/70 text-[15.2px]">
              <Send size={18} />
              <a
                href="https://t.me/gusmarket_by"
                target="_blank"
                className="hover:text-[#6B9B3C] transition-colors"
              >
                t.me/gusmarket_by
              </a>
            </div>

            <div className="flex items-center gap-3 text-white/70 text-[15.2px]">
              <Smartphone size={18} />
              <a
                href="#"
                className="hover:text-[#6B9B3C] transition-colors"
              >
                 +375 (25) 640-32-97
              </a>
            </div>


              <div className="flex items-center gap-3 text-white/70 text-[15.2px]">
                <Clock size={18} />
                <span>Пт-Вс: 10:00–20:00</span>
              </div>
            </div>
          </div>

        </div>

        {/* Нижняя панель */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-white/50 text-[14.4px] m-0">
            © 2025 Гусь Маркет. Все права защищены.
          </p>
          <div className="flex gap-6">
            <Link href="https://drive.google.com/file/d/1YPlikTJpZ47S_X662mJBNEmT6hBzLwnd/view?usp=drive_link" className="text-white/50 no-underline text-[14.4px] transition-colors hover:text-white">
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