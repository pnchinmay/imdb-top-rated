import React from "react";
import "./styles.css";
import { useState } from "react";

const movieDB = {
  "Sci-Fi": [
    { name: "Inception", rating: "8.8/10" },
    { name: "The Matrix", rating: "8.7/10" },
    {
      name: "Star Wars: Episode V - The Empire Strikes Back",
      rating: "8.7/10"
    },
    { name: "Interstellar", rating: "8.6/10" },
    { name: "Star Wars: Episode IV - A New Hope", rating: "8.6/10" }
  ],

  Thriller: [
    { name: "Mirror Game", rating: "9.1/10" },
    { name: "The Dark Knight", rating: "9.0/10" },
    { name: "Inception", rating: "8.8/10" },
    { name: "Parasite", rating: "8.6/10" },
    { name: "Drishyam 2", rating: "8.6/10" }
  ],
  Action: [
    { name: "The Dark Knight", rating: "9.0/10" },
    { name: "The Lord of the Rings: The Return of the King", rating: "8.9/10" },
    { name: "Inception", rating: "8.8/10" },
    {
      name: "The Lord of the Rings: The Fellowship of the Ring",
      rating: "8.8/10"
    },
    { name: "Shersaah", rating: "8.7/10" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Sci-Fi");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🎬 IMDB's Movie Recommendations </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout IMDB's top rated movies. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(movieDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieDB[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                border: "1px solid #000000",
                width: "90%"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}