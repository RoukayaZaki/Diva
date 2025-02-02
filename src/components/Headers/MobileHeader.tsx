import Button from "../Button";
import Title from "../Title";
import { RxHamburgerMenu } from "react-icons/rx";


function MobileHeader() {
    return (
        <>
            <header >
                <Button />
                <div className="mobile-header">
                    <Title title="Diva"/>
                    <RxHamburgerMenu className="mobile-header-hamburger"/>
                </div>
            </header>
        </>
    );
}

export default MobileHeader;