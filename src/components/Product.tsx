import AnimateInView from "./AnimateInView"
import ProductCard from "./ProductCard"

const Product = () => {
  const productData = [
    {
      title: "Мясо и рыба",
      description: "Копченые мясо и рыба, сало, колбасы, мясные чипсы, джерки",
      image: "/images/meat.jpg"
    },
    {
      title: "Сыры",
      description: " Козьи и коровьи, твёрдые и мягкие, молодые и выдержанные, с плесенью",
      image: "/images/cheese.jpg"
    },
    {
      title: "Хлеб и выпечка",
      description: "Хлеб на закваске, безглютеновый хлеб, печенья, пирожки, булочки",
      image: "/images/bread.jpg"
    },
    {
      title: "Су-вид продукция",
      description: "Деликатесы современного приготовления высокого качества",
      image: "/images/su_prod.jpg"
    },
    {
      title: "Мед и медовые напитки",
      description: " Натуральный мёд, медовые напитки, квас, сурица",
      image: "/images/honey.jpg"
    },
    {
      title: "Сладости",
      description: " Моти, макароны, пряники, торты, орешки и трубочки со сгущенкой, а также эко-сладости ",
      image: "/images/cookies.jpg"
    },
    {
      title: "Соусы и заготовки",
      description: " Домашние соусы, песто, варенье, закатки",
      image: "/images/souces.jpg"
    },
    {
      title: "Чаи, травы, бады",
      description: "Травяные лечебные чаи, бады, специи, продукты для здоровья ",
      image: "/images/tea.jpg"
    }
  ];

  return (
    <section id="products" className="py-24 bg-green-dark text-white relative overflow-hidden">
      {/* Фоновый декор */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-main/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        <AnimateInView className="text-center max-w-3xl mx-auto mb-20" yOffset={30}>
          <h2 className="text-4xl lg:text-5xl  text-white mb-6">
            Всё лучшее от белорусских фермеров
          </h2>
          <p className="text-green-pale/70 text-lg">
            Каждый уикенд фермеры привозят свежую продукцию, выращенную с любовью.
          </p>
        </AnimateInView>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productData.map((product, index) => (
            <AnimateInView key={index} delay={index * 0.1} yOffset={20}>
              <ProductCard 
                title={product.title} 
                description={product.description} 
                image={product.image} 
              />
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Product;