import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom/cjs/react-router-dom.min";
import { createCard, readDeck } from "../utils/api";
import Breadcrumb from "../Breadcrumb";
import CardForm from "../CardForm";

export default function AddCard() {
  const { deckId } = useParams();

  const initialFormState = {
    front: "Front side of card",
    back: "Back side of card",
  };
  const [formData, setFormData] = useState({ ...initialFormState });
  const [deck, setDeck] = useState({});

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  useEffect(() => {
    readDeck(deckId).then((deck) => {
      setFormData(deck);
      setDeck(deck);
    });
  }, []);

  const handleSubmit = (e) => {
    console.log("handleSubmit");
    e.preventDefault();
    createCard(deckId, formData);
    setFormData({ ...initialFormState });
  };

  return (
    <div className="container">
      <Breadcrumb deck={deck} />
      <div>
        <h1>{deck.name}: Add card</h1>
        <div>
          <CardForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            deckId={deckId}
          />
        </div>
      </div>
    </div>
  );
}
