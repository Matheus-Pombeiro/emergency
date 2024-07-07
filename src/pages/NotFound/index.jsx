import { useTranslation } from "react-i18next";

import Title from "../../components/Title";

const NotFound = () => {
    const { t } = useTranslation(); // Translation reference

    return (
        <>
            <Title 
                title={t("Page Not Found title")}
                subtitle={t("Page Not Found subtitle")}
            />

            <figure className="not-found-container">
                <img 
                    src="/assets/number-page-not-found.png"
                    alt={t("Page Not Found title")}
                />
            </figure>
        </>
    );
};

export default NotFound;