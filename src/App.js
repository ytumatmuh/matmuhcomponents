import "./App.css";
import HeaderFrame from "./Components/HeaderFrame/headerFrame";
import NavBar from "./Components/Navbar/navbar";
import Announcement from "./Services/announcementService";

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar />
      </nav>
      <HeaderFrame />
      <Announcement />
    </div>
  );
}

export default App;