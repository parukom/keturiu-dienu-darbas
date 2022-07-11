import "./HomeTop.css";
import HorizontalCard from "../Cards/HorizontalCard";
import Carousel from "../Carousel/Carousel";

const HomeTop = ({ data }) => {
  const pirma = data.map((traileris) => traileris.videos.trailers);
  const antra = pirma.map((linkas) => linkas[0].split("v=")[1].split("&")[0]);
  const iskirptasLinkas = `https://www.youtube.com/embed/${antra[0]}`;

  return (
    <>
      <div className="mainDivHome">
        <div className="leftDiv">
          <iframe
            width="100%"
            height="100%"
            src={iskirptasLinkas}
            title={data.title}
            frameBorder="0"
          ></iframe>
        </div>
        <div className="rightDiv">
          {data.map((cards) => (
            <HorizontalCard data={cards} key={cards.id} />
          ))}
        </div>
      </div>
      <Carousel data={data} />
    </>
  );
};
export default HomeTop;
