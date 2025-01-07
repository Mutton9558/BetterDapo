import "./App.css";
import Header from "./components/Header";
import Advertisement from "./components/Advertisement";
import DapoLogo from "./assets/DapoSahang.png";

function App() {
  return (
    <>
      <div className="header-container">
        <Header />
      </div>
      <div className="main-content-home">
        <h1>Better Dapo</h1>
        <Advertisement
          image={DapoLogo}
          captionText="Fresh home-cooked version of Dapo Sahang's Menu!"
        />
      </div>
    </>
  );
}

export default App;
