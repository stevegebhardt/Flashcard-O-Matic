import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom/cjs/react-router-dom.min";
import { createCard, readDeck } from "../utils/api";
import Breadcrumb from "../Breadcrumb";
import CardForm from "../CardForm";

export default function AddCard() {
  const { deckId } = useParams();

  const initialFormState = {
    front: "",
    back: "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  useEffect(() => {
    readDeck(deckId).then((deck) => setFormData(deck));
  }, []);

  const handleSubmit = (e) => {
    console.log("handleSubmit");
    e.preventDefault();
    createCard(deckId, formData);
    setFormData({ ...initialFormState });
  };

  return (
    <div className="container">
      <Breadcrumb />
      <div>
        <h1>React Router: Add card</h1>
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
