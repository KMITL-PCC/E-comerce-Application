import { Suspense } from "react";

import ProductDetailsCard from "../component/product-card";
import { Loader2 } from "lucide-react";

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  return (
    <div>
      <h1>Product Details</h1>
      <Suspense
        fallback={
          <div>
            <Loader2 className="h-4 w-4 animate-spin" />
            Loading...
          </div>
        }
      >
        <ProductDetailsCard params={params} />
      </Suspense>
      <br />
    </div>
  );
};
export default ProductPage;
