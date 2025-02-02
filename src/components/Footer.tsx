import { useMediaQuery } from "react-responsive";
import MobileFooter from "./Footers/MobileFooter";
import DesktopFooter from "./Footers/DesktopFooter";


function Footer() {
    const isMobile = useMediaQuery({ maxWidth: 1050 });

    return isMobile ? <MobileFooter /> : <DesktopFooter />;
};

export default Footer;