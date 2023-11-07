import React, { useState } from "react";
import DeckEdit from "../Edit/DeckEdit";
import DeckForm from "../DeckForm/DeckForm";
import { createDeck } from "../utils/api";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export default function NewDeck({ Breadcrumb }) {
  const history = useHistory();

  const initialFormState = {
    name: "Deck Name",
    description: "Brief description of the deck",
  };
  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createDeck(formData).then((deck) => history.push(`/decks/${deck.id}`));
  };

  return (
    <div className="w-75">
      {/* <Breadcrumb /> */}
      <section>
        <h1>Create Deck</h1>
        <div>
          <DeckForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </section>
    </div>
  );
}
