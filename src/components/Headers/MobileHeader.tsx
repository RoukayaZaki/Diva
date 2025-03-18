import Button from "../Button";
import Title from "../Title";
// import { RxHamburgerMenu } from "react-icons/rx";
import HamburgerMenu  from "../HamburgerMenu";

function MobileHeader() {
    return (
        <>
            <header >
                <Button />
                <div className="mobile-header">
                    <Title title="Diva" />
                    {/* <RxHamburgerMenu className="mobile-header-hamburger"/> */}
                    <HamburgerMenu />
                </div>
            </header>
        </>
    );
}

export default MobileHeader;