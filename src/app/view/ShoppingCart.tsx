import Button from "../components/Button";
import { useShoppingCartList } from "../contexts/ShoppingCart";

const ShoppingCart = () => {
	const { items, addProduct, onDecrease, onRemove } = useShoppingCartList();

	return (
		<div className="mt-24 flex w-full flex-col items-center px-4 pb-10 sm:px-6 lg:px-8">
			<div className="mt-32 flex h-4/5 justify-center overflow-x-auto">
				<div className="flex w-3/6 flex-col gap-8">
					{items.map((item) => {
						return (
							<div
								className="flex justify-between rounded-3xl bg-white p-8"
								key={item.id}
							>
								<div className="flex flex-col gap-4">
									<p>
										<span>Quantidade: {item.quantity}</span>
										<span>Valor Total: R$: {item.amount.toFixed(2)}</span>
									</p>
								</div>

								<div className="flex flex-col gap-5">
									<Button
										onClick={(e) => {
											e.stopPropagation();
											addProduct(item.id, item.name, item.unitprice);
										}}
									>
										+
									</Button>
                                    <Button
										onClick={(e) => {
											e.stopPropagation();
											onDecrease(item.id, item.unitprice);
										}}
									>
										-
									</Button>
                                    <Button
										onClick={(e) => {
											e.stopPropagation();
											onRemove(item.id);
										}}
									>
										Remover
									</Button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ShoppingCart;
