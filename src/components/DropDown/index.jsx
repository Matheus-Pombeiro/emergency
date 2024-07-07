import { useTranslation } from "react-i18next";

const DropDown = ({ content, data, required, value, onChange }) => {
    const { t } = useTranslation(); // Translation reference

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
                <option value="">{t("Choose the")} {content}...</option>
                {data.length > 0 && data.map((item, index) => (
                    <option
                        key={index}
                        value={item}
                    >
                        {t(item)}
                    </option>
                ))}
            </select>
        </fieldset>
    );
};

export default DropDown;