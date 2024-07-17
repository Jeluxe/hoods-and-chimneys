import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom";

import { ProductProps } from "../types";
import DummyImage320x380 from "../assets/images/dummy_320x380.png"
import "./Product.css"

const Product = () => {
  const { category, productId } = useParams<string>();
  const mainRef = useRef<HTMLImageElement>(null)
  const placeholderRef = useRef<HTMLImageElement>(null)
  const [productInfo, setProductInfo] = useState<ProductProps | null>(null);

  useEffect(() => {
    const fetchProduct = async ({ category, productId }: { category: string, productId: string }) => {
      const res = await fetch(`http://localhost:8000/${category}/${productId}`);
      return await res.json();
    }

    if (category && productId) {
      fetchProduct({ category, productId }).then((data: ProductProps) => setProductInfo(data))
    }
  }, [category, productId])


  if (!productInfo) {
    return <div>No data</div>
  }

  const onImageLoad = () => {
    setTimeout(() => {
      if (!placeholderRef.current || !mainRef.current) return;
      placeholderRef.current.style.display = 'none';
      mainRef.current.style.display = 'block';
    }, 3000);
  }


  return (
    <div className="product">
      <div className="product-wrapper">
        <div className="product-image-wrapper">
          <img ref={placeholderRef} id="placeholder" src={DummyImage320x380} alt="Placeholder" style={{ display: "block" }} />
          <img ref={mainRef} id="main-image" src={productInfo.image} onLoad={onImageLoad} style={{ display: "none" }} />
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