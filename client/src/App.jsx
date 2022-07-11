import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState, useNavigate } from "react";

import Navbar from "./components/Navbar/Navbar";
import MovieById from "./components/Movie/MovieById";
import HomeTop from "./components/HomeTop/HomeTop";
import Trailer from "./components/Trailer/Trailer";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound";
import AddMovie from "./components/addMovie/AddMovie";

function App() {
  const [data, setData] = useState([]);
  let navigate = useNavigate();

  // connection to backend
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(`/api/movies/`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);
  // add movie to IMDb
  const addMovie = async (e) => {
    e.preventDefault();
    const movie = {
      title: e.target.title.value,
      releaseYear: e.target.releaseYear.value,
      IMDB: e.target.imdb.value,
      photos: {
        poster: [e.target.photos_poster.value],
        cutscenes: [e.target.photos_cutscenes.value],
      },
      videos: {
        cutscenes: [e.target.cutscenes.value],
        trailers: [e.target.trailers.value],
      },
      genres: [e.target.genres.value],
      description: e.target.description.value,
      castAndCrew: {
        director: e.target.director.value,
        writers: [
          {
            name: e.target.writersName.value,
            role: e.target.writersRole.value,
          },
        ],
        actors: [
          {
            name: e.target.actorsName.value,
            character: [e.target.character.value],
            actorPhoto: e.target.actorPhoto.value,
          },
        ],
      },
    };
    await fetch("http://localhost:5050/api/movies", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(movie),
    })
      .then(() => setData([...data, movie]))
      .then(() => navigate("/", { replace: true }))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/addmovie" element={<AddMovie addMovie={addMovie} />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<HomeTop data={movies} />} />
        <Route path="/movie/:id" element={<MovieById />} />
        <Route path="/trailer" element={<Trailer data={movies} />} />
        <Route path="/trailer/:id" element={<Trailer />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
