import { MdLocalHospital } from "react-icons/md";
import ThemeSwitcher from "../ThemeSwitcher";
import LanguageSwitcher from "../LanguageSwitcher";

const Header = () => {
    const logoSet = {   // Logo settings
        size: 45,
        color: "red"
    };

    const btnSet = {    // Buttons settings
        size: 40
    };

    return (
        <header className="header-mobile">
            <MdLocalHospital {...logoSet}/>

            <div className="header-btn-container">
                <ThemeSwitcher btnSet={btnSet}/>
                <LanguageSwitcher btnSet={btnSet}/>
            </div>
        </header>
    );
};

export default Header;