
import Product from '../components/Product';
import FAQItem from '../components/FAQItem';
import { motion } from 'framer-motion';
import AnimateInView from '../components/AnimateInView';
import Hero from '../components/Hero';
import About from '../components/About'
import Location from '../components/Location';
import Footer from '../components/Footer';
import Reviews from '../components/Reviews';
import Benefits from '../components/Benefits';
import News from '../components/News';
import FAQR from '../components/FAQR';
import Farmers from '../components/Farmers';

  export default function Home() {
      // Данные для секции FAQ
      const faqData = [
          { question: 'Где находится рынок?', answer: 'Рынок работает в центре Минска по адресу ул. Какая-то, 1. Вывеска «Гусь Маркет».' },
          { question: 'В какие дни работает рынок?', answer: 'Мы открыты каждую субботу и воскресенье с 9:00 до 17:00. Приходите пораньше за свежими сырами!' },
          { question: 'Можно ли приехать со своей продукцией?', answer: 'Да, мы рады новым фермерам! Заполните заявку на странице «Фермерам» или свяжитесь с нами по телефону.' },
          { question: 'Есть ли доставка?', answer: 'К сожалению, на данный момент мы не осуществляем доставку, но работаем над этим. Вся продукция доступна только на рынке.' },
      ];

      return (
          <>
              {/* === 1. HERO SECTION === */}
             <Hero/>
             <About/>
             <Benefits/>
             <Product/>
             <Location/>
             <Reviews/>
             <News/>
             <Farmers/>
             <FAQR/>
             <Footer/>
          </>
      )
  }