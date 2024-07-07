import { useTranslation } from "react-i18next";

const Tfooter = ({ patients }) => {
    const { t } = useTranslation(); // Translation reference

    return (
        <tfoot>
            <tr>
                <td className="table-cell">
                    {t("Number of Patients:")}
                </td>
                <td className="table-cell">
                    {patients.length}
                </td>
            </tr>
        </tfoot>
    );
};

export default Tfooter;