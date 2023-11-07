import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function CardForm({
  formData,
  handleChange,
  handleSubmit,
  deckId,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="front">Front</label>
        <textarea
          id="front"
          name="front"
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
  );
}
