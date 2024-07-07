import { useTranslation } from "react-i18next";

const Filter = ({ content, data, filter, setFilter }) => {
    const { t } = useTranslation(); // Translation reference
    
    return (
        <select
            className="filter-input"
            value={filter}
            onChange={e => setFilter(e.target.value)}
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
    );
};

export default Filter;