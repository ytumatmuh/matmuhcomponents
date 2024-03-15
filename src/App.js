import "./App.css";
import MainFrame from "./Components/MainFrame/mainFrame";
import MobileNavbar from "./Components/MobileNavbar/mobileNavbar";
import NavBar from "./Components/Navbar/navbar"

function App() {
  return (
    <div className="App">
      <div className="navbar-app"><NavBar className="navbar-app" /></div>
      <div className="mobile-navbar-app"><MobileNavbar className="mobile-navbar-app"/></div>
      <MainFrame />
    </div>
  );
}

export default App;