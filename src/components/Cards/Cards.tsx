import { Card } from "../"

import './Cards.css'

interface CardsProps {
  cards?: string[]
}

const Cards = ({ cards = ["dfff"] }: CardsProps) => {
  return (
    <div className="cards">
      {cards.concat(Array(10).fill(0)).map((_, idx) => <Card key={idx} id={`${idx}`} name={`חפץ ${idx}`} price={999} />)}
    </div>
  )
};

export default Cards;