import React from "react";
//Components
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import {BrowserRouter as Router, Route } from "react-router-dom";
import MainTopSection from "./components/MainTopSection/MainTopSection";
function App() {
  return (
    <>

    <Router>
    <Header />
    </Router>
    <MainTopSection />
  
    </>
  );
}
export default App;
