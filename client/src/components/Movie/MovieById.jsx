import "./MovieById.css";
import Title from "./MovieByIdTitle";
import GalleryById from "./MovieByIdGallery";
import Description from "./DescriptionById";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const MovieById = () => {
  const [data, setData] = useState();
  let { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5050/api/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [id]);
  return (
    <>
      <div className="mainDivMovieID">
        {typeof data !== "undefined" ? (
          <>
            <Title data={data} />
            <GalleryById data={data} />
            <Description data={data} />
          </>
        ) : null}
      </div>
    </>
  );
};
export default MovieById;
