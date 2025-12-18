'use client';

import { motion } from 'framer-motion';

const benefits = [
  {
    icon: "🌿",
    title: "Свежесть и качество",
    text: "Самая свежая фермерская продукция, изготовленная из лучших ингредиентов. Каждый товар — это труд настоящих мастеров."
  },
  {
    icon: "✓",
    title: "Безопасность и контроль",
    text: "Вся продукция проходит санитарный контроль. Мы работаем только с проверенными фермерами, которым доверяем сами."
  },
  {
    icon: "📍",
    title: "Удобные локации",
    text: "Два рынка в самом центре Минска с максимальной проходимостью. Легко добраться, легко выбрать."
  },
  {
    icon: "🎨",
    title: "Яркая атмосфера",
    text: "Красивые прилавки, продуманная эстетика и дружелюбная атмосфера делают каждую покупку приятной."
  },
  {
    icon: "💰",
    title: "Честные цены",
    text: "Прямые поставки от фермеров без посредников. Вы платите за качество, а не за накрутки."
  },
  {
    icon: "🤝",
    title: "Доверие и истории",
    text: "Каждый фермер — это живой человек с историей. Вы знаете, кто вырастил ваш сыр и испёк хлеб."
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-[#FAF6EE]">
      <div className="container mx-auto px-6 max-w-[1400px]">
        
        {/* Заголовок секции (в стиле Гусь Маркет) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Cormorant_Garamond',serif] text-5xl md:text-6xl text-[#2D5016] font-semibold mb-6"
          >
            Почему выбирают Гусь Маркет?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#4A4A4A] text-lg md:text-xl font-medium"
          >
            Мы создали место, где комфортно покупать настоящее
          </motion.p>
        </div>

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white p-10 rounded-[32px] border border-[#4A7C23]/10 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Линия сверху при ховере (как в оригинале) */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#4A7C23] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-[32px] origin-left" />

              {/* Иконка */}
              <div className="w-16 h-16 bg-[#E8F0E0] text-[#4A7C23] rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-[#4A7C23] group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>

              {/* Текст */}
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#2D5016] transition-colors">
                {item.title}
              </h3>
              <p className="text-[#4A4A4A] leading-relaxed text-[15px]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;