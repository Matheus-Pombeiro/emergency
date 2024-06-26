import { MdLocalHospital } from "react-icons/md";
import ThemeSwitcher from "../ThemeSwitcher";

const Header = () => {
    const btnSet = {
        size: 45
    };

    return (
        <header>
            <MdLocalHospital 
                {...btnSet}
                color="red"
            />

            <ThemeSwitcher btnSet={btnSet}/>
        </header>
    );
};

export default Header;