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
      <p>
        {" "}
        Checkout IMDB's top rated movies. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(movieDB).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {movieDB[selectedGenre].map((movie) => (
            <li>
              {" "}
              <div> {movie.name} </div>
              <div> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}