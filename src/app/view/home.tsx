import { useEffect, useState } from "react";
import Card from "../components/Card";
import findAll from "../../services/product.service";
import type { ProductProps } from "../../interfaces/Product";

const Home = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    findAll().then((res) => setProducts(res));
  }, []);

  return (
    <>
      {products.filter((item) => item.name === "tênis").map((item) => (
        <Card key={item.id} product={item} />
      ))}
    </>
  );
};

export default Home;