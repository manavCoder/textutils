// import logo from "./logo.svg";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState('light');  // Whether Dark mode is enabled or not
  const toggleDarkMode = ()=> {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#212521';
    }
  }
  return (
    <>
      {/* <Navbar title="textUtils Blog" aboutText="About textUtils"/> */}
      {/* <Navbar/>  If no props are passed then the default props will be used. The default props will be declared in the component JS */}
      <Navbar title="textUtils Blog" mode={mode} toggleMode={toggleDarkMode}/>
      <div className="container my-3">
      <TextForm heading="Enter the text here to analyse below" mode={mode}/>
      <br />
      <br />
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
