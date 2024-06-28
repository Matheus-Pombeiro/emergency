const InputText = ({ content, type, required }) => {
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
            />
        </fieldset>
    );
};

export default InputText;