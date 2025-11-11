import { getProduct } from "../api";
import { Product } from "../types";

const ProductCard = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const product: Product = await getProduct(id);

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </div>
  );
};
export default ProductCard;
