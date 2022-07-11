import { Link } from "react-router-dom";
import "./Cards.css";

const HorizontalCard = ({ data }) => {
  return (
    <div className="mainDivHorizontal">
      <div
        className="imagePlace"
        style={{
          backgroundImage: `url(${data.photos.poster})`,
        }}
      ></div>
      <div className="information">
        <button
          style={{
            backgroundColor: "transparent",
            color: "white",
            border: "none",
            cursor: "pointer",
            marginTop: 10,
          }}
        >
          <span
            className="playZenkliuskasHorizontal"
            style={{
              fontSize: 28,
              lineHeight: 0,
              paddingLeft: 3,
            }}
          >
            {/* play knopke */}
            <Link to={`/trailer/${data.id}`}>
              <i className="bi bi-play-circle"></i>
            </Link>
          </span>{" "}
          Trailer
        </button>
        <p
          style={{
            color: "#888",
            fontSize: 15,
            lineHeight: 0.8,
            paddingLeft: 14,
          }}
        >
          {data.title}
        </p>
        <p
          style={{
            fontSize: 13,
            height: 18,
            overflow: "hidden",
            textOverflow: "ellipsis",
            color: "white",
            paddingLeft: 10,
          }}
        >
          {data.description}
        </p>
      </div>
    </div>
  );
};
export default HorizontalCard;
