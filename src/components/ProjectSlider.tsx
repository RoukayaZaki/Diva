import { useMediaQuery } from "react-responsive";
import MobileSlider from "./Sliders/MobileSlider";
import DesktopSlider from "./Sliders/DesktopSlider";


function ProjectSlider() {
  const isMobile = useMediaQuery({ maxWidth: 1050 });

  return isMobile ? <MobileSlider /> : <DesktopSlider />;
};

export default ProjectSlider;