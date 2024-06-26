import NavbarLink from "../NavbarLink";

const Navbar = ({ menuIsOpen }) => {
    return (
        <nav className={`xl:navbar-opened
            ${menuIsOpen ? "navbar-opened" : "navbar-closed"}
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