import { Suspense } from "react";

import ProductsList from "./component/products-list";
// import AddProductButton from "./component/add-product-button";

const CatalogPage = async () => {
  return (
    <div>
      <h1>Products</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsList />
      </Suspense>
      {/* <AddProductButton /> */}
    </div>
  );
};

export default CatalogPage;
