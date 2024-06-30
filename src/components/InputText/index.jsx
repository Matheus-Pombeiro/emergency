const InputText = ({ content, type, required, value, onChange }) => {
    return (
        <fieldset className="fieldset">
            <label
                className="label" 
                htmlFor={content}
            >
                {content}
            </label>
            <input
                className="input"
                id={content}
                type={type}
                required={required}
                placeholder={`${content}...`}
                value={value}
                onChange={e => onChange(e.target.value)}
            />
        </fieldset>
    );
};

export default InputText;