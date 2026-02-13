import Hero from "./Hero.js";
import { Link } from "react-router-dom";

const MovieCard = ({ obj }) => {
  const detailsURL = `/movies/${obj.id}`;
  const posterURL = `https://image.tmdb.org/t/p/original//${obj.poster_path}.jpg`;
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img
          src={posterURL}
          className="card-img-top img-fluid"
          alt={obj.original_title}
        />
        <div className="card h-100 shadow-sm">
          <h5 className="card-title">{obj.original_title}</h5>
          <Link to={detailsURL} className="btn btn-primary">
            {" "}
            show details{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ searchText, searchResults }) => {
  const title = `You are searching for '${searchText}'`;

  const results = searchResults.map((obj, i) => {
    return <MovieCard obj={obj} key={i} />;
  });
  return (
    <>
      <Hero text={title} />
      {results && (
        <div className="container">
          <div className="row">{results}</div>
        </div>
      )}
    </>
  );
};
export default SearchView;
