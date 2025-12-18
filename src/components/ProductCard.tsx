'use client';

import React from 'react';

interface ProductCardProps {
  image: string; // Ссылка на реальное фото
  title: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description }) => {
  return (
    <div className="group relative h-[300px] w-full overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-green-main/20">
      {/* Фоновое изображение */}
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Градиентный слой для читаемости текста */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black" />

      {/* Контент */}
      <div className="absolute bottom-0 p-6 text-left">
        <h3 className="font-sans text-xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:-translate-y-1">
          {title}
        </h3>
        <p className="text-sm text-white/80 leading-relaxed opacity-0 max-h-0 transition-all duration-500 group-hover:opacity-100 group-hover:max-h-20 group-hover:translate-y-0">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;