import { useTranslation } from "react-i18next";

import { useState } from "react";

import { v4 as uuidv4 } from 'uuid';

import Title from "../../components/Title";
import InputText from "../../components/InputText";
import DropDown from "../../components/DropDown";

const Register = ({ addPatient }) => {
    const { t } = useTranslation();     // Translation reference

    // Declare a range of states to keep the patient's data
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [photo, setPhoto] = useState("");
    const [city, setCity] = useState("");
    const [doctor, setDoctor] = useState("");
    const [urgency, setUrgency] = useState("");

    // Declare an array to keep the doctor options
    const [doctorData, setDoctorData] = useState([
        "Cardiologist", "General Practitioner", "Ophthalmologist", "Orthopedist", "Endocrinologist", "Gastroenterologist"
    ]);

    // Declare an array to keep the urgency level options
    const [urgencyData, setUrgencyData] = useState([
        "1", "2", "3"
    ]);

    // Send the patient's data to the top level component
    const onSubmit = (e) => {
        e.preventDefault();     // Prevent the form automatic bahaviour
    
        // Send the data
        addPatient({
            id: uuidv4(),
            name,
            age: Number(age),
            photo,
            city,
            doctor,
            urgency,
            status: true
        });

        // Clean the states
        setName("");
        setAge("");
        setPhoto("");
        setCity("");
        setDoctor("");
        setUrgency("");
    };

    return (
        <>
            <Title 
                title={t("Rgister title")}
                subtitle={t("Register subtitle")}
            />

            <form 
                className="form"
                onSubmit={onSubmit}
            >
                <InputText 
                    content={t("Name")}
                    type="text"
                    required={true}
                    value={name}
                    onChange={value => setName(value)}
                />

                <InputText 
                    content={t("Age")}
                    type="number"
                    required={true}
                    value={age}
                    onChange={value => setAge(value)}
                />

                <InputText 
                    content={t("Photo")}
                    type="text"
                    required={false}
                    value={photo}
                    onChange={value => setPhoto(value)}
                />

                <InputText 
                    content={t("City of Birth")}
                    type="text"
                    required={true}
                    value={city}
                    onChange={value => setCity(value)}
                />

                <DropDown 
                    content={t("Doctor")}
                    data={doctorData}
                    required={true}
                    value={doctor}
                    onChange={value => setDoctor(value)}
                />

                <DropDown 
                    content={t("Urgency Level")}
                    data={urgencyData}
                    required={true}
                    value={urgency}
                    onChange={value => setUrgency(value)}
                />

                <button 
                    type="submit"
                    className="submit-btn"
                >
                    {t("Register")}
                </button>
            </form>
        </>
    );
};

export default Register;