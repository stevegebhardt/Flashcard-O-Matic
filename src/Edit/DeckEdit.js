import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { readDeck } from "../utils/api";

export default function DeckEdit() {
  const { deckId } = useParams();

  const [deck, setDeck] = useState({});

  useEffect(() => {
    readDeck(deckId)
      .then((deck) => setDeck(deck))
      .catch((err) => console.log(err));
  }, [deckId]);

  return (
    <div>
      <section>
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
      </section>
      <section>
        <h1>Edit Deck</h1>
        <div></div>
      </section>
    </div>
  );
}
