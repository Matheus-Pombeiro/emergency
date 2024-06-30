const DropDown = ({ content, data, required, value, onChange }) => {
    return (
        <fieldset className="fieldset">
            <label 
                className="label"
                htmlFor={content}
            >
                {content}
            </label>
            <select
                className="input" 
                id={content}
                required={required}
                value={value}
                onChange={e => onChange(e.target.value)}
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
        </fieldset>
    );
};

export default DropDown;