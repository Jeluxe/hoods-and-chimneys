import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import DummyImage320x380 from "../assets/images/dummy_320x380.png"
import "./Product.css"

interface ProductProps {
  id: string,
  name: string,
  description: string,
  image: string
}
// { id, name, description }: ProductProps
const Product = () => {
  const { productId } = useParams();
  const [productInfo, setProductInfo] = useState<ProductProps | null>(null);

  useEffect(() => {
    const fetchProduct = async (productId: string) => {
      const res = await fetch(`http://localhost:8000/products/${productId}`);
      return await res.json();
    }

    if (productId) {
      fetchProduct(productId).then((data: ProductProps) => setProductInfo(data))
    }
  }, [productId])


  if (!productInfo) {
    return <div>No data</div>
  }

  return (
    <div className="product">
      <div className="product-wrapper">
        <div className="product-image-wrapper">
          <img src={DummyImage320x380 || productInfo.image} />
        </div>
        <div className="product-info">
          <div className="product-name">{productInfo.name}</div>
          <div className="product-description">{productInfo.description}</div>
        </div>
      </div>
    </div>
  )
}

export default Product