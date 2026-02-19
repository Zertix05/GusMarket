'use client';

import React from 'react';
import AnimateInView from './AnimateInView';
import {
  Handshake,
  PartyPopper,
  MapPin,
  Megaphone,
  Compass,
  Rocket
} from "lucide-react";


const Farmers = () => {
 const benefits = [
  {
    icon: Handshake,
    title: 'Партнёрство, а не аренда',
    desc: 'Мы развиваемся вместе с фермерами, активно продвигаем участников и строим долгосрочные партнёрские отношения.'
  },
  {
    icon: PartyPopper,
    title: 'Живой формат маркетов',
    desc: 'Каждый уикенд тщательно организован: активности, общение с покупателями и вовлечение фермеров.'
  },
  {
    icon: MapPin,
    title: 'Сильные городские локации',
    desc: 'Мы выбираем места с аудиторией, которой действительно интересна фермерская продукция.'
  },
  {
    icon: Megaphone,
    title: 'Медийная поддержка',
    desc: 'Розыгрыши, опросы, живое общение и коллаборации помогают фермерам становиться узнаваемыми.'
  },
  {
    icon: Compass,
    title: 'Честные ценности',
    desc: 'Мы ожидаем открытости перед покупателями и в ответ предлагаем уважение и одни из лучших условий торговли.'
  },
  {
    icon: Rocket,
    title: 'Проект с будущим',
    desc: 'Гусь Маркет — растущее сообщество, о котором уже говорят. Вы становитесь частью большого пути.'
  },
];




  const steps = [
    { n: '1', t: 'Заполните заявку', d: 'Расскажите о себе и своей продукции' },
    { n: '2', t: 'Ознакомьтесь с договором', d: 'Прозрачные и понятные условия сотрудничества' },
    { n: '3', t: 'Получите ответ', d: 'Мы свяжемся с вами в течение 2-3 рабочих дней' },
    { n: '4', t: 'Присоединяйтесь!', d: 'Начните продавать на следующем уикенде' },
  ];

  return (
    // Добавил глубокий фон, чтобы "стекло" было видно
    <section id="farmers" className="py-20 bg-green-dark relative overflow-hidden">
      
      {/* Декоративные пятна на фоне для усиления эффекта стекла */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-light/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-beige-main/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <AnimateInView className="text-center mb-12">
          {/* Сделал текст белым, так как фон теперь темный */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Станьте частью команды Гусь Маркет
          </h2>
          <p className="text-lg text-green-pale/80">
            Мы создаём современную площадку для развития вашего бренда
          </p>
        </AnimateInView>

        <AnimateInView className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg leading-relaxed text-white/90">
            Гусь Маркет — это возможность стать частью чего-то большего. Мы поддерживаем каждого фермера как отдельный бренд и создаём тренд на фермерскую продукцию в Беларуси.
          </p>
        </AnimateInView>

        {/* Стеклянные карточки преимуществ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {benefits.map((b, i) => (
            <AnimateInView 
              key={i} 
              delay={i * 0.1} 
              // bg-white/10 + backdrop-blur-md + border-white/20 = СТЕКЛО
              className="p-8 border border-white/20 rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-green-light mb-4 ">
                <b.icon size={28} strokeWidth={2.3}/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{b.title}</h3>
              <p className="text-green-pale/70 text-sm">{b.desc}</p>
            </AnimateInView>
          ))}
        </div>

        {/* Статистика с эффектом выделенного стекла */}

        {/* Стеклянные шаги */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-white mb-10">Как стать участником?</h3>
          <div className="space-y-6 max-w-2xl mx-auto">
            {steps.map((step, i) => (
              <AnimateInView 
                key={i} 
                delay={i * 0.1} 
                className="flex items-start gap-5 p-5 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl shadow-xl"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-green-main text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                  {step.n}
                </div>
                <div>
                  <h4 className="font-bold text-white">{step.t}</h4>
                  <p className="text-green-pale/60 text-sm">{step.d}</p>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>

        <AnimateInView className="text-center">
          <a 
            href="https://gusmarket.taplink.ws" 
            target="_blank" 
            className="inline-block bg-green-main hover:bg-green-light text-white px-10 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-2xl mb-4"
          >
            Оставить заявку фермеру
          </a>
        </AnimateInView>

      </div>
    </section>
  );
};

export default Farmers;