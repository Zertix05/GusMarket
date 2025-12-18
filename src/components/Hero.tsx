'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Bell, Calendar, Milk, Croissant, Leaf } from 'lucide-react';

const Hero = () => {
  const floatAnimation = (delay: number) => ({
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      },
    },
  });

  return (
    /* Фон с радиальным градиентом для мягкого свечения */
    <section className="relative min-h-screen pt-24 pb-12 overflow-hidden flex items-center bg-[#FAF6EE]">
      {/* Слой с мягким градиентом */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#E8F0E0_0%,_transparent_40%),radial-gradient(circle_at_bottom_left,_#F5EBD7_0%,_transparent_40%)]" />

      <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* ЛЕВАЯ ЧАСТЬ */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8F0E0] rounded-full mb-8 border border-green-main/10"
          >
              <Leaf className="text-green-main" size={14} />
            <span className="text-green-dark font-semibold text-xs uppercase tracking-wider">Фермерский рынок</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-green-dark text-6xl md:text-8xl mb-6 font-display"
          >
            Гусь Маркет
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display italic text-3xl text-green-main mb-6"
          >
            Больше, чем фермерский рынок
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-text-medium text-lg max-w-lg mb-12 leading-relaxed opacity-80"
          >
            Место, где каждый уикенд превращается в праздник вкуса, качества и настоящих эмоций.
          </motion.p>

          {/* Плашка со временем (Glassmorphism) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white/60 backdrop-blur-xl p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center gap-5 mb-10 max-w-md border border-white/80"
          >
            <div className="w-14 h-14 bg-[#E8F0E0] rounded-2xl flex items-center justify-center text-2xl shadow-inner">
              <Calendar/>
            </div>
            <div>
              <p className="font-bold text-green-dark text-xl">Пт, Сб, Вс: 12:00 – 20:00</p>
              <p className="text-text-light font-medium">В центре Минска</p>
            </div>
          </motion.div>

         <div className="flex flex-wrap gap-5">
            <motion.a 
              whileHover={{ y: -3 }}
              href="https://yandex.by/maps/" 
              target='_blank'
              className="flex items-center gap-2 bg-green-main text-white px-10 py-5 rounded-2xl font-bold shadow-lg shadow-green-main/20 hover:bg-green-dark transition-all"
            >
              <MapPin size={20} />
              Найти на карте
            </motion.a>
            <motion.a 
              whileHover={{ y: -3 }}
              href="https://instagram.com/gusmarket.by" 
              target='_blank'
              className="flex items-center gap-2 bg-white border border-green-dark/10 text-green-dark px-10 py-5 rounded-2xl font-bold hover:bg-white/80 transition-all shadow-sm"
            >
              <Bell size={20} />
              Подписаться
            </motion.a>
          </div>
        </div>

        {/* ПРАВАЯ ЧАСТЬ (Корзина теперь ровно) */}
        <div className="relative h-[650px] flex items-center justify-center">
          
          {/* Фон-подложка (без наклона всего блока) */}
          <div className="absolute w-[90%] h-[85%] bg-[#F5EBD7]/50 rounded-[4rem] z-0" />

          {/* ЦЕНТРАЛЬНАЯ КОРЗИНА */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-72 h-72 md:w-[400px] md:h-[400px]"
          >
            <Image 
              src="/images/gus_market.png" 
              alt="Корзина Гусь Маркет" 
              fill
              className="object-contain" // Оставит корзину ровной
              priority
            />
          </motion.div>

          {/* КАРТОЧКИ (Floating) */}
          <FloatingCard icon="🧀" label="Крафтовые сыры" pos="top-[5%] left-[5%]" delay={0} />
          <FloatingCard icon="🍞" label="Свежий хлеб" pos="top-[10%] right-[5%]" delay={0.5} />
          <FloatingCard icon="🍯" label="Натуральный мёд" pos="bottom-[15%] left-[0%]" delay={1} />
          <FloatingCard icon="🥬" label="Хлеб на закваске" pos="bottom-[20%] right-[0%]" delay={1.5} />
        </div>
      </div>
    </section>
  );
};

// Вспомогательный компонент для карточек
const FloatingCard = ({ icon, label, pos, delay }: any) => (
  <motion.div 
    initial={{ y: 0 }}
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 5, repeat: Infinity, delay: delay, ease: "easeInOut" }}
    className={`absolute ${pos} bg-white/90 backdrop-blur-md p-5 rounded-[2rem] shadow-xl flex flex-col items-center z-20 w-36 border border-white/50`}
  >
    <span className="text-4xl mb-2">{icon}</span>
    <p className="text-[13px] font-bold text-green-dark text-center leading-tight">{label}</p>
  </motion.div>
);

export default Hero;