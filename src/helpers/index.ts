import { fetchProduct, fetchProducts } from "../api/product";
import { Category, ProductParams } from "../types/product";

export const productsLoader = (params: { category: Category }) => {
  const { category } = params;

  if (category) {
    return fetchProducts(category)
  }
}

export const productLoader = (params: ProductParams) => {
  const { category, productId } = params;

  if (category && productId) {
    if (/[!@#$%^&*)(+=._-]/g.test(productId)) {
      return null
    }

    return fetchProduct({ category, productId })
  }
}