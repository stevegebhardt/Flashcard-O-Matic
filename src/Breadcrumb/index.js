import React from "react";
import { useLocation, Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Breadcrumb({ deck, cardId }) {
  const { pathname } = useLocation();
  console.log("deck", deck);
  console.log("cardId", cardId);

  return (
    <React.Fragment>
      {pathname === `/decks/${deck.id}/cards/${cardId}/edit` ? (
        <React.Fragment>
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
        </React.Fragment>
      ) : pathname === "/decks/new" ? (
        <React.Fragment>
          <nav></nav>
        </React.Fragment>
      ) : pathname === `/decks/${deck.id}/study` ? (
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
        </React.Fragment>
      ) : pathname === "/decks/:deckId" ? (
        <React.Fragment>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">React Router</li>
            </ol>
          </nav>
        </React.Fragment>
      ) : pathname === "/decks/:deckId/edit" ? (
        <React.Fragment>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="#">{deck.name}</Link>
              </li>
              <li className="breadcrumb-item active">Edit Deck</li>
            </ol>
          </nav>
        </React.Fragment>
      ) : pathname === "/decks/:deckId/cards/new" ? (
        <React.Fragment>
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
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}
