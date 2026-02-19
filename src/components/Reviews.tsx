'use client';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: "Пользователь Instagram",
    text: "Здорово, что рядом место появилось с такой продукцией! Заглянем",
    rating: 5,
  },
  {
    name: "Пользователь Instagram",
    text: "Рыбка🔥🔥🔥🔥 Еще бы спонсора найти чтоб покупать почаще 😂.",
    rating: 5,
  },
  {
    name: "Пользователь Instagram",
    text: "Все классс!!! Но, почему не осветили икру? Она бомбическая !!!!!!",
    rating: 5,
  },
  {
    name: "Пользователь Instagram",
    text: "Орешки вкуснотища попробовала сегодня❤️",
    rating: 5,
  },
  {
    name: "Пользователь Яндекс карты",
    text: "Большой выбор товаров и фермерской продукции, хорошая атмосфера, очень дружелюбный продавцы.",
    rating: 5,
  },
  {
    name: "Пользователь Instagram",
    text: "Брала у Вас уксус яблочный, очень понравился, благодарю 👍",
    rating: 5,
  },
];

const Reviews = () => {
  const infinite = [...reviews, ...reviews];

  return (
    <section id="reviews" className="py-24 bg-[#FAF6EE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-[#2D5016] text-4xl md:text-5xl font-display mb-20">
          Что говорят наши покупатели
        </h2>

        {/* ВЕРХНИЙ РЯД → ВПРАВО */}
        <div className="relative overflow-hidden mb-14">
          <motion.div
            className="flex gap-8"
            animate={{ x: ['-50%', '0%'] }}
            transition={{ duration: 80, ease: 'linear', repeat: Infinity }}
          >
            {infinite.map((item, idx) => (
              <ReviewCard key={`top-${idx}`} item={item} />
            ))}
          </motion.div>
          <EdgeGradients />
        </div>

        {/* НИЖНИЙ РЯД → ВЛЕВО */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 80, ease: 'linear', repeat: Infinity }}
          >
            {infinite.map((item, idx) => (
              <ReviewCard key={`bottom-${idx}`} item={item} />
            ))}
          </motion.div>
          <EdgeGradients />
        </div>
      </div>
    </section>
  );
};

export default Reviews;

/* ---------------- COMPONENTS ---------------- */

const ReviewCard = ({ item }: { item: any }) => (
  <div className="min-w-[340px] md:min-w-[380px] bg-white p-8 rounded-[2.8rem] border border-[#F5EBD7] shadow-[0_20px_40px_rgba(45,80,22,0.06)] flex flex-col relative">

    {/* кавычка */}
    <div className="absolute top-6 right-8 text-6xl text-[#E8F0E0] font-display select-none">
      “
    </div>

    {/* звезды */}
    <div className="text-[#C4A574] text-sm mb-4 tracking-wide">
      {'★'.repeat(item.rating)}
    </div>

    {/* текст */}
    <p className="text-[#4A4A4A] text-[15px] leading-relaxed italic mb-8 flex-grow">
      {item.text}
    </p>

    {/* автор */}
    <div className="flex items-center gap-4 pt-4 border-t border-[#eee]">
      <div className="w-12 h-12 rounded-full bg-[#E8F0E0] flex items-center justify-center text-[#2D5016] font-bold text-lg">
        {item.name[0]}
      </div>
      <div className="text-[#2D5016] font-semibold text-sm">
        {item.name}
      </div>
    </div>
  </div>
);

const EdgeGradients = () => (
  <>
    <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FAF6EE] to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FAF6EE] to-transparent" />
  </>
);
