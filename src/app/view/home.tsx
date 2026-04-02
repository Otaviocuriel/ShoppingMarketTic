import Card from "../components/Card";
import ProductService from "../../services/product.service";
import type { ProductProps } from "../../interfaces/Product";
import { useQuery } from "react-query";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const menuListVariants = "absolute z-10 mt-1 w-48 rounded-md bg-white py-1 shadow-lg";

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
    class: "flex justify-center w-full"
  },
  {
    value: "asc",
    name: "Menor preço",
    class: "flex justify-center w-full"
  },
];

  const { data: products } = useQuery<ProductProps[], Error>("query-products", async () => {
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
    ? "flex items-center flex-col absolute top-60 bg-white rounded-md p-4 shadow-lg shadow-black w-44":
     "hidden")

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredProducts = products?.filter((product) => {
    return product.name.toLowerCase().includes(normalizedSearch);
  });

  return (
		<div className="mt-24 flex w-full flex-col items-center px-4 pb-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col items-center">
        <button className="mb-1 w-24 rounded-sm bg-blue-600 py-1 text-xs font-medium text-white" onClick={() => handleFilterButton()}>
          Filtro
        </button>
        <ul className={menuListClasses}>
          {listOptionsFilter.map((item) => {
            return (
              <li key={item.name} className={item.class} onClick={(e) => {e.stopPropagation(); handleFilter(item.value); setIsOpenMenu(false)}} >
                <button type="button" className="text-xs hover:underline" onClick={() => setTypeFilter(item.value)}>
                  {item.name}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    <div className="grid w-full max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {filteredProducts?.map((product) => {
        return <Card key={product.id} item={product} />;
      })}
    </div>
		</div>
  );
};

export default Home;