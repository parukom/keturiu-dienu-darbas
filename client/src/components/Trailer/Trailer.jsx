import "./TrailerZone.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import HorizontalCard from "../Cards/HorizontalCard";
import { Link } from "react-router-dom";

const Trailer = () => {
  const [data, setData] = useState();
  let { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5050/api/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [id]);
  const pirma = data ? data.videos.trailers : null;
  const antra = pirma ? pirma[0].slice(32, 43) : null;
  const iskirptasLinkas = `https://www.youtube.com/embed/${antra}`;
  return (
    <>
      {typeof data !== "undefined" ? (
        <>
          <section className="trailerMainSection">
            <div className="trailerLeftDiv">
              <div className="trailerDivVirsus">
                <Link to={`/movie/${id}`}>
                  <button className="trailerUzdarytiKnopke">
                    <span style={{ fontSize: "1.5rem" }}>X</span>{" "}
                    <span style={{ fontWeight: 500 }}>Close</span>
                  </button>
                </Link>
                <button className="trailerDalintisKnopke">
                  <i className="bi bi-share-fill"></i>
                </button>
              </div>
              <iframe
                width="840px"
                height="450px"
                src={iskirptasLinkas}
                title={"any title"}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="trailerRightDiv">
              <HorizontalCard data={data} />
              <h3 className="trailersRightTitle">{data.title}</h3>
              <p className="trailersRightTitle">{data.description}</p>
            </div>
          </section>
        </>
      ) : null}
    </>
  );
};
export default Trailer;
