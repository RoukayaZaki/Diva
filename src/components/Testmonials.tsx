import { useMediaQuery } from "react-responsive";
import MobileTestimonial from "./Testmonials/MobileTestmonials";
import DesktopTestimonial from "./Testmonials/DesktopTestmonials";


function Testimonial() {
    const isMobile = useMediaQuery({ maxWidth: 1050 });

    return isMobile ? <MobileTestimonial /> : <DesktopTestimonial />;
};

export default Testimonial;