import React from "react";
import Navbar from "./Components/Navbar";
import Slider from "./Hero_Section/Slider";
import FarmimgCropSection from "./Components/FarmingCropSection";
import PestControlSection from "./Components/PestControlSection";
const App = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <FarmimgCropSection />
      <PestControlSection />
    </>
  );
};

export default App;
