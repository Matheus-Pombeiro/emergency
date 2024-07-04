const Filter = ({ content, data, filter, setFilter }) => {
    return (
        <select
            className="filter-input"
            value={filter}
            onChange={e => setFilter(e.target.value)}
        >
            <option value="">Choose the {content}...</option>
            {data.length > 0 && data.map((item, index) => (
                <option 
                    key={index}
                    value={item}
                >
                    {item}
                </option>
            ))}
        </select>
    );
};

export default Filter;