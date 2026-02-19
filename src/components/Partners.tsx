  'use client';
  import { motion } from 'framer-motion';
  import { ArrowUpRight, Sparkles, Target, Zap, Users } from 'lucide-react';
  import Image from 'next/image';

  const Partners = () => {
    return (
      <section id="partners" className="py-32 bg-[#FAF6EE] overflow-hidden relative">
        {/* Декоративные элементы на фоне */}
       <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-36 -right-32 w-[420px] h-[420px] opacity-[0.1] pointer-events-none"
        >
          <Image
            src="/images/gus_market_bg.jpg"
            alt="Декор"
            fill
            className="object-cover rounded-full"
            priority
          />
        </motion.div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            
            {/* Левая часть: Липкий заголовок (Sticky) */}
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-green-main font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                  Collaboration
                </span>
                <h2 className="text-6xl md:text-7xl font-display text-green-dark leading-none mb-8">
                  Партнёрам <br />и брендам
                </h2>
                <div className="h-1 w-20 bg-green-main mb-8" />
                <p className="text-green-dark/60 text-lg max-w-xs italic">
                  Мы верим, что совместная работа даёт возможность сделать большее, чем по отдельности.
                </p>
              </motion.div>
            </div>

            {/* Правая часть: Контентная сетка */}
            <div className="lg:w-2/3">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                {/* Большой текст-манифест */}
                <p className="text-2xl md:text-4xl font-display text-green-dark leading-tight">
                  Гусь Маркет открыт к сотрудничеству с брендами, которым близки <span className="text-green-main italic">живой формат</span>, осознанный подход и честная работа с аудиторией.
                </p>

                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <p className="text-text-medium text-lg leading-relaxed opacity-80">
                      Мы умеем создавать поток и вовлечённость, а также формировать качественный контент, который органично встраивается в пространство маркета. Нам одинаково интересно работать как с крупными, так и с небольшими брендами.
                    </p>
                    <p className="text-text-medium text-lg leading-relaxed opacity-80">
                      Сильные партнёрства рождаются не из масштаба, а из идей и желания делать что-то по-настоящему живое. Мы открыты ко всем форматам: от спонсорства до медийных интеграций.
                    </p>
                  </div>

                  {/* Список ценностей / фишек */}
                  <div className="bg-white/50 backdrop-blur-sm rounded-[3rem] p-8 border border-green-main/10 shadow-sm space-y-8">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-green-main/10 flex items-center justify-center shrink-0 text-green-main">
                        <Target size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-green-dark">Репутация</h4>
                        <p className="text-sm opacity-70">Выстраиваем отношения на основе честности и взаимопомощи.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-green-main/10 flex items-center justify-center shrink-0 text-green-main">
                        <Zap size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-green-dark">Рост</h4>
                        <p className="text-sm opacity-70">Готовы рассматривать и поддерживать идеи любого масштаба.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-green-main/10 flex items-center justify-center shrink-0 text-green-main">
                        <Users size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-green-dark">Партнёрство</h4>
                        <p className="text-sm opacity-70">
                          Создаём совместные форматы, которые приносят пользу всем участникам.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Кнопка — финальный акцент */}
                <a 
              href="https://gusmarket.taplink.ws" 
              target="_blank" 
              className="inline-block bg-green-main hover:bg-green-light text-white px-10 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-2xl mb-4"
            >
              Оставить заявку партнеру
            </a>

              </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Partners;