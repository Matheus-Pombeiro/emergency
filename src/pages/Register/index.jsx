import { useTranslation } from "react-i18next";

const Register = () => {
    const { t } = useTranslation();     // Translation reference

    return (
        <>
            <h1>{t("Welcome")}</h1>
        </>
    );
};

export default Register;