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
		<div>
    <div>
      {products?.map((product) => {
        return <Card key={product.id} product={product} />;
      })}
    </div>
		</div>
  );
};

export default Home;