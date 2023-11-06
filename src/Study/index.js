import React, { useState, useEffect } from "react";
import { readDeck } from "../utils/api";
import { useParams, Link } from "react-router-dom/cjs/react-router-dom.min";

function Study() {
  const { deckId } = useParams();

  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    readDeck(deckId)
      .then((deck) => {
        setDeck(deck);
        setCards(deck.cards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="#">{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active">Study</li>
        </ol>
      </nav>
      <div>
        <h1>Study: {deck.name}</h1>
      </div>
      {cards.map((card) => (
        <p key={card.id}>{card.front}</p>
      ))}
    </React.Fragment>
  );
}

export default Study;
