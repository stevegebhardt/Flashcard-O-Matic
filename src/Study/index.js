import React, { useState, useEffect } from "react";
import { readDeck } from "../utils/api";
import { useParams, Link, useHistory } from "react-router-dom";

function Study() {
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
  }, []);

  function restartAlert() {
    let text = "Restart cards?\n\nClick 'cancel' to return to the home page.";
    if (confirm(text) == true) {
      setIndex(0);
      setShowFront(true);
    } else {
      history.push("/");
    }
  }

  console.log("cards", cards);
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
      <div>
        {cards.length ? (
          <React.Fragment>
            {cards.length <= 2 ? (
              <React.Fragment>
                <h1>React Router: Study</h1>
                <h2>Not enough cards</h2>
                <p>
                  You need at least 3 cards to study. There are {cards.length}{" "}
                  cards in this deck.
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
                  <React.Fragment>
                    <h1>{cards[index].front}</h1>
                    <button onClick={() => setShowFront(!showFront)}>
                      Flip
                    </button>
                    {index !== cards.length - 1 ? (
                      <button onClick={() => setIndex(index + 1)}>Next</button>
                    ) : null}
                  </React.Fragment>
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
          </React.Fragment>
        ) : null}
      </div>
    </React.Fragment>
  );
}

export default Study;
