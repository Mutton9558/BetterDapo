import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css";
import DapoLogo from "../assets/DapoSahang.png";

const Header = () => {
  const navigate = useNavigate();
  const [fontSize, setFontSize] = useState("38px");
  const [headerHeight, setHeaderHeight] = useState("10rem");
  const [imgWidth, setImgWidth] = useState("150px");
  const [imgHeight, setImgHeight] = useState("100px");

  useEffect(() => {
    const scrollFunction = () => {
      if (window.scrollY > 20) {
        setFontSize("28px");
        setHeaderHeight("8rem");
        setImgWidth("120px");
        setImgHeight("80px");
      } else {
        setFontSize("38px");
        setHeaderHeight("10rem");
        setImgWidth("150px");
        setImgHeight("100px");
      }
    };

    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const redirectToMenus = () => {
    navigate("/menus");
  };

  const redirectToHome = () => {
    navigate("/");
  };

  return (
    <>
      <div
        id="header"
        className="header"
        style={{ height: headerHeight, transition: "0.3s ease-in-out" }}
      >
        <div id="left-header">
          <img
            src={DapoLogo}
            id="dapo-logo"
            style={{
              width: imgWidth,
              height: imgHeight,
              transition: "0.3s ease-in-out",
            }}
          ></img>
          <h2 style={{ fontSize, transition: "0.3s ease-in-out" }}>
            Better Dapo
          </h2>
        </div>
        <div id="right-header">
          <button
            className="header-button"
            onClick={redirectToHome}
            style={{ fontSize, transition: "0.3s ease-in-out" }}
          >
            Home
          </button>
          <button
            className="header-button"
            onClick={redirectToMenus}
            style={{ fontSize, transition: "0.3s ease-in-out" }}
          >
            Menus
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
