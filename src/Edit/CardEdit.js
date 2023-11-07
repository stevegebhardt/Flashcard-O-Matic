import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { readCard, readDeck } from "../utils/api";

export default function CardEdit() {
  const { deckId, cardId } = useParams();

  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({});

  useEffect(() => {
    readDeck(deckId)
      .then((deck) => setDeck(deck))
      .catch((err) => console.log(err));
    readCard(cardId)
      .then((card) => setCard(card))
      .catch((err) => console.log(err));
  }, [deckId]);

  return (
    <div className="container w-75">
      <section>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="#">{deck.name}</Link>
            </li>
            <li className="breadcrumb-item active">Edit Card {cardId}</li>
          </ol>
        </nav>
      </section>
      <section>
        <h1>Edit Card</h1>
        <div>
          <form>
            <div>
              <label htmlFor="front">Front</label>
              <textarea
                id="front"
                name="front"
                placeholder={`${card.front}`}
                className="w-100"
              ></textarea>
            </div>
            <br />
            <div>
              <label htmlFor="back">Back</label>
              <textarea
                id="back"
                name="back"
                placeholder={`${card.back}`}
                className="w-100"
              ></textarea>
            </div>
            <Link to={`/decks/${deckId}`} className="btn btn-secondary m-1">
              Cancel
            </Link>
            <button type="submit" className="btn btn-primary m-1">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
