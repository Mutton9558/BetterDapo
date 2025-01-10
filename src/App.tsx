import "./App.css";
import Header from "./components/Header";
import Advertisement from "./components/Advertisement";
import ChickenChop from "./assets/chicken-chop.jpg";

function App() {
  return (
    <>
      <div className="header-container">
        <Header />
      </div>
      <div className="main-content-home">
        <h1>Better Dapo</h1>
        <Advertisement
          image={ChickenChop}
          captionText="Fresh home-cooked version of Dapo Sahang's Menu!"
          captionPos="left-ad"
        />
      </div>
    </>
  );
}

export default App;
