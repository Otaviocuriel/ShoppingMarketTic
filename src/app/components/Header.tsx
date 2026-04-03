import Input from "./input";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ChangeEvent } from "react";
import { useQuery } from "react-query";
import ProductService from "../services/product.service";
import { CiShoppingCart } from "react-icons/ci";
import type { ProductProps } from "../interfaces/Product";
import { debounce } from "lodash";
import List from "./List";
import { useOnClickOutside } from "../hooks/useClickOutside";

type HeaderProps = {
	onSearchChange?: (value: string) => void;
};

const Header = ({ onSearchChange }: HeaderProps) => {
	const [productName, setProductName] = useState("");
	const[isOpen, setIsOpen] = useState(false);
	const refDropdown = useRef<HTMLUListElement>(null);


	const { data: productByName } = useQuery<ProductProps[], Error>(["query-product-by-name", productName], async () => {
		return ProductService.searchName(productName);
	},{
		enabled: productName.length > 0,
		onSuccess:(res) => {
			setIsOpen(res?.length > 0);
		},
	},

);

	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setProductName(value);
	};

	useOnClickOutside(refDropdown,() => {
		setIsOpen(false);
	});

	const debounceHandleOnChange = useMemo(() => debounce(handleInput, 500), []);

	useEffect(() => {
		onSearchChange?.(productName);
	}, [onSearchChange, productName]);

	useEffect(() => {
		return () => {
			debounceHandleOnChange.cancel();
		};
	}, [debounceHandleOnChange]);


 return (
		<header className="fixed top-0 right-0 z-20 flex w-full justify-center border-b border-[#d9d3c2] bg-[#e8e2cf]/95 py-3 backdrop-blur-sm">
			<div className="mx-auto flex w-[min(1120px,92%)] items-center justify-between gap-8">
        <div>
            <a href="/">
                <img
                  src="/assets/logo.png"
                  alt="Company Logo"
                  className="max-w-36 drop-shadow-sm"
                />
            </a>
        </div>
		<div className="relative w-4/5">
					<Input onChange={debounceHandleOnChange} />
					{isOpen && 
					<ul 
					ref={refDropdown}
					className="absolute z-50 mt-3 max-h-64 w-full overflow-auto rounded-xl border border-[#dfd8c6] bg-[#fcfaf2] p-1 shadow-xl shadow-black/10">
						{
							productByName?.map((product: ProductProps) => {
								return <List key={product.id} className="items-center justify-between rounded-lg px-3 py-2">
										{product.name}
								<div>
										<img src={`/assets/produtos/${product.image}.jpg`}
										className="h-12 w-12 rounded-md object-cover mix-blend-multiply"
										alt={product.name}
										/>
												<span className="ml-2 text-sm font-semibold text-[#2f2f2f]">R$
													{product.price}
												</span>
								</div>
								</List>;
								
							
							})
					  }	
					</ul>
					}
					
        </div>
				<a href="/ShoppingCart">
					<CiShoppingCart className="h-12 w-20"/>
				</a>
      </div>
    </header>
  );
};

export default Header;