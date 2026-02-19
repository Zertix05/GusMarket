'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { MapPin, Calendar } from 'lucide-react';

const slides = [
  { src: '/images/mainCarousell/1.jpg', title: 'Фермерские продукты' },
  { src: '/images/mainCarousell/2.jpg', title: 'Фермерские продукты' },
  { src: '/images/mainCarousell/3.jpg', title: 'Фермерские продукты' },
  { src: '/images/mainCarousell/4.jpg', title: 'Фермерские продукты' },
  { src: '/images/mainCarousell/5.jpg', title: 'Фермерские продукты' },
  { src: '/images/mainCarousell/6.jpg', title: 'Фермерские продукты' },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 pb-12 overflow-hidden flex items-center bg-[#FAF6EE]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#E8F0E0_0%,_transparent_40%),radial-gradient(circle_at_bottom_left,_#F5EBD7_0%,_transparent_40%)]" />

      <div className="mx-auto px-6 max-w-[1440px] w-full grid lg:grid-cols-12 gap-8 items-center relative z-10">

        {/* ЛЕВАЯ ЧАСТЬ */}
        <div className="lg:col-span-5">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-green-dark text-6xl md:text-7xl xl:text-8xl mb-6 font-display"
          >
            Гусь Маркет
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display italic text-2xl md:text-3xl text-green-main mb-6"
          >
            Больше, чем фермерский рынок
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-text-medium text-lg max-w-lg mb-12 leading-relaxed opacity-80"
          >
            Мы не просто торговые места, а живая площадка, которая объединяет
            фермеров и локальных производителей в одном пространстве. Мы делаем
            качественные фермерские продукты доступными для каждого.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white/60 backdrop-blur-xl p-5 rounded-3xl shadow flex items-center gap-5 mb-10 max-w-md border border-white/80"
          >
            <div className="w-14 h-14 bg-[#E8F0E0] rounded-2xl flex items-center justify-center">
              <Calendar className="text-green-dark" />
            </div>
            <p className="font-bold text-green-dark text-xl">
              Пт–Вс: 10:00 – 20:00
            </p>
          </motion.div>

          <motion.a
            whileHover={{ y: -3 }}
            href="https://yandex.by/maps/-/CLwxbDI5"
            target="_blank"
            className="inline-flex items-center gap-2 bg-green-main text-white px-10 py-5 rounded-2xl font-bold shadow-lg hover:bg-green-dark transition-all"
          >
            <MapPin size={20} />
            Найти на карте
          </motion.a>
        </div>

        {/* ПРАВАЯ ЧАСТЬ — КАРУСЕЛЬ */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center relative">
          <div className="relative w-full aspect-[4/3] lg:aspect-[16/10] overflow-hidden z-10 rounded-[3rem] lg:rounded-[4rem] shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <Image
                  src={slides[index].src}
                  alt={slides[index].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority={index === 0}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Индикаторы */}
          <div className="flex gap-3 mt-8 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === index
                    ? 'bg-green-main w-8'
                    : 'bg-green-main/30 w-2.5'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
