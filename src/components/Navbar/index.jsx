import { useTranslation } from "react-i18next";

import NavbarLink from "../NavbarLink";

const Navbar = ({ menuIsOpen }) => {
    const { t } = useTranslation(); // Translation reference

    return (
        <nav className={`navbar xl:navbar-desktop
            ${menuIsOpen ? "navbar-mobile" : "navbar-closed"}
        `}>
            <NavbarLink to="/">
                {t("Register")}
            </NavbarLink>

            <NavbarLink to="waiting-list">
                {t("Waiting List")}
            </NavbarLink>
        </nav>
    );
};

export default Navbar;