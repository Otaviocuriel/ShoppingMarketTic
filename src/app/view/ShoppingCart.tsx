import { useShoppingCartList } from "../contexts/ShoppingCart";

const ShoppingCart = () => {
	const { items } = useShoppingCartList();
    
	return (
		<div className="mt-24 flex w-full flex-col items-center px-4 pb-10 sm:px-6 lg:px-8">
			<div className="mt-32 flex h-4/5 justify-center overflow-x-auto">
            {items.map((item) => {
                return <span>{item.name}</span>;
            })}
            </div>
		</div>
	);
};

export default ShoppingCart;
