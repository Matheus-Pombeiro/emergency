import { useTranslation } from "react-i18next";

import { useParams } from "react-router-dom";
import Title from "../../components/Title";

const Patient = ({ patients }) => {
    const { t } = useTranslation(); // Translation reference

    const params = useParams();     // Get the page url parameter
    
    // Find the correctly patient based on the match with their id and the page url
    const patient = patients.find((patient) => {
        return patient.id === params.id;
    });

    return (
        <>
            <Title 
                title={patient.name}
                subtitle={t("Patient subtitle")}
            />

            <section className="patient-container">
                <figure className="patient-content">
                    {patient.photo && (
                        <img 
                            src={patient.photo}
                            alt={patient.name} 
                            className="profile-photo"
                        />
                    )}
                    <figcaption>
                        <p>{t("Name")}: {patient.name}</p>
                        <p>{t("Age")}: {patient.age}</p>
                        <p>{t("City of Birth")}: {patient.city}</p>
                        <p>{t("Doctor")}: {t(patient.doctor)}</p>
                        <p>{t("Urgency Level")}: {patient.urgency === "1"
                                ? t("Immediate")
                                : patient.urgency === "2"
                                    ? t("Needs Care")
                                    : t("Can Wait")
                            }</p>
                        <p>{t("Status")}: {patient.status === true ? t("Waiting") : t("Treated")}</p>
                    </figcaption>
                </figure>
            </section>
        </>
    );
};

export default Patient;