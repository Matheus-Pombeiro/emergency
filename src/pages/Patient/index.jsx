import { useParams } from "react-router-dom";
import Title from "../../components/Title";

const Patient = ({ patients }) => {
    const params = useParams();     // Get the page url parameter
    
    // Find the correctly patient based on the match with their id and the page url
    const patient = patients.find((patient) => {
        return patient.id === params.id;
    });

    return (
        <>
            <Title 
                title={patient.name}
                subtitle="Next you can see the patient's data"
            />

            <section>
                {patient.photo && (
                    <figure>
                        <img src={patient.photo} />
                    </figure>
                )}

                <div>
                    <p>Name: {patient.name}</p>
                    <p>Age: {patient.age}</p>
                    <p>City of Birth: {patient.city}</p>
                    <p>Doctor: {patient.doctor}</p>
                    <p>Urgency Level: {patient.urgency === "1"
                            ? "Immediate"
                            : patient.urgency === "2"
                                ? "Needs Care"
                                : "Can Wait"
                        }</p>
                    <p>Status: {patient.status === true ? "Waiting" : "Treated"}</p>
                </div>
            </section>
        </>
    );
};

export default Patient;