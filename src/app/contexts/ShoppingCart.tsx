import { set } from "lodash";
import { createContext, useContext, useState } from "react";

interface ShoppingListProviderProps {
	children: React.ReactNode;
}
export interface ListItem {
	id: number;
	name: string;
	unitprice: number;
	quantity: number;
	amount: number;
}

export interface ShoppingCartListContextData {
	items: ListItem[];
	//totalSumAmount: number;
	//totalQtd: number;
	addProduct: (id: number, name: string, unitprice: number) => void;
	onRemove: (id: number) => void;
	onDecrease: (id: number, quantity: number) => void;
}

const ShoppingListContextDefaultValues = {
    items: [],
    totalSumAmount: 0,
    totalQtd: 0,
    addProduct: () => null,
    onRemove: () => null,
    onDecrease: () => null,
}

const ShoppingListContext = createContext<ShoppingCartListContextData>(
    ShoppingListContextDefaultValues,
);

export const ShoppingListProvider = ({
	children,
}: ShoppingListProviderProps) => {
	const [items, setItems] = useState<ListItem[]>([]);

	const addProduct = (id: number, name: string, unitprice: number) => {
		const productAlreadyInCart = items.find((product) => product.id === id);

		if (!productAlreadyInCart) {
			const item: ListItem = {
				id: id,
				name: name,
				amount: unitprice,
				unitprice: unitprice,
				quantity: 1,
			};

			return setItems([...items, item]);
		}

		if (productAlreadyInCart) {
			const updateCart = items.map((cartItem) => {
				return cartItem.id === id
					? {
							...cartItem,
							quantity: Number(cartItem.quantity) + 1,
							amount: cartItem.amount + unitprice,
						}
					: cartItem;
			});
			return setItems(updateCart);
		}
	};
	const onRemove = (_id: number) => {
		const filteredItems = items.filter((item) => item.id !== _id);
		setItems(filteredItems);
	};

	const onDecrease = (_id: number, _quantity: number) => {
		const productAlreadyInCart = items.find((product) => product.id === _id);

		if(productAlreadyInCart && productAlreadyInCart.quantity <= 1) {
			return onRemove(_id);
		}

		if (productAlreadyInCart) {
			const updateCart = items.map((cartItem) => {
				return cartItem.id === _id
					? {
							...cartItem,
							quantity: Number(cartItem.quantity) - 1,
							amount: cartItem.amount - _quantity,
						}
					: cartItem;
			});

			setItems(updateCart);
		}
	};
	

    return (
		<ShoppingListContext.Provider value={{ items, addProduct, onDecrease, onRemove }}>
            {children}
        </ShoppingListContext.Provider>
    )
};

export const useShoppingCartList = () => useContext(ShoppingListContext);