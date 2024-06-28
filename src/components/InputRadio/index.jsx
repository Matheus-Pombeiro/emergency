const InputRadio = ({ content, id, name }) => {
    return (
        <div className="input-radio">
            <input 
                type="radio"
                id={id}
                name={name}
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