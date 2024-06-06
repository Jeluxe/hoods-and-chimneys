export interface ProductProps {
  id: string,
  name: string,
  description: string,
  price: number,
  image: string
}

export type displayedProductProps = Omit<ProductProps, "description">