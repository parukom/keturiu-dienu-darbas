import "./MovieById.css";

const GalleryById = ({ data }) => {
  const linkKodas = data.videos.trailers;
  const iskirptasKodas = linkKodas.map((iskarpa) => iskarpa[0].slice(32, 46));
  const Link = `https://www.youtube.com/embed/${iskirptasKodas[0]}`;
  return (
    <div className="mainDivGalleryById">
      <div
        className="leftGaleryById"
        style={{
          backgroundImage: `url(${data.photos.poster})`,
          backgroundPosition: "center",
          backgroundSize: "290px 420px",
        }}
      ></div>
      <div className="middleGalleryById">
        <iframe
          width="750px"
          height="420px"
          src={Link}
          title={data.title}
          frameBorder="0"
          allowFullScreen
          allow="autoplay; encrypted-media"
        ></iframe>
      </div>
      <div className="rightGalleryById">
        <button className="topButtonGalleryById">
          <span className="videoIconById">
            <i class="bi bi-film"></i> <br />
          </span>
          {data.videos.cutscenes.length} VIDEOS
        </button>
        <button className="bottomButtonGalleryById">
          <span className="videoIconById">
            <i class="bi bi-images"></i> <br />
          </span>
          <p>{data.photos.cutscenes.length} PHOTOS</p>
        </button>
      </div>
    </div>
  );
};

export default GalleryById;
