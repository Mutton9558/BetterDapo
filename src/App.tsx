import "./App.css";
import Header from "./components/Header";
import Advertisement from "./components/Advertisement";
import ChickenChop from "./assets/chicken-chop.jpg";
import CookingPic from "./assets/shawncookingaccurate.jpg";

function App() {
  return (
    <>
      <Header />
      <div className="main-content-home" style={{ marginTop: "8rem" }}>
        <Advertisement
          image={CookingPic}
          captionText="Welcome to Better Dapo!"
          captionPos="right-ad"
        />
        <Advertisement
          image={ChickenChop}
          captionText="Serving You Fresh Home-cooked Version of Dapo Sahang's Menu!"
          captionPos="left-ad"
        />
      </div>
      <div id="menu-highlights">
        <h3>Check out these all-time favourites!</h3>
      </div>
    </>
  );
}

export default App;
