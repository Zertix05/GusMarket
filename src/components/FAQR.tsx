'use client'
import AnimateInView from './AnimateInView'
import FAQItem  from './FAQItem'

const FAQR=()=>{
          // Данные для секции FAQ
      const faqData = [
          { question: 'Где находится рынок?', answer: 'Рынок работает в центре Минска по адресу ул. Какая-то, 1. Вывеска «Гусь Маркет».' },
          { question: 'В какие дни работает рынок?', answer: 'Мы открыты каждую субботу и воскресенье с 9:00 до 17:00. Приходите пораньше за свежими сырами!' },
          { question: 'Можно ли приехать со своей продукцией?', answer: 'Да, мы рады новым фермерам! Заполните заявку на странице «Фермерам» или свяжитесь с нами по телефону.' },
          { question: 'Есть ли доставка?', answer: 'К сожалению, на данный момент мы не осуществляем доставку, но работаем над этим. Вся продукция доступна только на рынке.' },
      ];
    return(
        <section id="faq" className="bg-white">
                  <div className="container mx-auto px-6 max-w-6xl">
                      <AnimateInView className="mb-12" yOffset={30}>
                          <h2 className="text-green-dark">
                              Часто задаваемые вопросы
                          </h2>
                      </AnimateInView>

                      <div className="divide-y divide-green-light/30 border-t border-green-light/30">
                          {faqData.map((item, index) => (
                              // Анимируем каждый элемент списка с небольшой задержкой
                              <AnimateInView key={index} delay={index * 0.1} yOffset={20}>
                                  <FAQItem question={item.question} answer={item.answer} />
                              </AnimateInView>
                          ))}
                      </div>
                  </div>
              </section>
    )
}
export default FAQR;
