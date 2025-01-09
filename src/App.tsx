import "./App.css";
import Header from "./components/Header";
import Advertisement from "./components/Advertisement";
<<<<<<< HEAD
import ChickenChop from "./assets/chicken-chop.jpg";
=======
import DapoLogo from "./assets/DapoSahang.png";
>>>>>>> 0a63a0cfe565b507a42170fb8fb36f3f8022f635

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
