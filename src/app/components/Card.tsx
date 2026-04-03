import type { Product } from "../interfaces/Product";
import { useShoppingCartList } from "../contexts/ShoppingCart";
import Button from "./Button";

const Card = ({ item }: Product) => {
	const { addProduct } = useShoppingCartList();

	return (
		<div className="mx-auto flex h-full w-full max-w-72 rounded-2xl border border-[#e4dfd0] bg-[#f8f4e8] p-3 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
			<div className="flex w-full flex-col items-center text-center">
				<img
					src={`/assets/produtos/${item.image}.jpg`}
					className="h-36 w-full rounded-xl object-contain mix-blend-multiply"
					alt={item.name}
				/>
				<h2 className="mt-5 min-h-[3.25rem] text-xl font-semibold capitalize leading-6 text-[#202020]">
					{item.name}
				</h2>
				<p className="mt-2 text-xl font-medium text-[#2f2f2f]">
					R$ {item.price.toFixed(2)}
				</p>
				<Button
					onClick={(e) => {
						e.stopPropagation;
						addProduct(item.id, item.name, item.price);
					}}
				>
					Adicionar no Carrinho
				</Button>
			</div>
		</div>
	);
};

export default Card;
