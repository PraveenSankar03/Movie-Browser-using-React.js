import { useState, useEffect } from "react";
import Hero from "./Hero";
import { useParams } from "react-router-dom";

const MovieView = () => {
  const { id } = useParams();
  // console.log(id)

  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setLoading(false);
      });
    console.log("Making an API request for Movie id", id);
  }, [id, API_KEY]);

 const posterURL = `https://image.tmdb.org/t/p/w200//${movieDetails.poster_path}.jpg`;
 const backdropURL =`https://image.tmdb.org/t/p/original//${movieDetails.backdrop_path}`
  function renderMovieDetails() {
    if (loading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails) {
      return (
        <>
          <Hero text={movieDetails.original_title} backdrop ={backdropURL} />
          <div className="container my-4">
            <div className="row">
              <div class="col-md-3">
                <img src={posterURL} alt={movieDetails.original_title} className="img-fluid shadow rounded" />
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">{movieDetails.overview}</p>
                <p className="lead">Released : {movieDetails.release_date}</p>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
  return renderMovieDetails();
};


export default MovieView;
