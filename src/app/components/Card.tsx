import type { Product, ProductProps } from "../../interfaces/Product";

type CardProps = {
  product: ProductProps;
};

const Card = ({item}: Product) => {
  return (
    <div className="flex flex-col items-center justify-center p-2 text-center">
      <div className="flex flex-col items-center justify-center">
        <img
          src={`/assets/produtos/${item.image}.jpg`}
          className="h-auto w-48 object-contain"
          alt={item.name}
        />
        <h2 className="mt-6 text-lg font-semibold capitalize text-[#1f1f1f]">{item.name}</h2>
        <p className="mt-1 text-lg font-medium text-[#2f2f2f]">R$ {item.price.toFixed(2)}</p>
        <button className="mt-4 rounded bg-blue-600 px-7 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
          Adicionar no Carrinho
        </button>
      </div>
    </div>
  );
};

export default Card;