import Card from "../components/Card";
import ProductService from "../../services/product.service";
import type { ProductProps } from "../../interfaces/Product";
import { useQuery } from "react-query";
import { useEffect } from "react";

const Home = () => {
  const { data: products } = useQuery<ProductProps[], Error>("query-products", async () => {
    return ProductService.findAll();
  });

  return (
		<div className="mt-24 flex w-full flex-col items-center px-4 pb-10 sm:px-6 lg:px-8">
    <div className="grid w-full max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {products?.map((product) => {
        return <Card key={product.id} item={product} />;
      })}
    </div>
		</div>
  );
};

export default Home;