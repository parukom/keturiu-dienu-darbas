import { Link } from "react-router-dom";
import "./AddMovie.css";

const AddMovieButton = () => {
  return (
    <>
      <Link to={`/addmovie`}>
        <button className="addButtonButton">
          <span className="addButtonSpan">add</span>
          <span className="addMovieSpan">MOVIE</span>
        </button>
      </Link>
    </>
  );
};

export default AddMovieButton;
