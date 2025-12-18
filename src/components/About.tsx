'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {Award, DiamondIcon, HandFist, Leaf, Truck} from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* ЛЕВАЯ ЧАСТЬ: КОЛЛАЖ ИЗ ФОТО */}
          <div className="relative">
            {/* Основное большое фото */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[3rem] overflow-hidden aspect-[4/5] z-10 shadow-2xl"
            >
              <Image 
                src="/images/gus_market_main.jpg" // Замени на фото рынка/фермера
                alt="Атмосфера Гусь Маркета"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Маленькое декоративное фото (вылетает сбоку) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-10 -right-10 w-3/5 aspect-square rounded-[2rem] overflow-hidden border-[6px] border-green-main shadow-xl z-20 hidden md:block"
            >
              <Image 
                src="/images/second_mains.jpg" // Замени на фото продуктов
                alt="Наши продукты"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Декоративный элемент — крутящаяся печать/текст */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-8 -left-8 z-20 w-32 h-32 hidden lg:block"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full fill-green-dark/10 uppercase tracking-widest font-bold text-[8px]">
                <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" />
                <text>
                  <textPath xlinkHref="#circlePath">Гусь Маркет • Свежее • Свое • Родное • </textPath>
                </text>
              </svg>
            </motion.div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: ТЕКСТ И ПРЕИМУЩЕСТВА */}
          <div className="flex flex-col">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-beige-dark font-bold uppercase tracking-[0.2em] text-sm mb-4"
            >
              Наша история
            </motion.span>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-green-dark text-4xl lg:text-5xl mb-8"
            >
              Мы объединяем <br />
              <span className="text-green-main italic font-display">лучших фермеров</span> страны
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-text-medium text-lg mb-10 leading-relaxed"
            >
              Гусь Маркет начался с простой идеи: вернуть городу вкус настоящего деревенского молока, теплого хлеба и честных продуктов. Мы лично отбираем каждое хозяйство, чтобы вы были уверены в качестве.
            </motion.p>

            {/* Список преимуществ с иконками */}
            <div className="grid sm:grid-cols-2 gap-8">
              <AboutFeature 
                delay={0.4}
                icon={<Truck className="text-green-main" size={28} />} 
                title="Прямые поставки" 
                text="Никаких перекупов — только фермер и вы." 
              />
              <AboutFeature 
                delay={0.5}
                icon={<Award className='text-green-main' size={28}/>}
                title="Отборное качество" 
                text="Контроль каждой партии продуктов." 
              />
              <AboutFeature 
                delay={0.6}
                icon={<Leaf className='text-green-main' size={28}/>}
                title="Эко-подход" 
                text="Минимум пластика, максимум природы." 
              />
              <AboutFeature 
                delay={0.7}
                icon={<HandFist className='text-green-main' size={28}/>} 
                title="Честные цены" 
                text="Поддерживаем локальных производителей." 
              />
            </div>

            {/* Цитата/Подпись */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-12 p-8 bg-beige-light rounded-3xl border-l-4 border-green-main italic text-green-dark font-display text-xl"
            >
              "Наша цель — создать место, где еда снова станет поводом для общения и радости."
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Вспомогательный компонент для преимуществ
const AboutFeature = ({ icon, title, text, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="flex flex-col gap-3"
  >
    <div className="text-3xl">{icon}</div>
    <h4 className="font-bold text-green-dark">{title}</h4>
    <p className="text-sm text-text-light leading-snug">{text}</p>
  </motion.div>
);

export default About;