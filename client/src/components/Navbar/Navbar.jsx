import { Link } from "react-router-dom";

import IMDbPro from "../smallComponents/IMDbPro";
import logo from "./logo.png";
import searchButton from "./search.png";
import menuImg from "./menu.png";
import pliusas from "./addPlus.png";
import AddMovieButton from "../addMovie/AddMovieButton";

const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(3, 3, 3, 0.449)",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: 1240,
          margin: "0 auto",
        }}
      >
        <Link to="/">
          <img
            style={{
              height: 35,
            }}
            src={logo}
            alt="logo"
          />
        </Link>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={menuImg}
            alt=""
            style={{
              height: 10,
            }}
          />
          <h3
            style={{
              color: "white",
              fontSize: 14,
            }}
          >
            {" "}
            Menu
          </h3>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "5px 5px 5px 5px",
          }}
        >
          <select
            style={{
              height: 30,
              borderRadius: "5px 0 0 5px",
              width: 60,
              margin: 0,
              border: "none",
            }}
          >
            <option value="all">All</option>
          </select>
          <input
            type="search"
            name="search"
            placeholder="Search IMDB"
            style={{
              height: 30,
              width: 600,
              paddingLeft: 10,
              border: "none",
              borderLeft: "1px solid gray",
            }}
          />
          <input
            type="image"
            src={searchButton}
            alt="Submit"
            height="25"
            style={{
              paddingRight: 10,
            }}
          />
        </div>
        <IMDbPro />
        <AddMovieButton />
        <span
          style={{
            height: 35,
            width: 2,
            backgroundColor: "gray",
          }}
        ></span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={pliusas}
              alt=""
              style={{
                height: 15,
              }}
            />
            <h2
              style={{
                fontFamily: "sans-serif",
                letterSpacing: -1,
                color: "white",
                fontSize: 14,
              }}
            >
              Watchlist
            </h2>
          </div>
          <span
            style={{
              width: 20,
            }}
          ></span>
          <h2
            style={{
              fontFamily: "sans-serif",
              letterSpacing: -1,
              color: "white",
              fontSize: 14,
            }}
          >
            Sign In
          </h2>
          <span
            style={{
              width: 20,
            }}
          ></span>
          <select
            style={{
              backgroundColor: "transparent",
              color: "white",
              border: "none",
            }}
          >
            <option value="En">EN</option>
            <option value="LT">LT</option>
          </select>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
