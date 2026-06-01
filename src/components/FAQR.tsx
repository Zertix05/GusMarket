'use client'
import AnimateInView from './AnimateInView'
import FAQItem  from './FAQItem'

const FAQR=()=>{
          // Данные для секции FAQ
      const faqData = [
          { question: 'Где находится рынок?', answer: 'Мы находимся в городе Минск, в ТРЦ Червенский (ул. Маяковского, 6) и Сквер Манифест (ул. Кульман, 1/8)' },
          { question: 'В какие дни работает рынок?', answer: 'Мы работаем в ТРЦ Червенский каждые пятница, суббота с 12:00 до 20:00 и в Сквере Манифест каждую субботу с 12:00 до 19:00' },
          { question: 'Можно ли приехать со своей продукцией?', answer: 'Да, мы рады новым фермерам! Заполните заявку на странице «Фермерам» или свяжитесь с нами по телефону' },
          { question: 'Есть ли доставка?', answer: 'В то же время вы можете заказать доставку связавшись на прямую с фермером' },
      ];
    return(
        <section id="faq" className="bg-white">
                  <div className="container mx-auto px-6 max-w-6xl">
                      <AnimateInView className="mb-12" yOffset={30}>
                          <p className=" text-4xl lg:text-5xl text-green-dark" >
                              Часто задаваемые вопросы
                          </p>
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
