import { useState } from "react";

import { IoSunny, IoMoonSharp  } from "react-icons/io5";

const ThemeSwitcher = ({ btnSet }) => {
    const [themeBtn, setThemeBtn] = useState(true); // Helps the theme icons 

    // Changes the app's theme
    const handleTheme = () => {
        document.documentElement.classList.toggle("dark");
        setThemeBtn(!themeBtn);
    };

    return (
        <button onClick={handleTheme}>
            {themeBtn
                ? <IoSunny {...btnSet}/>
                : <IoMoonSharp {...btnSet} />
            }
        </button>
    );
};

export default ThemeSwitcher;