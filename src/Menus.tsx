import "./App.css";
import Header from "./components/Header";
import MenuItem from "./components/MenuItem";

function Menus() {
  return (
    <>
      <div className="header-container">
        <Header />
      </div>
      <div className="main-content-menus" style={{ marginTop: "10rem" }}>
        <h1>Better Dapo Menu</h1>
        <div className="categories-menus">
          <h2>All-Time Favourites</h2>
          <MenuItem />
        </div>
      </div>
    </>
  );
}

export default Menus;
