const InputRadio = ({ content, id, name, value, onChange }) => {
    return (
        <div className="input-radio">
            <input 
                type="radio"
                id={id}
                name={name}
                value={value}
                onChange={e => onChange(e.target.value)}
                defaultChecked={value === "1"}
                
            />
            <label 
                className="label"
                htmlFor={id}
            >
                {content}
            </label>
        </div>
    );
};

export default InputRadio;