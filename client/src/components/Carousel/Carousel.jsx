import "./Carousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ShowCard from "../Cards/ShowCard";

const Responsive = ({ data }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="pagrindinisKaruselesDiv">
      <Carousel
        responsive={responsive}
        keyBoardControl={true}
        infinite={false}
        customTransition="transform 500ms ease-in-out"
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
      >
        {data.map((movie) => (
          <ShowCard data={movie} key={movie.id} />
        ))}
      </Carousel>
    </div>
  );
};
export default Responsive;
