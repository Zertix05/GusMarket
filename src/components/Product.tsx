import AnimateInView from "./AnimateInView"
import ProductCard from "./ProductCard"

const Product = () => {
  const productData = [
    {
      title: "Мясо и рыба",
      description: "Говядина, свинина, птица и свежая рыба прямо с фермерских хозяйств.",
      image: "/images/meat.jpg"
    },
    {
      title: "Сыры",
      description: "Козьи и коровьи: твёрдые, мягкие, с плесенью по старинным рецептам.",
      image: "/images/cheese.jpg"
    },
    {
      title: "Хлеб и выпечка",
      description: "Хлеб на закваске, который пахнет домашним уютом и детством.",
      image: "/images/bread.jpg"
    },
    {
      title: "Деликатесы",
      description: "Мясные деликатесы современного приготовления высокого качества.",
      image: "/images/meat_dishes.jpg"
    },
    {
      title: "Мед и напитки",
      description: "Натуральный мед, медовые напитки и домашний квас.",
      image: "/images/honey.jpg"
    },
    {
      title: "Сладости",
      description: "Зефир, моти, пряники и десерты без капли химии.",
      image: "/images/cookies.jpg"
    },
    {
      title: "Соусы и заготовки",
      description: "Домашние соусы, варенья, специи и бабушкины заготовки.",
      image: "/images/products.jpg"
    },
    {
      title: "Овощи и зелень",
      description: "Сезонные овощи и свежая зелень прямо с грядки.",
      image: "/images/vegetables.jpg"
    }
  ];

  return (
    <section id="products" className="py-24 bg-green-dark text-white relative overflow-hidden">
      {/* Фоновый декор */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-main/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <AnimateInView className="text-center max-w-3xl mx-auto mb-20" yOffset={30}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Всё лучшее от белорусских фермеров
          </h2>
          <p className="text-green-pale/70 text-lg">
            Более 17 фермеров каждый уикенд привозят свежую продукцию, выращенную с любовью.
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