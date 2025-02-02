import { useMediaQuery } from "react-responsive";
import DesktopHeader from "./Headers/DesktopHeader";
import MobileHeader from "./Headers/MobileHeader";

function Header() {
    const isMobile = useMediaQuery({ maxWidth: 1050 });

    return isMobile ? <MobileHeader /> : <DesktopHeader />;
};

export default Header;