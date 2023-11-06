import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom/cjs/react-router-dom.min";
import { readDeck } from "../utils/api";

export default function AddCard() {
  const { deckId } = useParams();

  const [deck, setDeck] = useState([]);

  useEffect(() => {
    readDeck(deckId).then((deck) => setDeck(deck));
  }, []);
  console.log(deck);

  function saveInfo() {
    return;
  }

  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="#">React Router</Link>
          </li>
          <li className="breadcrumb-item active">Add Card</li>
        </ol>
      </nav>
      <div>
        <h1>React Router: Add card</h1>
        <div>
          <form className="d-flex flex-column">
            <label htmlFor="frontSide">Front</label>
            <textarea
              id="frontSide"
              placeholder="Front side of card"
            ></textarea>
            <label htmlFor="backSide">Back</label>
            <textarea id="backSide" placeholder="Back side of card"></textarea>
          </form>
        </div>
      </div>
      <Link to={`/decks/${deck.id}`} className="btn btn-secondary mt-1 mr-1">
        Done
      </Link>
      <button
        type="button"
        className="btn btn-primary mt-1 mr-1"
        onClick={saveInfo}
      >
        Save
      </button>
    </div>
  );
}
