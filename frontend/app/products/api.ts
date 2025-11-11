"use server";

import { revalidateTag } from "next/cache";
import { Product } from "./types";

export async function getProducts() {
  const response = await fetch(
    "https://690a95c51a446bb9cc22f7a4.mockapi.io/products",
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products.");
  }

  const data: Product[] = await response.json();

  return data;
}

export async function getProduct(id: string) {
  const response = await fetch(
    `https://690a95c51a446bb9cc22f7a4.mockapi.io/products/${id}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch product.");
  }

  const data: Product = await response.json();
  return data;
}

export async function addProduct(product: {
  title: string;
  description: string;
}) {
  const response = await fetch(
    "https://690a95c51a446bb9cc22f7a4.mockapi.io/products",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    },
  );

  if (!response.ok) {
    throw new Error("Failed to add product.");
  }

  const data: Product = await response.json();
  revalidateTag("products", "max");

  return data;
}
