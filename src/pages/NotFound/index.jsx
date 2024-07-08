import { useTranslation } from "react-i18next";

import Title from "../../components/Title";

const NotFound = () => {
    const { t } = useTranslation(); // Translation reference

    return (
        <main className="default-page default-page-mobile xl:default-page-desktop">
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
        </main>
    );
};

export default NotFound;