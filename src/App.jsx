import React from "react";
import Navbar from "./Components/Navbar";
import Slider from "./Hero_Section/Slider";
import FarmimgCropSection from "./Components/FarmingCropSection";
import PestControlSection from "./Components/PestControlSection";
import ContactFormSection from "./Components/Contract";
import FooterSection from "./Components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <FarmimgCropSection />
      <PestControlSection />
      <ContactFormSection />
      <FooterSection />
    </>
  );
};

export default App;
