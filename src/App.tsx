import "./App.css";
import Header from "./components/Header";
<<<<<<< HEAD
=======
import Advertisement from "./components/Advertisement";
import DapoLogo from "./assets/DapoSahang.png";
>>>>>>> 9a61175 (Added advertisement component)

function App() {
  return (
    <>
      <div className="header-container">
        <Header />
      </div>
      <div className="main-content-home">
        <h1>Better Dapo</h1>
<<<<<<< HEAD
=======
        <Advertisement
          image={DapoLogo}
          captionText="Fresh home-cooked version of Dapo Sahang's Menu!"
        />
>>>>>>> 9a61175 (Added advertisement component)
      </div>
    </>
  );
}

export default App;
