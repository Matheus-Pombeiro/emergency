import { IoSearchOutline } from "react-icons/io5";

const SearchBar = ({ search, setSearch }) => {
    return (
        <fieldset className="search-bar-container">
            <input
                className="search-bar-input"
                type="text"
                placeholder="Enter the patient's name..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <IoSearchOutline size={25}/>
        </fieldset>
    );
};

export default SearchBar;