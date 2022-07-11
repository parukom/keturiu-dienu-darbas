import "./MovieById.css";
import IMDbPro from "../smallComponents/IMDbPro";

const Description = ({ data }) => {
  return (
    <div className="mainDescriptionById">
      <div className="leftDescriptionById">
        <span className="zanriukai">{data.genres[0]}</span>
        <span className="zanriukai">{data.genres[1]}</span>
        <span className="zanriukai">{data.genres[2]}</span>
        <p
          style={{
            fontWeight: 500,
          }}
        >
          {data.description}
        </p>
        <h4>
          <span
            style={{
              color: "white",
              fontWeight: 500,
            }}
          >
            Director
          </span>
          <span
            style={{
              color: "rgb(45, 91, 255",
            }}
          >
            {data.castAndCrew.director}
          </span>
        </h4>
        <h4>
          <span
            style={{
              color: "white",
              fontWeight: 500,
            }}
          >
            Writers{" "}
          </span>
          <span
            style={{
              color: "rgb(45, 81, 255",
            }}
          >
            {data.castAndCrew.writers.map((writer) =>
              writer.name.split(" ").join(", ")
            )}
          </span>
        </h4>
        <h4>
          <span
            style={{
              color: "white",
              fontWeight: 500,
            }}
          >
            Stars
          </span>
          <span
            style={{
              color: "rgb(45, 91, 255",
              whiteSpace: "pre",
            }}
          >
            {data.castAndCrew.actors.map((actor) => actor.name)}
          </span>
        </h4>
        <h5
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <IMDbPro />{" "}
          <span
            style={{
              color: "white",
              marginLeft: 30,
            }}
          >
            See production, box & company info
          </span>
        </h5>
      </div>
      <div className="rightDescriptionById">
        <button>
          <i class="bi bi-plus"></i> Add to Watchlist
        </button>
        <select>
          <option value="none">\/</option>
        </select>
      </div>
    </div>
  );
};
export default Description;
