import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { readDeck } from "../utils/api";
import Card from "./Card";

function View() {
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
  }, [deckId]);

  function deleteAlert() {
    let text = "Delete this deck?\n\nYou will not be able to recover it.";
    if (window.confirm(text) == true) {
      // need to get deleteDeck working....
      deleteDeck(deckId);
    }
  }

  return (
    <React.Fragment>
      <div className="container w-75">
        <div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">React Router</li>
            </ol>
          </nav>
        </div>
        <div>
          <h1>{deck.name}</h1>
          <p>{deck.description}</p>
          <div className="d-flex justify-content-between">
            <div>
              <Link
                to={`/decks/${deckId}/edit`}
                className="btn btn-secondary m-1"
              >
                Edit
              </Link>
              <Link
                to={`/decks/${deckId}/study`}
                className="btn btn-primary m-1"
              >
                Study
              </Link>
              <Link
                to={`/decks/${deckId}/cards/new`}
                className="btn btn-primary m-1"
              >
                Add Cards
              </Link>
            </div>
            <button
              onClick={deleteAlert}
              type="button"
              className="btn btn-danger m-1"
            >
              Delete
            </button>
          </div>
        </div>
        <section>
          <h1>Cards</h1>
          <div>
            {cards.map((card) => (
              <Card card={card} key={card.id} />
            ))}
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default View;
