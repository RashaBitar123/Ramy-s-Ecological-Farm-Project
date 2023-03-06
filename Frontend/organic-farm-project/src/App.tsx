import { Menu, MenuList } from "@mui/material";
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import MainTopSection from "./components/MainTopSection/MainTopSection";
import ActivityManagement from "./pages/ActivityManagement/ActivityManagement";
//Components
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
  
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/activity-management" element={<ActivityManagement />} />
  </Routes>
  </BrowserRouter>
 
  );
}
export default App;
