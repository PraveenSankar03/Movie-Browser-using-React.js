import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar .js";
import Home from "./components/Home";
import AboutView from "./components/AboutView.js";
import SearchView from "./components/SearchView.js";
import MovieView from "./components/MovieView.js";
import NotFound from "./components/NotFound.js";
import { Routes, Route } from "react-router-dom";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

  useEffect(() => {
    //  console.log('Searching for the term', searchText);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchText}&language=en-US&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setSearchResults(data.results);
      });
  }, [searchText, API_KEY]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route
          path="/search"
          element={<SearchView searchText={searchText} searchResults={searchResults} />}
        />
        <Route path="/movies/:id" element={<MovieView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
