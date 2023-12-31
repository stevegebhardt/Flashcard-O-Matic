import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import { deleteDeck, listDecks } from "../utils/api";

export default function Home() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    listDecks().then((data) => setDecks(data));
  }, []);

  function deleteAlert(deckId) {
    let text = "Delete this deck?\n\nYou will not be able to recover it.";
    if (window.confirm(text) == true) {
      // need to get deleteDeck working....
      deleteDeck(deckId);
    }
  }

  return (
    <React.Fragment>
      <div className="container w-50">
        <Link to="/decks/new" className="btn btn-secondary m-1">
          Create Deck
        </Link>
        <div className="">
          {decks.map((deck) => {
            return (
              <div
                className="container border border-secondary m-1"
                key={deck.id}
              >
                <div className="d-flex justify-content-between">
                  <div>
                    <h2>{deck.name}</h2>
                  </div>
                  <div>
                    <p>{deck.cards && deck.cards.length} cards</p>
                  </div>
                </div>
                <div>
                  <p>{deck.description}</p>
                </div>
                <div className="d-flex justify-content-between m-1">
                  <div>
                    <Link
                      to={`/decks/${deck.id}`}
                      className="btn btn-secondary m-1"
                    >
                      View
                    </Link>
                    <Link
                      to={`/decks/${deck.id}/study`}
                      className="btn btn-primary m-1"
                    >
                      Study
                    </Link>
                  </div>
                  <div>
                    <button
                      onClick={() => deleteAlert(deck.id)}
                      className="btn btn-danger m-1"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
