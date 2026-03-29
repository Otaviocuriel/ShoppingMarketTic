import Card from "../components/Card";
import findAll from "../../services/product.service";
import type { ProductProps } from "../../interfaces/Product";
import { useQuery } from "react-query";

const Home = () => {
  const { data: products } = useQuery<ProductProps[], Error>("query-products", async () => {
    return findAll();
  });

  return (
		<div className="pt-24 pb-12">
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-16">
      {products?.map((product) => {
        return <Card key={product.id} product={product} />;
      })}
    </div>
		</div>
  );
};

export default Home;