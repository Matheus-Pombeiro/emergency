import { IoMenu, IoClose } from "react-icons/io5";

const MenuHamburger = ({ btnSet, menuIsOpen, handleMenuHamburger }) => {
    return (
        <button
            className="menu-hamburger"
            onClick={handleMenuHamburger}
        >
            {menuIsOpen
                ? <IoClose {...btnSet}/>
                : <IoMenu {...btnSet}/>
            }
        </button>
    );
};

export default MenuHamburger;