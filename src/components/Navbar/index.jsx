import NavbarLink from "../NavbarLink";

const Navbar = ({ menuIsOpen }) => {
    return (
        <nav className={`navbar xl:navbar-desktop
            ${menuIsOpen ? "navbar-mobile" : "navbar-closed"}
        `}>
            <NavbarLink to="/">
                {"Register"}
            </NavbarLink>

            <NavbarLink to="waiting-list">
                {"Waiting List"}
            </NavbarLink>
        </nav>
    );
};

export default Navbar;