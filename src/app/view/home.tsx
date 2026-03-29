import Card from "../components/Card";
import findAll from "../../services/product.service";
import type { ProductProps } from "../../interfaces/Product";
import { useQuery } from "react-query";

const Home = () => {
  const { data: products } = useQuery<ProductProps[], Error>("query-products", async () => {
    return findAll();
  });

  return (
		<div className="mt-24 h-4/5 w-full flex flex-col items-center justify-center gap-16">
    <div className="grid h-5/6 w-11/12 grid-cols-4 gap-4 over-flow-x-auto">
      {products?.map((product) => {
        return <Card key={product.id} item={product} />;
      })}
    </div>
		</div>
  );
};

export default Home;