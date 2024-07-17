import { useNavigate, useParams } from 'react-router-dom';

import { displayedProductProps } from '../../types/product';
import './Card.css'

const Card = ({ product: { id, name, image, price } }: { product: displayedProductProps }) => {
  const { category } = useParams()
  const navigate = useNavigate();

  if (!category) return

  return (
    <div id={id} className="card">
      <img src={image} />
      <div className="card-footer">
        <div className="card-info">
          <div>{name}</div>
          <div>{price} ₪ </div>
        </div>
        <button onClick={() => navigate(`/${category}/${id}`)}>לפרטים</button>
      </div>
    </div>
  )
};

export default Card;