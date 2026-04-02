import Card from "../components/Card";
import ProductService from "../../services/product.service";
import type { ProductProps } from "../../interfaces/Product";
import { useQuery } from "react-query";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const menuListVariants = "absolute z-10 mt-2 w-52 rounded-xl border border-[#d8d2c2] bg-[#fbf8ee] p-2 shadow-xl shadow-black/10";

type HomeProps = {
  searchTerm: string;
};

const Home = ({ searchTerm }: HomeProps) => {
  const[typeFilter,setTypeFilter] = useState("");
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const listOptionsFilter = [
    {
    value: "desc",
    name: "Maior preço",
    class: "flex w-full justify-center"
  },
  {
    value: "asc",
    name: "Menor preço",
    class: "flex w-full justify-center"
  },
];

  const { data: products } = useQuery<ProductProps[], Error>(["query-products", typeFilter], async () => {
    return ProductService.findAll(typeFilter);
  });

  const handleFilter = (value: string) => {
    setTypeFilter(value);
  };

  const handleFilterButton = () => {
    setIsOpenMenu(!isOpenMenu);
  }

  const menuListClasses = twMerge(menuListVariants,
   isOpenMenu
    ? "absolute right-0 top-10 flex w-44 flex-col items-center gap-2":
     "hidden")

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredProducts = products?.filter((product) => {
    return product.name.toLowerCase().includes(normalizedSearch);
  });

  return (
		<div className="mt-24 flex w-full flex-col items-center px-4 pb-10 sm:px-6 lg:px-8">
      <div className="relative mb-8 flex w-4/5 flex-col items-end">
        <button className="mb-5 w-20 rounded-md border border-blue-700 bg-blue-600 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700" onClick={() => handleFilterButton()}>
          Filtro
        </button>
        <ul className={menuListClasses}>
          {listOptionsFilter.map((item) => {
            return (
              <li key={item.name} className={item.class} onClick={(e) => {e.stopPropagation(); handleFilter(item.value); setIsOpenMenu(false)}} >
                <button type="button" className="w-full rounded-md px-3 py-2 text-center text-xs font-medium text-[#2f2f2f] transition hover:bg-[#ece6d6]" onClick={() => setTypeFilter(item.value)}>
                  {item.name}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    <div className="grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {filteredProducts?.map((product) => {
        return <Card key={product.id} item={product} />;
      })}
    </div>
		</div>
  );
};

export default Home;