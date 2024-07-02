import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
    return (
        <fieldset className="search-bar-container">
            <input
                className="search-bar-input"
                type="text"
                placeholder="Enter the patient's name..."
            />
            <IoSearchOutline size={25}/>
        </fieldset>
    );
};

export default SearchBar;