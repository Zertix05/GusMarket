'use client';

import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: "Екатерина С.",
    role: "Постоянный покупатель",
    text: "Лучшее место в Минске, чтобы купить настоящие фермерские сыры. Атмосфера просто потрясающая, всегда уходим с полными сумками и хорошим настроением!",
    rating: 5
  },
  {
    name: "Александр Д.",
    role: "Шеф-повар",
    text: "Для своих блюд я выбираю только проверенные продукты. В «Гусь Маркете» всегда нахожу свежайшую зелень и мясо высшего качества. Рекомендую всем ценителям.",
    rating: 5
  },
  {
    name: "Мария и Иван",
    role: "Семья",
    text: "Приходим сюда каждые выходные как на праздник. Дети обожают домашнюю выпечку, а мы с мужем — крафтовые деликатесы. Спасибо за такой проект!",
    rating: 5
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-[#FAF6EE] overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* ЗАГОЛОВОК СЕКЦИИ */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#2D5016] text-4xl md:text-5xl font-display mb-6"
          >
            Что говорят нащи покупатели?
          </motion.h2>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="tracking-[0.1em] text-md mb-4 block"
          >
            Более 10000 человек  уже оценили качество и атмосферу Гусь Маркет
          </motion.span>
        </div>

        {/* СЕТКА ОТЗЫВОВ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-[0_15px_40px_rgba(45,80,22,0.05)] border border-[#F5EBD7] relative flex flex-col"
            >
              {/* Кавычка-декор */}
              <div className="absolute top-8 right-10 text-6xl text-[#E8F0E0] font-display select-none">
                “
              </div>

              {/* Звезды */}
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <span key={i} className="text-[#C4A574] text-sm">★</span>
                ))}
              </div>

              <p className="text-[#4A4A4A] text-[16px] leading-[1.7] mb-8 flex-grow italic">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#E8F0E0] rounded-full flex items-center justify-center text-[#2D5016] font-bold text-lg shadow-inner">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="text-[#2D5016] font-bold text-base leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-[#7A7A7A] text-[13px]">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* НИЖНЯЯ КНОПКА/ПРИЗЫВ */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a 
            href="https://instagram.com/gusmarket.by" 
            target="_blank"
            className="inline-flex items-center gap-2 text-[#4A7C23] font-bold hover:gap-4 transition-all"
          >
            Читать больше в Instagram <span className="text-xl">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;