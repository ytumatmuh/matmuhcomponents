import "./App.css";
import ImageFrame from "./Components/ImageFrame/imageFrame";
import NavBar from "./Components/Navbar/navbar";

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar />
      </nav>
      <ImageFrame />
    </div>
  );
}

export default App;
