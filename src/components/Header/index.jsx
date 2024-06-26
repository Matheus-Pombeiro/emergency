import { MdLocalHospital } from "react-icons/md";

import ThemeSwitcher from "../ThemeSwitcher";
import LanguageSwitcher from "../LanguageSwitcher";
import Navbar from "../Navbar";
import { useState } from "react";
import MenuHamburger from "../MenuHamburger";
import { NavLink } from "react-router-dom";

const Header = () => {
    // Set a initial value for the menu hamburger state (opened / closed)
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const logoSet = {   // Logo settings
        size: 45,
        color: "red"
    };

    const btnSet = {    // Buttons settings
        size: 40
    };

    return (
        <header className="header-mobile">
            <NavLink to="/">
                <MdLocalHospital {...logoSet}/>
            </NavLink>

            <div className="header-btn-container">
                <ThemeSwitcher btnSet={btnSet}/>
                <LanguageSwitcher btnSet={btnSet}/>
                <MenuHamburger 
                    btnSet={btnSet}
                    menuIsOpen={menuIsOpen}
                    handleMenuHamburger={() => setMenuIsOpen(!menuIsOpen)}
                />
            </div>

            <Navbar menuIsOpen={menuIsOpen}/>
        </header>
    );
};

export default Header;