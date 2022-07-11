import "./Cards.css";
import { Link } from "react-router-dom";

const ShowCard = ({ data }) => {
  return (
    <div className="mainDiv">
      <div
        className="picture"
        style={{
          backgroundImage: `url(${data.photos.poster[0]})`,
          backgroundSize: " 190px 250px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          border: "none",
          height: "250px",
          width: "190px",
        }}
      >
        {" "}
        <div className="pliusasKampe">
          <h1>
            <i className="pliusiukas bi bi-bookmark-plus"></i>
          </h1>
        </div>
      </div>
      <div className="apatinisDivas">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            <p
              style={{
                color: "white",
                lineHeight: 0,
              }}
            >
              ⭐️ {data.IMDB.totalScore}
            </p>
          </div>
          <div>
            <p
              style={{
                color: "aqua",
                lineHeight: 0,
              }}
            >
              ☆
            </p>
          </div>
          <div>
            <p style={{ display: "none" }}>none</p>
          </div>
        </div>

        <div className="buttonaiIrTitle">
          <div className="titleHeight">
            <Link to={`/movie/${data.id}`}>
              <p className="title">{data.title}</p>
            </Link>
          </div>
          <div>
            <button className="watchlistBtn">+ Watchlist</button> <br />
            <Link to="/trailer">
              <button className="trailerBtn">
                <i className="bi bi-play-circle"></i> Trailer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShowCard;
