import { ProductParams, Category } from "../types/product";

export const fetchProducts = async (category: Category) => {
  const res = await fetch(`http://localhost:8000/${category}`);

  if (res.status === 404) {
    return null
  }
  return await res.json();
}

export const fetchProduct = async ({ category, productId }: ProductParams) => {
  const res = await fetch(`http://localhost:8000/${category}/${productId}`);

  if (res.status === 404) {
    return null
  }
  return await res.json();
}