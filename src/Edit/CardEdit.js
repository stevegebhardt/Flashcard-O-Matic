import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { readCard, readDeck, updateCard } from "../utils/api";

export default function CardEdit({ Breadcrumb }) {
  const { deckId, cardId } = useParams();

  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({});

  const initialFormState = {
    front: "",
    back: "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCard(formData);
    setFormData({ ...initialFormState });
  };

  useEffect(() => {
    readDeck(deckId)
      .then((deck) => setDeck(deck))
      .catch((err) => console.log(err));
    readCard(cardId)
      .then((card) => setCard(card))
      .catch((err) => console.log(err));
  }, [deckId]);

  return (
    <div className="container w-75">
      <section>
        <Breadcrumb deck={deck} cardId={cardId} />
      </section>
      <section>
        <h1>Edit Card</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="front">Front</label>
              <textarea
                id="front"
                name="front"
                placeholder={`${card.front}`}
                className="w-100"
                onChange={handleChange}
                value={formData.front}
              ></textarea>
            </div>
            <br />
            <div>
              <label htmlFor="back">Back</label>
              <textarea
                id="back"
                name="back"
                placeholder={`${card.back}`}
                className="w-100"
                onChange={handleChange}
                value={formData.back}
              ></textarea>
            </div>
            <Link to={`/decks/${deckId}`} className="btn btn-secondary m-1">
              Cancel
            </Link>
            <button type="submit" className="btn btn-primary m-1">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
