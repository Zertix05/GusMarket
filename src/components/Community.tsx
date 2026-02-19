'use client';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Instagram, ChevronLeft, ChevronRight } from 'lucide-react';

const farmers = [
  {
    id: 1,
    brand: "Zenfood",
    description: "Zenfood — это история про семью, время и вкус, который рождается не на производстве, а дома. Виктор и Анастасия вместе уже больше пятнадцати лет, у них большая семья, и умение вкусно готовить всегда было частью их жизни. Именно из этого домашнего тепла и любви к еде со временем выросло дело, которое сегодня объединяет всю семью. Идея коптить пришла не сразу и не случайно. Весной 2020 года, оказавшись вдали от города, в тишине и неспешном деревенском ритме, они решили сделать коптильню своими руками. Неделя работы, сомнений и ожидания — и первая партия копчёностей для себя. С того момента копчение стало не просто увлечением, а настоящей страстью. Сегодня Zenfood — это мясо, птица и рыба, приготовленные с терпением и вниманием к процессу, где каждая партия — результат любви к делу и желания поделиться настоящим вкусом. Именно за эту искренность и душевность мы рады видеть Zenfood на Гусь Маркете.",
    images: [
      "/images/zenfood/Кто_мы,_что_мыМы_Виктор_и_Анастасия_Два_человека,_которые_нашли.jpg",
      "/images/zenfood/Кто_мы,_что_мыМы_Виктор_и_Анастасия_Два_человека,_которые_нашли (2).jpg ",
      "/images/zenfood/Кто_мы,_что_мыМы_Виктор_и_Анастасия_Два_человека,_которые_нашли (3).jpg",
      "/images/zenfood/Кто_мы,_что_мыМы_Виктор_и_Анастасия_Два_человека,_которые_нашли (4).jpg",
      "/images/zenfood/Кто_мы,_что_мыМы_Виктор_и_Анастасия_Два_человека,_которые_нашли (5).jpg",
    ]
  },
  {
    id: 2,
    brand: "Шаленая Гаспадарка",
    description: "«Шаленая Гаспадарка» — это хозяйство с характером и очень точным названием. Его развивают Ольга и Андрей — люди лёгкие на подъём, увлечённые и по-настоящему влюблённые в своё дело. Их «шалёность» не про хаос, а про смелость жить так, как чувствуешь, и заниматься тем, что действительно приносит радость. В их хозяйстве козы — не просто животные, а часть семьи: у каждой есть имя, свой нрав и доверие к хозяевам, которое чувствуется с первого взгляда. Сыр у «Шаленой Гаспадарки» рождается из свежего молока и внимания к каждому этапу процесса",
    images: [
      "/images/ШаленаяГаспадарка/IMG_4619.jpg",
      "/images/ШаленаяГаспадарка/IMG_1861.jpg",
      "/images/ШаленаяГаспадарка/IMG_0072.jpg",
    ]
  },
  {
    id: 3,
    brand: "Танин хлеб",
    description: "Таня печёт домашний хлеб на закваске и занимается этим осознанно и честно. С 2019 года она готовит хлеб для семьи и близких, а со временем решила делиться своим продуктом с более широкой аудиторией. Сегодня Таня открыто показывает состав, процесс и философию своего хлеба, делая акцент на качестве и пользе. Для неё хлеб — не просто продукт, а настоящее дело жизни. Это хлеб на закваске, без ускоренных технологий, тот, который можно спокойно дать ребёнку, угостить родных или подарить друзьям"                                                                                                                                                                                                                                                                                                                ,
    images: [
      "/images/танинХлеб/tanya.jpg",
      "/images/танинХлеб/tanya (3).jpg",
      "/images/танинХлеб/tanya (4).jpg"
    ]
  },
  {
    id: 4,
    brand: "Кузьма Фуд",
    description: "Всё начиналось ещё в 2011 году с деревянного декора и новогодних украшений, а соусы тогда готовились только для себя. Первая ярмарка оказалась неудачной, и на год о фермерских рынках пришлось забыть. Но постепенно семья втянулась, познакомилась с другими ремесленниками и исправила ошибки первых опытов, постепенно набирая уверенность и понимание, как делать продукты, которые будут интересны людям. Идея продавать соусы родилась спонтанно: однажды на ярмарке Катя принесла пару баночек просто угостить посетителей. Любопытные покупатели попробовали, спросили цену и срок хранения, и посоветовали обязательно выпускать их на продажу",                                                                                                                                   
    images: [
      "/images/кузьмаФуд/Знакомим_вас_с_@kuzma_food_Мы_семья_из_трёх_человек_КАТЯ,_САША_И (3).jpg",
      "/images/кузьмаФуд/Знакомим_вас_с_@kuzma_food_Мы_семья_из_трёх_человек_КАТЯ,_САША_И (2).jpg",
      "/images/кузьмаФуд/Знакомим_вас_с_@kuzma_food_Мы_семья_из_трёх_человек_КАТЯ,_САША_И.jpg",
      "/images/кузьмаФуд/Знакомим_вас_с_@kuzma_food_Мы_семья_из_трёх_человек_КАТЯ,_САША_И (4).jpg",
    ]
  },
  {
    id: 5,
    brand: "Летучая коза",
    description: "«Летучая коза» — это бренд, за которым стоит Валерий и искренняя любовь к козьему сыру. Здесь делают продукт из козьего молока высшего качества, уделяя внимание каждому этапу и не ограничивая себя рамками одного вкуса. В ассортименте бренда — более тридцати наименований сыров: от нежных и мягких до выдержанных, с насыщенным и глубоким характером, среди которых особое место занимают авторские рецепты",
    images: [
      "/images/летучаяКоза/IMG_7476.jpg",
      "/images/летучаяКоза/cheese.jpg",
      "/images/летучаяКоза/cheese (2).jpg"
    ]
  },
   {
    id: 6,
    brand: "Mr. Meat",
    description: "Иван и Лилия вместе с детьми создали семейное мясное дело Mr.Meat в 2022 году, руководствуясь любовью к качественному мясу и желанием делиться им с другими. Их продукты готовятся только из лучшего фермерского мяса с солью и специями, без химии и стабилизаторов. Каждая авторская рецептура проверена временем и радостью тех, кто возвращается за добавкой, а ассортимент учитывает вкусы всей семьи — от джерки и мясных чипсов для молодёжи до классики для старшего поколения",                                                                                                                                   
    images: [
      "/images/MrMeat/meat (5).jpg",
      "/images/MrMeat/meat.jpg",
      "/images/MrMeat/meat (3).jpg",
      "/images/MrMeat/meat (4).jpg",
    ]
  },
   {
    id: 7,
    brand: "Ефименко Павел",
    description: "Павел начал свой путь в мясной сфере ещё с детства, помогая маме готовить колбасы и рулеты. В 2011 году он устроился в мясной отдел рядом с домом и прошёл путь от рубщика до начальника мясного цеха. Несколько лет работы в магазине и частном мясном деле позволили ему освоить разделку, засолку и вяление мяса, а также научили относиться к продукту с вниманием и ответственностью. В 2020 году, когда сложились жизненные обстоятельства и он оказался без работы, это стало толчком для реализации собственной идеи",                                                                                                                                   
    images: [
      "/images/ефименкоПавел/В_2011_году,_начал_свою_работу_в_мясном_отделе_в_магазине_около (2).jpg",
      "/images/ефименкоПавел/В_2011_году,_начал_свою_работу_в_мясном_отделе_в_магазине_около (3).jpg",
      "/images/ефименкоПавел/В_2011_году,_начал_свою_работу_в_мясном_отделе_в_магазине_около (5).jpg",
      "/images/ефименкоПавел/В_2011_году,_начал_свою_работу_в_мясном_отделе_в_магазине_около.jpg",
    ]
  },
  {
    id: 8,
    brand: "Oleandr.Belarus",
    description: "Небольшая команда — Ольга, Андрей и Данила — уже больше восьми лет готовит еду с уважением к продукту и процессу. Здесь умеют ждать: хлеб на закваске живёт своим ритмом, а основные блюда готовятся методом су-вид — медленно и бережно, сохраняя натуральный вкус и текстуру. В основе проекта — философия Slow Food: фермерские продукты, натуральная ферментация, собственное выращивание перепелов и принципиальный отказ от искусственных усилителей. Oleandr.Belarus выбирают за честный состав, спокойную уверенность в качестве и то тёплое ощущение, которое остаётся после знакомства с их едой",
    images: [
    "/images/Oleandr_Belarus/OLEANDR_BELARUS.jpg",
      "/images/Oleandr_Belarus/OLEANDR_BELARUS(2).jpg",
        "/images/Oleandr_Belarus/OLEANDR_BELARUS(5).jpg",
      "/images/Oleandr_Belarus/OLEANDR_BELARUS(3).jpg",
      "/images/Oleandr_Belarus/OLEANDR_BELARUS(4).jpg",
     
    ]
  },
];

const FarmerRow = ({ farmer, index }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const isReversed = index % 2 !== 0;

  const nextImg = () =>
    setImgIndex((prev) => (prev + 1) % farmer.images.length);

  const prevImg = () =>
    setImgIndex(
      (prev) => (prev - 1 + farmer.images.length) % farmer.images.length
    );

  // 🔥 Предзагрузка следующей картинки
  useEffect(() => {
    const next = (imgIndex + 1) % farmer.images.length;
    const img = new window.Image();
    img.src = farmer.images[next];
  }, [imgIndex, farmer.images]);

  return (
    <div
      id="manufacters"
      className={`flex flex-col ${
        isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } items-center gap-12 lg:gap-20 mb-24 lg:mb-32 last:mb-0`}
    >
      {/* КАРУСЕЛЬ */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-[3rem] bg-[#FAF6EE] shadow-lg group">
          <AnimatePresence mode="wait">
            <motion.div
              key={imgIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <Image
                src={farmer.images[imgIndex]}
                alt={farmer.brand}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={index === 0 && imgIndex === 0}
                loading={
                  index === 0 && imgIndex === 0 ? 'eager' : 'lazy'
                }
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Стрелки */}
          <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex justify-between z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={prevImg}
              className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-green-dark shadow-md hover:bg-white transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImg}
              className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-green-dark shadow-md hover:bg-white transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Индикаторы */}
          <div className="absolute bottom-6 inset-x-0 flex justify-center gap-2 z-10">
            {farmer.images.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === imgIndex
                    ? 'w-8 bg-white'
                    : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* ТЕКСТ */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 space-y-6 lg:px-10"
      >
        <h3 className="text-4xl lg:text-5xl font-display text-green-dark">
          {farmer.brand}
        </h3>
        <div className="w-16 h-1.5 bg-green-main rounded-full" />
        <p className="text-text-medium text-lg lg:text-xl leading-relaxed opacity-90">
          {farmer.description}
        </p>
      </motion.div>
    </div>
  );
};


const CommunitySection = () => {
  return (
    <div className="bg-[#FAF6EE] overflow-hidden">
      {/* ФИЛОСОФИЯ */}
      <section  className="py-24 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <h2 className="text-green-dark text-5xl md:text-7xl font-display mb-8">
                В основе стоят люди
              </h2>
              <div className="w-24 h-1.5 bg-green-main rounded-full" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-7 space-y-6 text-text-medium text-lg md:text-xl opacity-90"
            >
              <p className="font-bold text-green-dark">
                Гусь Маркет — это не просто торговая площадка, а сообщество фермеров и производителей, объединённых общей целью: создавать честные продукты.
              </p>
              <p>
                В большинстве случаев это семейные хозяйства и небольшие бренды, где за каждым продуктом стоит личная ответственность, опыт и искренняя любовь к своему делу. Мы лично знаем каждого участника и отвечаем за тех, кого представляем.
              </p>
              <p>
                На нашем маркете продажа — это живой контакт. Фермеры делятся историями, подсказывают, как лучше использовать продукт, создавая культуру осознанного выбора и доверия с первой покупки.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* БЛОКИ ФЕРМЕРОВ (ШАХМАТКА) */}
      <section className="py-24 bg-white rounded-t-[5rem] shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-20">
            <h2 className="text-green-dark text-4xl md:text-6xl font-display">Наши участники</h2>
          </div>

          <div className="flex flex-col">
            {farmers.map((farmer, idx) => (
              <FarmerRow key={farmer.id} farmer={farmer} index={idx} />
            ))}
          </div>

          {/* ПРИЗЫВ К INSTAGRAM */}
          <div 
            className="mt-10 p-12  rounded-[4rem] text-center"
          >
            <p className="text-2xl text-green-dark font-display mb-8">
              Хотите познакомиться с каждым нашим фермером поближе?
            </p>
            <motion.a
              whileHover={{ scale: 1.02 }}
              href="https://instagram.com/gusmarket.by"
              className="inline-flex items-center gap-3 bg-green-main text-white mx-auto px-12 py-5 rounded-[2rem] font-bold text-lg shadow-xl shadow-green-main/20 hover:bg-green-dark transition-all"
            >
              <Instagram size={24} />
              Подписывайтесь на наш Instagram
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunitySection;