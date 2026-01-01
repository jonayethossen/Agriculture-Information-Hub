import ContactFormSection from "../Components/Contract";
import PestControlSection from "../Components/PestControlSection";
import Slider from "../Hero_Section/Slider";

export default function Homepage() {
  return (
    <>
      <Slider />
      <FarmimgCropSection />
      <PestControlSection />
      <ContactFormSection />
    </>
  );
}
