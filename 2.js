const products = [
  { name: "Pen", category: "Stationery", price: 2 },
  { name: "Smartphone", category: "Electronics", price: 800 },
  { name: "Laptop", category: "Electronics", price: 1500 },
  { name: "Notebook", category: "Stationery", price: 550 },
  { name: "TV", category: "Electronics", price: 400 },
  { name: "Bag", category: "Accessories", price: 30 },
];

const processProducts = (products) => {
  return products
    .filter((product) => product.category !== "Stationery")
    .sort((a, b) => b.price - a.price)
    .slice(0, 3)
    .map((product) => `${product.name}: $${product.price}`);
};

console.log(processProducts(products)); // ["Laptop: $1500", "Smartphone: $800", "TV: $400"]
