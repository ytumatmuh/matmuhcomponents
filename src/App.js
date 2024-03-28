import "./App.css";
import MainFrame from "./Components/MainFrame/mainFrame";
import MobileNavbar from "./Components/MobileNavbar/mobileNavbar";
import NavBar from "./Components/Navbar/navbar"
import {Routes, Route, BrowserRouter, useParams } from 'react-router-dom';
import AnnouncementDetail from "./Components/SingleAnnouncementComp/singleAnnouncement";
import DepartmentSegment from "./Segments/DepartmentSegment/departmentSegment";
import AnnouncementSegment from "./Segments/AnnouncementSegment/announcementSegment";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="navbar-app"><NavBar className="navbar-app" /></div>
      <div className="mobile-navbar-app"><MobileNavbar className="mobile-navbar-app"/></div>
      <div className="app-renderer">
      <Routes>
        <Route path="/" element={<MainFrame />} />
        <Route path="/announcements/:id" element={<AnnouncementDetail/>} />
        <Route path="/department" element={<DepartmentSegment/>}/>
        <Route path="/announcements" element={<AnnouncementSegment/>}/>
      </Routes>
      </div>
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;