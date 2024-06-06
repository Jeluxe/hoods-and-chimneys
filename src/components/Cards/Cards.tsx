import { Card } from "../"
import { displayedProductProps } from "../../types";
import './Cards.css'

const Cards = ({ products }: { products: displayedProductProps[] }) => {
  return (
    <div className="cards">
      {products?.map((product, idx) => <Card key={idx} product={product} />)}
    </div>
  )
};

export default Cards;