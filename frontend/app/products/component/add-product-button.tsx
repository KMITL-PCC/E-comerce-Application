"use client";

import { Button } from "@/components/ui/button";
import { addProduct } from "../api";

const AddProductButton = () => {
  const product = {
    title: "Papel de Parede",
    description: "descrição do papel de pareded",
  };

  const handleAddProduct = async () => {
    const res = await addProduct(product);
    console.log("added product", res);
  };

  return <Button onClick={handleAddProduct}>Add product</Button>;
};
export default AddProductButton;
