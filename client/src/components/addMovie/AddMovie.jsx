import { useState } from "react";
import "./AddMovie.css";

const AddMovie = ({ addMovie }) => {
  const [checked, setChecked] = useState(false);
  const agreementAgree = () => {
    setChecked(!checked);
  };
  return (
    <div className="formMainDiv">
      <form onSubmit={addMovie}>
        {/* main */}
        <div className="addMovieLeft ">
          <div>
            <label>title</label>
            <br />
            <input
              className="formosInputas"
              type="text"
              name="title"
              placeholder="Title of movie"
            />{" "}
            <br />
            <input
              className="formosInputas"
              type="number"
              name="releaseYear"
              placeholder="Release Year"
              min="1900"
            />{" "}
            <br />
            <input
              className="formosInputas"
              type="number"
              name="imdb"
              min={1}
              max={10}
              placeholder="IMDb"
            />{" "}
          </div>
          <br />
          {/* photos */}
          <div>
            <label>Images</label> <br />
            <input
              className="formosInputas"
              type="url"
              name="photos_poster"
              placeholder="Poster image url"
            />{" "}
            <br />
            <input
              className="formosInputas"
              type="url"
              name="photos_cutscenes"
              placeholder="Cutscenes image url"
            />{" "}
            <br />
          </div>
          {/* videos */}
          <div>
            <label>Videos</label> <br />
            <input
              className="formosInputas"
              type="url"
              name="cutscenes"
              placeholder="Movie cutscenes url"
            />{" "}
            <br />
            <input
              className="formosInputas"
              type="url"
              name="trailers"
              placeholder="Trailer url"
            />{" "}
            <br />
          </div>
        </div>
        {/* main info */}
        <div>
          <div>
            <label>Main information</label>
            <br />
            <input
              className="formosInputas"
              type="text"
              name="genres"
              placeholder="Genres"
            />{" "}
            <br />
            <input
              className="formosInputas"
              type="text"
              name="description"
              placeholder="Description"
            />{" "}
            <br />
            <input
              className="formosInputas"
              type="text"
              name="director"
              placeholder="Director name"
            />{" "}
            <br />
          </div>
          {/* cast and crew */}
          <div>
            <label>Cast and crew</label> <br />
            <input
              className="formosInputas"
              type="text"
              name="writersName"
              placeholder="Writers names"
            />{" "}
            <br />
            <input
              className="formosInputas"
              type="text"
              name="writersRole"
              placeholder="Writers rote"
            />{" "}
            <br />
          </div>
          {/* actors */}
          <div>
            <label>Actors</label> <br />
            <input
              className="formosInputas"
              type="text"
              name="actorsName"
              placeholder="Actors name"
            />{" "}
            <br />
            <input
              className="formosInputas"
              type="text"
              name="character"
              placeholder="Actors character name"
            />{" "}
            <br />
            <input
              className="formosInputas"
              type="url"
              name="actorPhoto"
              placeholder="Actors photo url"
            />{" "}
            <br />
          </div>
        </div>
        <div className="agreementDiv">
          <p>
            I agree to not be an asshole and all information is fair. All
            pictures will not contain any nudity or drugs.{" "}
            <span
              style={{
                fontSize: 8,
              }}
            >
              Idea wasn't mine
            </span>{" "}
            <br />{" "}
            <span
              style={{
                color: "green",
              }}
            >
              By agreeng this I also agree to jump high as no one did.
            </span>
          </p>
          <input
            type="checkbox"
            onChange={agreementAgree}
            name="agreement"
            id="agreement"
          />
        </div>
        <button
          type="submit"
          id="addMoviesKnopke"
          className="addMovieSubmit"
          disabled={!checked}
        >
          ADD MOVIE
        </button>
      </form>
    </div>
  );
};
export default AddMovie;
