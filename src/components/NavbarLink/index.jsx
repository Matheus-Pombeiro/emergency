import { NavLink } from "react-router-dom"

const NavbarLink = ({ children, to }) => {
    return (
        <NavLink
            className={({isActive}) => `
                navbar-link
                ${isActive ? "navbar-link-active" : ""}
            `}
            to={to}
        >
            {children}
        </NavLink>
    );
};

export default NavbarLink;