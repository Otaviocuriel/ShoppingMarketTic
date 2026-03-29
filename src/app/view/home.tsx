import Card from "../components/Card";
import findAll from "../../services/product.service";
import type { ProductProps } from "../../interfaces/Product";
import { useQuery } from "react-query";

const Home = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery<ProductProps[], Error>("query-products", async () => {
    return findAll();
  });

  return (
    <>
      {products?.map((product) => {
        return <Card key={product.id} product={product} />;
      })}
    </>
  );
};

export default Home;