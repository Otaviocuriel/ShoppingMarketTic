import type { Product } from "../../interfaces/Product";

const Card = ({item}: Product) => {
  return (
    <div className="mx-auto flex h-full w-full max-w-72 rounded-2xl border border-[#e4dfd0] bg-[#f8f4e8] p-3 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex w-full flex-col items-center text-center">
        <img
          src={`/assets/produtos/${item.image}.jpg`}
          className="h-36 w-full rounded-xl object-contain"
          alt={item.name}
        />
        <h2 className="mt-5 min-h-[3.25rem] text-xl font-semibold leading-6 capitalize text-[#202020]">{item.name}</h2>
        <p className="mt-2 text-xl font-medium text-[#2f2f2f]">R$ {item.price.toFixed(2)}</p>
        <button className="mt-5 w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
          Adicionar no Carrinho
        </button>
      </div>
    </div>
  );
};

export default Card;