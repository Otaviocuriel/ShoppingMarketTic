import Input from "./input";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ChangeEvent } from "react";
import { useQuery } from "react-query";
import ProductService from "../../services/product.service";
import type { ProductProps } from "../../interfaces/Product";
import { debounce } from "lodash";
import List from "./List";
import { useOnClickOutside } from "../hooks/useClickOutside";

type HeaderProps = {
	onSearchChange: (value: string) => void;
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
		onSearchChange(productName);
	}, [onSearchChange, productName]);

	useEffect(() => {
		return () => {
			debounceHandleOnChange.cancel();
		};
	}, [debounceHandleOnChange]);


 return (
    <header className="fixed top-0 right-0 z-10 flex w-full justify-center bg-[#e9e2d1] py-3">
      <div className=" mx-auto flex w-[min(1100px,92%)] items-center justify-between gap-10">
        <div>
            <a href="/">
                <img
                  src="/assets/logo.png"
                  alt="Company Logo"
                  className="max-w-36"
                />
            </a>
        </div>
		<div className="w-4/5 relative">
					<Input onChange={debounceHandleOnChange} />
					{isOpen && 
					<ul 
					ref={refDropdown}
					className="absolute z-50 mt-4 max-h-60 w-full overflow-auto rounded-md bg-white shadow-lg">
						{
							productByName?.map((product: ProductProps) => {
								return <List className="items-center justify-between">
										{product.name}
								<div>
										<img src={`http://localhost:5173/public/assets/produtos/${product.image}.jpg`}
										className="h-20 rounded-t-lg object-cover"
										/>
												<span>R$
													{product.price}
												</span>
								</div>
								</List>;
								
							
							})
					  }	
					</ul>
					}
					
        </div>
        <div className="w-24 text-right font-semibold text-[#2f2f2f]">Carrinho</div>
      </div>
    </header>
  );
};

export default Header;