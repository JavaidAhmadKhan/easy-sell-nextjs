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
  ];
  return (
    <div className="min-h-screen max-w-[100rem] mx-auto">
      {products.map((product) => (
        <Card key={`${product.name}-${product.id}`} {...product} />
      ))}
    </div>
  );
}
