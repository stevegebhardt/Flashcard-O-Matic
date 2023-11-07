import React from "react";
import { Link } from "react-router-dom";

export default function DeckForm({ formData, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex flex-column">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          onChange={handleChange}
          value={formData.name}
        ></input>
      </div>
      <br />
      <div className="d-flex flex-column">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          value={formData.description}
        ></textarea>
      </div>
      <Link to="/" className="btn btn-secondary m-1">
        Cancel
      </Link>
      <button type="submit" className="btn btn-primary m-1">
        Submit
      </button>
    </form>
  );
}
