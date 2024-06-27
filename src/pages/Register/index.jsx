import { useTranslation } from "react-i18next";
import Title from "../../components/Title";

const Register = () => {
    const { t } = useTranslation();     // Translation reference

    return (
        <>
            <Title 
                title="Emergency"
                subtitle="Please, register a patient next"
            />
        </>
    );
};

export default Register;