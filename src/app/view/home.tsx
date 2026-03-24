import {useQuery} from "react-query";
import Card from "../components/Card";
import findAll from "../../services/product.service";
import type { ProductProps } from "../../interfaces/Product";

const Home = () => {
	//useEffect(() => {
		//findAll().then((res) => console.log(res));
  //	})

	const {
		data: products,
		isLoading,
		error,
	} = useQuery<ProductProps[], Error>("query-products", async () => {
		return await findAll();
	}, {
		retry: false,
	});

	if (isLoading) return <p className="mt-28 text-center">Carregando produtos...</p>;
	if (error) return <p className="mt-28 text-center">Erro ao carregar produtos.</p>;

    return (
		<main className="mt-24 w-full px-3">
			<div className="flex flex-wrap justify-center gap-3">
				{products?.map((product: ProductProps) => {
					return (
						<Card key={product.id} product={product} />
					)
				})}
			</div>
		</main>
	);
};

export default Home;