import { MdLocalHospital } from "react-icons/md";

import ThemeSwitcher from "../ThemeSwitcher";
import LanguageSwitcher from "../LanguageSwitcher";
import Navbar from "../Navbar";
import { useState } from "react";
import MenuHamburger from "../MenuHamburger";
import { NavLink } from "react-router-dom";

const Header = ({ handleMenuHamburger, menuIsOpen }) => {
    const logoSet = {   // Logo settings
        size: 45,
        color: "red"
    };

    const btnSet = {    // Buttons settings
        size: 40
    };

    return (
        <header className={`header-mobile xl:header-desktop
            ${menuIsOpen ? "header-menu-hamburger" : ""}
        `}>
            <NavLink to="/">
                <MdLocalHospital {...logoSet}/>
            </NavLink>

            <div className="header-btn-container">
                <ThemeSwitcher />
                <LanguageSwitcher btnSet={btnSet}/>
                <MenuHamburger 
                    btnSet={btnSet}
                    menuIsOpen={menuIsOpen}
                    handleMenuHamburger={handleMenuHamburger}
                />
            </div>

            <Navbar menuIsOpen={menuIsOpen}/>
        </header>
    );
};

export default Header;