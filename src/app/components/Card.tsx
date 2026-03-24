import Button from "./Button";
import type { ProductProps } from "../../interfaces/Product";

interface CardProps {
    product: ProductProps;
}

const Card = ({ product }: CardProps) => {
    return (
        <div className="bg-white p-3 w-36 rounded-2xl shadow-md">
            <div>
                <img className="w-full h-16 object-contain" src={`/assets/produtos/${product.image}.jpg`} alt={product.name}>
                
                </img>
            </div>
            <div className="p-2">
                <div className="flex justify-center items-center mb-2">
                   <h3 className="text-sm text-center">{product.name}</h3> 
                </div>
                <div className="flex justify-center items-center">
                    <span className="text-sm">R$ {product.price.toFixed(2)}</span>
                </div>
              
            </div>
						<Button variant="primary">
                Adicionar ao carrinho
            </Button>
        </div>
    )
};

export default Card;