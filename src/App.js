import About from "./components/About";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Menu/>
      <Page1/>
      <Page2/>
    </div>
  );
}

export default App;
