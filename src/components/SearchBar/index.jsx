import { useTranslation } from "react-i18next";

import { IoSearchOutline } from "react-icons/io5";

const SearchBar = ({ search, setSearch }) => {
    const { t } = useTranslation(); // Translation reference

    return (
        <fieldset className="search-bar-container">
            <input
                className="search-bar-input"
                type="text"
                placeholder={t("Search bar placeholder")}
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <IoSearchOutline size={25}/>
        </fieldset>
    );
};

export default SearchBar;