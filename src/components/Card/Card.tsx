import { useNavigate } from 'react-router-dom';

import { displayedProductProps } from '../../types';
import './Card.css'

const Card = ({ product: { id, name, image, price } }: { product: displayedProductProps }) => {
  const navigate = useNavigate();

  return (
    <div id={id} className="card">
      <img src={image} />
      <div className="card-footer">
        <div className="card-info">
          <div>{name}</div>
          <div>{price} ₪ </div>
        </div>
        <button onClick={() => navigate(`/products/${id}`)}>לפרטים</button>
      </div>
    </div>
  )
};

export default Card;