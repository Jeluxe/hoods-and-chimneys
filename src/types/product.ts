export interface ProductProps {
  id: string,
  name: string,
  description: string,
  price: number,
  categories: string[]
  image: string
}

export type FilterOptions = {
  type: { id: string, name: string, checked: boolean }[],
  price: { min: number, max: number }
}

export type displayedProductProps = Omit<ProductProps, "description">

export type Category = "hoods" | "chimneys" | "filters"

export type ProductParams = { category: Category, productId: string }