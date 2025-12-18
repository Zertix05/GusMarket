'use client';

import React from 'react';

// Типизируем пропсы для NewsCard
interface NewsCardProps {
  tag: string;
  title: string;
  desc: string;
  imageUrl: string; // Заменяем emoji на imageUrl
}

function NewsCard({ tag, title, desc, imageUrl }: NewsCardProps) {
  return (
    <div className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-[#E8F0E0] group cursor-pointer hover:shadow-xl transition-all duration-500">
      {/* Контейнер для изображения */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Легкий оверлей, чтобы картинка была глубже */}
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      <div className="p-9 text-left">
        <span className="text-[10px] font-bold text-[#4A7C23] bg-[#E8F0E0] px-3 py-1.5 rounded-full uppercase tracking-widest">
          {tag}
        </span>
        <h4 className="font-bold text-xl mt-6 mb-3 leading-tight group-hover:text-[#4A7C23] transition-colors">
          {title}
        </h4>
        <p className="text-gray-400 text-sm leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

const News = () => {
  // Данные новостей с реальными фото (Unsplash для примера)
  const newsData = [
    {
      tag: "Новый фермер",
      title: "Знакомьтесь: новый сыровар",
      desc: "Козьи сыры ручной работы теперь каждые выходные на нашем прилавке.",
      image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&q=80&w=600"
    },
    {
      tag: "Событие",
      title: "Фотоотчёт с выходных",
      desc: "Как прошли выходные на Гусь Маркет: дегустации, музыка и живое общение.",
      image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=600"
    },
    {
      tag: "Сезон",
      title: "Сезонные продукты",
      desc: "Свежие овощи, лесные грибы и осенние заготовки от наших фермеров.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section className="py-32 text-center bg-[#FAF6EE]/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="font-['Cormorant_Garamond',serif] text-[64px] text-[#2D5016] mb-4 tracking-tight leading-none">
          Следите за новостями
        </h2>
        <p className="text-gray-500 mb-20 text-lg max-w-2xl mx-auto">
          Специальные события, новые фермеры, сезонные продукты — всё в нашем Instagram
        </p>

        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {newsData.map((item, index) => (
            <NewsCard 
              key={index}
              tag={item.tag}
              title={item.title}
              desc={item.desc}
              imageUrl={item.image} 
            />
          ))}
        </div>

        <button className="bg-[#4A7C23] text-white px-12 py-5 rounded-[1.5rem] font-bold hover:bg-[#2D5016] transition-all shadow-xl shadow-[#4A7C23]/20 hover:-translate-y-1">
          Подписаться на Instagram
        </button>
      </div>
    </section>
  );
};

export default News;