// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* <Navbar title="textUtils Blog" aboutText="About textUtils"/> */}
      {/* <Navbar/>  If no props are passed then the default props will be used. The default props will be declared in the component JS */}
      <Navbar title="textUtils Blog" />
    </>
  );
}

export default App;
