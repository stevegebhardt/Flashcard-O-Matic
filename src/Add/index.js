import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom/cjs/react-router-dom.min";
import { createCard, readDeck } from "../utils/api";
import Breadcrumb from "../Breadcrumb";

export default function AddCard() {
  const { deckId } = useParams();

  const [deck, setDeck] = useState({ front: "", back: "" });
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
    readDeck(deckId).then((deck) => setDeck(deck));
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
          <form className="d-flex flex-column" onSubmit={handleSubmit}>
            <label htmlFor="front">Front</label>
            <textarea
              id="front"
              name="front"
              placeholder="Front side of card"
              onChange={handleChange}
              value={formData.front}
            ></textarea>
            <br />
            <label htmlFor="back">Back</label>
            <textarea
              id="back"
              name="back"
              placeholder="Back side of card"
              onChange={handleChange}
              value={formData.back}
            ></textarea>
            <Link
              to={`/decks/${deck.id}`}
              className="btn btn-secondary mt-1 mr-1"
            >
              Done
            </Link>
            <button type="submit" className="btn btn-primary mt-1 mr-1">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
