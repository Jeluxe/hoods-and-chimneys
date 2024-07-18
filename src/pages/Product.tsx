import { useRef, } from "react"
import { Navigate, useLoaderData, } from "react-router-dom";

import DummyImage320x380 from "../assets/images/dummy_320x380.png"
import { ProductProps } from "../types/product";
import "./Product.css"

const Product = () => {
  const productInfo = useLoaderData() as ProductProps;
  const mainRef = useRef<HTMLImageElement>(null)
  const placeholderRef = useRef<HTMLImageElement>(null)

  const onImageLoad = () => {
    setTimeout(() => {
      if (!placeholderRef.current || !mainRef.current) return;
      placeholderRef.current.style.display = 'none';
      mainRef.current.style.display = 'block';
    }, 3000);
  }

  if (!productInfo) {
    return <Navigate to={"/404"} replace />
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