'use client';

import React from 'react';
import { motion } from 'framer-motion';
// Импортируем иконки карты, навигации и стрелку
import { MapPin, Navigation, ArrowUpRight } from 'lucide-react';

const Location = () => {
  // Ссылки на Яндекс Карты для обеих локаций
  const chervenskyUrl = "https://yandex.by/maps/-/CLwxbDI5"; // Замените на точную ссылку ТРЦ Червенский
  const chizhovkaUrl = "https://yandex.by/maps/-/CLwxz-2O"; // Замените на точную ссылку ТЦ Чижовка Green

  return (
    <section id="locations" className="py-24 bg-[#FAF6EE]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col lg:flex-row border border-[#F5EBD7]">
          
          {/* Текстовый блок */}
          <div className="lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#C4A574] font-bold uppercase tracking-widest text-sm mb-4"
            >
              Наши локации
            </motion.span>
            
            <h2 className="text-[#2D5016] text-4xl lg:text-5xl font-bold mb-10 tracking-tight">
              Ждем вас в гости
            </h2>

            <div className="space-y-10">
              {/* Первый адрес: ТРЦ Червенский */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-[#E8F0E0] rounded-2xl flex items-center justify-center text-[#4A7C23]">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-[#2D5016] text-xl mb-1">ТРЦ Червенский</h4>
                  <p className="text-gray-600 leading-relaxed">
                    г. Минск, ул. Маяковского, 6<br/>
                    <span className="text-sm font-medium text-[#4A7C23]">Пт, Сб, Вс: 12:00 – 20:00</span>
                  </p>
                </div>
              </div>

              {/* Второй адрес: ТЦ Чижовка Green */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-[#E8F0E0] rounded-2xl flex items-center justify-center text-[#4A7C23]">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-[#2D5016] text-xl mb-1">ТЦ Чижовка Green</h4>
                  <p className="text-gray-600 leading-relaxed">
                    г. Минск, ул. Уборевича, 176<br/>
                    <span className="text-sm font-medium text-[#4A7C23]">Сб, Вс: 11:00 – 19:00</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <motion.a 
                href={chervenskyUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 bg-[#4A7C23] text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-[#4A7C23]/20 hover:bg-[#2D5016] transition-all text-sm"
              >
                Червенский
                <ArrowUpRight size={18} />
              </motion.a>

              <motion.a 
                href={chizhovkaUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 bg-white border-2 border-[#4A7C23] text-[#4A7C23] font-bold py-4 px-8 rounded-2xl hover:bg-[#E8F0E0] transition-all text-sm"
              >
                Чижовка Green
                <ArrowUpRight size={18} />
              </motion.a>
            </div>
          </div>

          {/* Карта */}
          <div className="lg:w-1/2 bg-[#F5EBD7] min-h-[500px] relative transition-all duration-1000">
            <iframe 
              // Координаты ТРЦ Червенский с зумом 17 (уличный уровень)
              src="https://yandex.ru/map-widget/v1/?ll=27.568428%2C53.886022&z=17&mode=search&ol=biz&oid=164604564998"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;