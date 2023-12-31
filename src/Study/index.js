import React, { useState, useEffect } from "react";
import { readDeck } from "../utils/api";
import { useParams, Link, useHistory } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";

export default function Study() {
  const { deckId } = useParams();
  const history = useHistory();

  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);
  const [index, setIndex] = useState(0);
  const [showFront, setShowFront] = useState(true);

  useEffect(() => {
    readDeck(deckId)
      .then((deck) => {
        setDeck(deck);
        setCards(deck.cards);
      })
      .catch((err) => console.log(err));
  }, [deckId]);

  function restartAlert() {
    let text = "Restart cards?\n\nClick 'cancel' to return to the home page.";
    if (window.confirm(text) == true) {
      setIndex(0);
      setShowFront(true);
    } else {
      history.push("/");
    }
  }

  return (
    <React.Fragment>
      <Breadcrumb deck={deck} />
      <div>
        <h1>Study: {deck.name}</h1>
      </div>
      <div>
        {cards.length < 2 ? (
          <React.Fragment>
            <h1>React Router: Study</h1>
            <h2>Not enough cards</h2>
            <p>
              You need at least 3 cards to study. There are {cards.length} cards
              in this deck.
            </p>
            <Link
              to={`/decks/${deck.id}/cards/new`}
              className="btn btn-primary"
            >
              Add Cards
            </Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {showFront ? (
              <div className="border border-secondary">
                <h2>
                  Card {index + 1} of {cards.length}
                </h2>
                <p>{cards[index].front}</p>
                <button onClick={() => setShowFront(!showFront)}>Flip</button>
                {index === 0 || index === cards.length - 1 ? null : (
                  <button onClick={() => setIndex(index + 1)}>Next</button>
                )}
              </div>
            ) : (
              <React.Fragment>
                <h1>{cards[index].back}back</h1>
                {index !== cards.length - 1 ? (
                  <button
                    onClick={() => {
                      setIndex(index + 1);
                      setShowFront(!showFront);
                    }}
                  >
                    Next
                  </button>
                ) : (
                  <button onClick={restartAlert}>Next</button>
                )}
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}
