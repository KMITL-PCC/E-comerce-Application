import { cacheLife, cacheTag } from "next/cache";
import { getProducts } from "../api";
import { Product } from "../types";

import Link from "next/link";

const ProductsList = async () => {
  "use cache";
  cacheLife("minutes");
  cacheTag("products");

  const products: Product[] = await getProducts();
  console.log(products);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
};
export default ProductsList;
