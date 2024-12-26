import { useNavigate } from "react-router-dom";
import "../App.css";
import DapoLogo from "../assets/DapoSahang.png";

const Header = () => {
  const navigate = useNavigate();

  const redirectToMenus = () => {
    navigate("/menus");
  };

  const redirectToHome = () => {
    navigate("/");
  };

  return (
    <>
      <header id="header">
        <div id="left-header">
          <img src={DapoLogo} id="dapo-logo" width="120px" height="80px"></img>
          <h2>Better Dapo</h2>
        </div>
        <div id="right-header">
          <button className="header-button" onClick={redirectToHome}>
            Home
          </button>
          <button className="header-button" onClick={redirectToMenus}>
            Menus
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
