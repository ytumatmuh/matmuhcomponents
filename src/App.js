import "./App.css";
import NavBar from "./Components/Navbar/navbar";
import HeaderFrame from "./Components/HeaderFrame/headerFrame";
import PageSelector from "./Components/PageSelector/pageSelector";


function App() {
  return (
    <div className="App">
      <NavBar />
      <HeaderFrame />
      <PageSelector />
    </div>
  );
}

export default App;