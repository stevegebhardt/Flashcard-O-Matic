import React, { useState, useEffect } from "react";
import {
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import { readCard, readDeck, updateCard } from "../utils/api";
import CardForm from "../CardForm";

export default function CardEdit({ Breadcrumb }) {
  const { deckId, cardId } = useParams();
  const history = useHistory();

  const [deck, setDeck] = useState({});

  const [formData, setFormData] = useState({});

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCard(formData).then(() => history.push(`/decks/${deckId}`));
  };

  useEffect(() => {
    readDeck(deckId)
      .then((deck) => setDeck(deck))
      .catch((err) => console.log(err));
    readCard(cardId)
      .then((card) => {
        setFormData(card);
      })
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
          <CardForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            deckId={deckId}
          />
        </div>
      </section>
    </div>
  );
}
