import Card from "./components/Card";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Mushroom Orange Lamp ",
      description: "Mushroom Orange Lamp Description",
      price: 499,
      imageUrl: "https://m.media-amazon.com/images/I/41PkIt6wYCL._AC_.jpg",
    },
    {
      id: 2,
      name: "Mushroom Orange Lamp ",
      description: "Mushroom Orange Lamp Description",
      price: 499,
      imageUrl: "https://m.media-amazon.com/images/I/41PkIt6wYCL._AC_.jpg",
    },
    {
      id: 3,
      name: "Mushroom Orange Lamp ",
      description: "Mushroom Orange Lamp Description",
      price: 499,
      imageUrl: "https://m.media-amazon.com/images/I/41PkIt6wYCL._AC_.jpg",
    },
    {
      id: 4,
      name: "Mushroom Orange Lamp ",
      description: "Mushroom Orange Lamp Description",
      price: 499,
      imageUrl: "https://m.media-amazon.com/images/I/41PkIt6wYCL._AC_.jpg",
    },
    {
      id: 5,
      name: "Mushroom Orange Lamp ",
      description: "Mushroom Orange Lamp Description",
      price: 499,
      imageUrl: "https://m.media-amazon.com/images/I/41PkIt6wYCL._AC_.jpg",
    },
    {
      id: 6,
      name: "Mushroom Orange Lamp ",
      description: "Mushroom Orange Lamp Description",
      price: 499,
      imageUrl: "https://m.media-amazon.com/images/I/41PkIt6wYCL._AC_.jpg",
    },
    {
      id: 7,
      name: "Mushroom Orange Lamp ",
      description: "Mushroom Orange Lamp Description",
      price: 499,
      imageUrl: "https://m.media-amazon.com/images/I/41PkIt6wYCL._AC_.jpg",
    },
    {
      id: 8,
      name: "Mushroom Orange Lamp ",
      description: "Mushroom Orange Lamp Description",
      price: 499,
      imageUrl: "https://m.media-amazon.com/images/I/41PkIt6wYCL._AC_.jpg",
    },
    {
      id: 9,
      name: "Mushroom Orange Lamp ",
      description: "Mushroom Orange Lamp Description",
      price: 499,
      imageUrl: "https://m.media-amazon.com/images/I/41PkIt6wYCL._AC_.jpg",
    },
  ];
  return (
    <main className="min-h-screen max-w-[100rem] mx-auto">
      <div className="px-12 pt-12 pb-20">
        <div className="flex flex-col xl:flex-row gap-2 xl:gap-40">
          <div className="pt-12">
            <h2 className="text-4xl mb-16">OUR TOP PRODUCTS</h2>
            <p className="text-xl">You can pay to boost your products here.</p>
          </div>
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-12">
            {topProducts &&
              topProducts.map((item, idx) => (
                <Card id={item.id} key={`${item.name}-${idx}`} {...item} />
              ))}
          </div> */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-12">
            {products &&
              products
                .slice(0, 3)
                .map((item, idx) => (
                  <Card id={item.id} key={`${item.name}-${idx}`} {...item} />
                ))}
          </div>
        </div>

        <h2 className="text-4xl mt-20 mb-16">ALL PRODUCTS</h2>
        {products && products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((item, idx) => (
              <Card id={item.id} key={`${item.name}-${idx}`} {...item} />
            ))}
          </div>
        ) : (
          <p className="text-xl text-gray-800">All our products are gone...</p>
        )}
      </div>
    </main>
  );
}
