'use client';
import { motion } from 'framer-motion';
import { Users, Heart, Sprout, MapPin, Calendar, Star } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Sprout className="text-white" size={20} />,
      iconBg: "bg-green-main",
      title: "Про фермеров",
      text: "Мы объединяем фермеров и локальных производителей с честным подходом к продукту и качеству. "
    },
    {
      icon: <Star className="text-white" size={20} />,
      iconBg: "bg-green-main",
      title: "Про атмосферу",
      text: "Каждый уикенд — это маленький праздник, живое пространство куда приходят не спеша и с удовольствием."
    },
    {
      icon: <Heart className="text-white" size={20} />,
      iconBg: "bg-green-main",
      title: "Про вкус и качество",
      text: "У нас выбирают продукт за вкус, состав и историю, а не за яркую упаковку и массовость."
    }
  ];

  const stats = [
    { value: "10 000+", label: "довольных покупателей" },
    { value: "50+", label: "фермеров в команде" },
    { value: "15+", label: "категорий продукции" },
    { value: "2", label: "локации" }
  ];

  return (
    <section id='about' className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* ЛЕВАЯ ЧАСТЬ: ТЕКСТ И ПРЕИМУЩЕСТВА */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-green-dark text-5xl md:text-6xl font-display leading-[1.1]">
                Мы создаём живую атмосферу, где ценят вкус и натуральность
              </h2>
              <p className="text-text-medium text-lg leading-relaxed opacity-80 max-w-xl">
                Гусь маркет — это больше, чем 
                точка продаж. Это живая платформа 
                локальных брендов, сообщество 
                малых производителей и новая 
                культура потребления
              </p>
            </motion.div>

            <div className="space-y-4">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 p-6 bg-[#FAF6EE] rounded-[2rem] border border-black/5"
                >
                  <div className={`w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center shrink-0 shadow-sm`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-green-dark text-lg">{item.title}</h4>
                    <p className="text-text-medium opacity-70">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: СЕТКА С ЦИФРАМИ */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#FAF6EE] p-8 md:p-10 rounded-[3rem] flex flex-col items-center justify-center text-center border border-black/5 aspect-square lg:aspect-auto lg:h-64 hover:shadow-xl hover:shadow-green-900/5 transition-all duration-500"
              >
                <span className="text-5xl md:text-6xl  text-green-dark mb-4 tracking-tighter">
                  {stat.value}
                </span>
                <span className="text-text-medium text-sm md:text-base leading-tight opacity-70 uppercase">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;