import { useTranslation } from "react-i18next";

const Thead = () => {
    const { t } = useTranslation(); // Translation reference

    return (
        <thead>
            <tr className="table-row">
                <th className="table-cell">
                    {t("Urgency")}
                </th>
                <th className="table-cell">
                    {t("Name")}
                </th>
                <th className="table-cell">
                    {t("Doctor")}
                </th>
                <th className="table-cell">
                    {t("Status")}
                </th>
                <th className="table-cell">
                    {t("Delete")}
                </th>
                <th className="table-cell">
                    {t("Details")}
                </th>
            </tr>
        </thead>
    );
};

export default Thead;