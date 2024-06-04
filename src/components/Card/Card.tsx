import './Card.css'

interface CardProps {
  id: string;
  name: string;
  price: number;
  image?: string;
}

const Card = ({ id, name, price, image }: CardProps) => {
  return (
    <div id={id} className="card">
      <img src={image} />
      <div className="card-footer">
        <div className="card-info">
          <div>{name}</div>
          <div>{price} ₪ </div>
        </div>
        <button>לפרטים</button>
      </div>
    </div>
  )
};

export default Card;