// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether Dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3500);
  };

  const toggleDarkMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#212521";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";

      // setInterval(() => {
      //   document.title = "TextUtils is AMAZING"
      // }, 1200);
      // setInterval(() => {
      //   document.title = "Install TextUtils NOW!"
      // }, 2000);
    }
  };
  return (
    <>
      {/* <Navbar title="textUtils Blog" aboutText="About textUtils"/> */}
      {/* <Navbar/>  If no props are passed then the default props will be used. The default props will be declared in the component JS */}
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleDarkMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element = {
              <TextForm
                showAlert={showAlert}
                heading="Enter the text here to analyse below"
                mode={mode}
              />}
              />
            <Route exact path="about/*" element={<About/>}/>
          </Routes>

          {/* <br /> */}
          {/* <br /> */}
          {/* <About/> */}
        </div>
      </Router>
    </>
  );
}

export default App;
