import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./assets/css/bootstrap.css";
import "./assets/css/styles.css";
import "./App.css";

import Header from "./components/Header/Header";
import Alert from "./components/Alert/Alert";
import SectionOne from "./components/SectionOne/SectionOne"; // iPad
import SectionTwo from "./components/SectionTwo/SectionTwo"; // Mac
import SectionThree from "./components/SectionThree/SectionThree"; // iPhone part 1
import SectionFour from "./components/SectionFour/SectionFour"; // iPhone part 2
import SectionFive from "./components/SectionFive/SectionFive"; // Watch & TV
import SectionSix from "./components/SectionSix/SectionSix";
import YoutubeAPI from "./component/YoutubeVideos";
import Footer from "./components/Footer/Footer.jsx";

// ✅ Import the iPhones page
import IphonePage from "./components/Iphones/IphonePage"; // or adjust path if it's in Routes

function App() {
  return (
    <Router>
      <Header />
      {/* <Alert /> */}

      <Routes>
        {/* Home route shows all sections */}
        <Route
          path="/"
          element={
            <>
              <SectionOne />
              <SectionTwo />
              <SectionThree />
              <SectionFour />
              <SectionFive />
              <SectionSix />
              <YoutubeAPI />
            </>
          }
        />

        {/* iPad route */}
        <Route path="/ipad" element={<SectionOne />} />

        {/* Mac route */}
        <Route path="/mac" element={<SectionTwo />} />

        {/* iPhone route (SectionThree + SectionFour) */}
        <Route
          path="/iphone"
          element={
            <>
              <SectionThree />
              <SectionFour />
            </>
          }
        />

        {/* ✅ Dedicated iPhones page (iPhone 16, 11 Pro, SE, etc.) */}
        <Route path="/iphones" element={<IphonePage />} />

        {/* Watch and TV route */}
        <Route path="/watch" element={<SectionFive />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
