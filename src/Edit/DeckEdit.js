import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { readDeck, updateDeck } from "../utils/api";
import Breadcrumb from "../Breadcrumb";
import DeckForm from "../DeckForm/DeckForm";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export default function DeckEdit() {
  const history = useHistory();

  const { deckId } = useParams();

  const [formData, setFormData] = useState({});

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateDeck(formData).then(() => history.push("/"));
  };

  useEffect(() => {
    readDeck(deckId)
      .then((deck) => setFormData(deck))
      .catch((err) => console.log(err));
  }, [deckId]);

  return (
    <div>
      <section>{/* <Breadcrumb deck={deck} /> */}</section>
      <section>
        <h1>Edit Deck</h1>
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
