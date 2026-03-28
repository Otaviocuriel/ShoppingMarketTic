import type { ProductProps } from "../../interfaces/Product";

type CardProps = {
  product: ProductProps;
};

const Card = ({ product }: CardProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-lg p-8 w-80">
        <img src={`/assets/produtos/${product.image}.jpg`} className="w-full h-64 object-cover rounded-lg" />
        <h2 className="mt-4 text-center text-lg font-semibold">{product.name}</h2>
        <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default Card;