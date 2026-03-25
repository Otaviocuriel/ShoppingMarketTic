import type { ProductProps } from "../../interfaces/Product";

type CardProps = {
  product: ProductProps;
};

const Card = ({ product }: CardProps) => {
  return (
    <img src={product.image} />
  );
};

export default Card;