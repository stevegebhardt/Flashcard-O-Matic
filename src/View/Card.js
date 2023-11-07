import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { deleteCard } from "../utils/api";

export default function Card({ card }) {
  function deleteAlert() {
    let text = "Delete this card?\n\nYou will not be able to recover it.";
    if (window.confirm(text) == true) {
      deleteCard(card.id);
    }
  }

  return (
    <div className="d-flex border border-secondary p-3">
      <div className="w-50">
        <p>{card.front}</p>
      </div>
      <div className="d-flex flex-column w-50">
        <div>{card.back}</div>
        <div className="align-self-end">
          <Link
            to={`/decks/${card.deckId}/cards/${card.id}/edit`}
            className="btn btn-secondary m-1"
          >
            Edit
          </Link>
          <button
            onClick={deleteAlert}
            type="button"
            className="btn btn-danger m-1"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
