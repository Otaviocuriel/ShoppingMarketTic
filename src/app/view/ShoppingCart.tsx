import Button from "../components/Button";
import { useShoppingCartList } from "../contexts/ShoppingCart";

const ShoppingCart = () => {
	const { items, addProduct, onDecrease, onRemove } = useShoppingCartList();

	const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
	const totalAmount = items.reduce((acc, item) => acc + item.amount, 0);

	const formatCurrency = (value: number) => {
		return new Intl.NumberFormat("pt-BR", {
			style: "currency",
			currency: "BRL",
		}).format(value);
	};

	return (
		<section className="mt-24 w-full px-4 pb-14 sm:px-6 lg:px-8">
			<div className="mx-auto w-full max-w-5xl">
				<div className="rounded-3xl border border-stone-200 bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50 p-6 shadow-sm sm:p-8">
					<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
								Shopping Market Tic
							</p>
							<h1 className="mt-2 text-2xl font-semibold text-stone-800 sm:text-3xl">
								Seu Carrinho
							</h1>
						</div>

						<div className="grid grid-cols-2 gap-3">
							<div className="rounded-2xl border border-stone-200 bg-white/80 px-4 py-3 text-center">
								<p className="text-xs uppercase tracking-wider text-stone-500"><b>Itens</b></p>
								<p className="text-xl font-semibold text-stone-800">{totalItems}</p>
							</div>
							<div className="rounded-2xl border border-stone-200 bg-white/80 px-4 py-3 text-center">
								<p className="text-xs uppercase tracking-wider text-stone-500"><b>Total</b></p>
								<p className="text-xl font-semibold text-stone-800">
									{formatCurrency(totalAmount)}
								</p>
							</div>
						</div>
					</div>
				</div>

				{items.length === 0 ? (
					<div className="mt-6 rounded-3xl border border-dashed border-stone-300 bg-white/70 p-10 text-center shadow-sm">
						<p className="text-lg font-medium text-stone-700">Seu carrinho esta vazio.</p>
						<p className="mt-2 text-sm text-stone-500">
							Adicione produtos na pagina inicial para visualizar os itens aqui.
						</p>
					</div>
				) : (
					<div className="mt-6 space-y-4">
						{items.map((item) => {
							return (
								<article
									className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-6"
									key={item.id}
								>
									<div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
										<div className="space-y-3">
											<h2 className="text-lg font-semibold text-stone-800">{item.name}</h2>
											<div className="grid grid-cols-1 gap-2 text-sm text-stone-600 sm:grid-cols-3 sm:gap-6">
												<p>
													<span className="font-medium text-stone-700">Quantidade:</span>{" "}
													{item.quantity}
												</p>
												<p>
													<span className="font-medium text-stone-700">Preco unitario:</span>{" "}
													{formatCurrency(item.unitprice)}
												</p>
												<p>
													<span className="font-medium text-stone-700">Subtotal:</span>{" "}
													{formatCurrency(item.amount)}
												</p>
											</div>
										</div>

										<div className="flex items-center gap-2 sm:self-start">
											<Button
												className="!w-11 !px-0 !py-2 text-lg font-semibold"
												onClick={(e) => {
													e.stopPropagation();
													onDecrease(item.id, item.unitprice);
												}}
											>
												-
											</Button>
											<Button
												className="!w-11 !px-0 !py-2 text-lg font-semibold"
												onClick={(e) => {
													e.stopPropagation();
													addProduct(item.id, item.name, item.unitprice);
												}}
											>
												+
											</Button>
											<Button
												className="!w-auto !px-4 !py-2"
												variant="secondary"
												onClick={(e) => {
													e.stopPropagation();
													onRemove(item.id);
												}}
											>
												Remover
											</Button>
										</div>
									</div>
								</article>
							);
						})}
					</div>
				)}

		
			</div>
		</section>
	);
};

export default ShoppingCart;
