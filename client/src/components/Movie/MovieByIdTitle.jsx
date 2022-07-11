const Title = ({ data }) => {
  return (
    <div className="mainDivOnId">
      <div className="titleTimeYear">
        <div>
          <h1
            style={{
              paddingLeft: 30,
              fontWeight: 500,
            }}
          >
            {data.title}
          </h1>
          <p>
            {data.releaseYear} <span>·</span>
            {data.length}min
          </p>
        </div>
      </div>

      <div className="rightSideRate">
        <div>
          <p
            style={{
              fontSize: 12,
            }}
          >
            IMDb RATING
          </p>
          <h2>
            ⭐️ {data.IMDB.totalScore}
            <span
              style={{
                fontSize: 19,
                fontWeight: 300,
              }}
            >
              /10
            </span>
          </h2>{" "}
          {/* data.IMDb.totalScore */}
          <p
            style={{
              fontSize: 11,
              lineHeight: 0,
              padding: 0,
            }}
          >
            {data.IMDB.userRatings[0].votes} votes
          </p>
        </div>
        <div>
          <p
            style={{
              fontSize: 12,
            }}
          >
            YOUR RATING
          </p>
          <h2
            style={{
              color: "rgb(39, 138, 255)",
            }}
          >
            ☆ Rate
          </h2>
        </div>
        <div>
          <p>POPULARITY</p>
          <h2>📈</h2>
        </div>
      </div>
    </div>
  );
};
export default Title;
