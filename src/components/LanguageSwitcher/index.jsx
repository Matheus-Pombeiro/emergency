import { useTranslation } from "react-i18next";

import { LiaFlagUsaSolid } from "react-icons/lia";
import { GiBrazilFlag } from "react-icons/gi";

const LanguageSwitcher = ({ btnSet }) => {
    const { i18n } = useTranslation(); // Translation reference

    // Declares an array that contains the language options data
    const languageOptions = [
        {
            value: "en",
            flag: <LiaFlagUsaSolid {...btnSet}/>
        },
        {
            value: "pt",
            flag: <GiBrazilFlag {...btnSet}/>
        }
    ];

    return (
        <>
            {languageOptions.map(languageOption => (
                <button 
                    key={languageOption.value}
                    onClick={() => {
                        i18n.changeLanguage(languageOption.value)
                    }}
                >
                    {languageOption.flag}
                </button>
            ))}
        </>
    );
};

export default LanguageSwitcher;