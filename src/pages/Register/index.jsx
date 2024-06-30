import { useTranslation } from "react-i18next";

import { useState } from "react";

import { v4 as uuidv4 } from 'uuid';

import Title from "../../components/Title";
import InputText from "../../components/InputText";
import DropDown from "../../components/DropDown";
import InputRadio from "../../components/InputRadio";

const Register = ({ addPatient }) => {
    const { t } = useTranslation();     // Translation reference

    // Declare a range of states to keep the patient's data
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [photo, setPhoto] = useState("");
    const [city, setCity] = useState("");
    const [doctor, setDoctor] = useState("");
    const [urgency, setUrgency] = useState("Imediate");

    // Declare an array to keep the doctor options
    const [doctorData, setDoctorData] = useState([
        "Cardiologist", "General Practitioner", "Ophthalmologist", "Orthopedist", "Endocrinologist", "Gastroenterologist"
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
            urgency
        });

        // Clean the states
        setName("");
        setAge("");
        setPhoto("");
        setCity("");
        setDoctor("");
        setUrgency("Imediate");
    };

    // Declare a const to keep the input radio name
    const inputRadioName = "Urgency Level";

    return (
        <>
            <Title 
                title="Emergency"
                subtitle="Please, register a patient next"
            />

            <form 
                className="form"
                onSubmit={onSubmit}
            >
                <InputText 
                    content="Name"
                    type="text"
                    required={true}
                    value={name}
                    onChange={value => setName(value)}
                />

                <InputText 
                    content="Age"
                    type="number"
                    required={true}
                    value={age}
                    onChange={value => setAge(value)}
                />

                <InputText 
                    content="Photo"
                    type="text"
                    required={false}
                    value={photo}
                    onChange={value => setPhoto(value)}
                />

                <InputText 
                    content="City of Birth"
                    type="text"
                    required={true}
                    value={city}
                    onChange={value => setCity(value)}
                />

                <DropDown 
                    content="Doctor"
                    data={doctorData}
                    required={true}
                    value={doctor}
                    onChange={value => setDoctor(value)}
                />

                <fieldset className="fieldset">
                    <label
                        className="label"
                        htmlFor="Imediate"
                    >
                        {inputRadioName}
                    </label>

                    <InputRadio 
                        content="Imediate"
                        id="Imediate"
                        name={inputRadioName}
                        value={"Imediate"}
                        onChange={value => setUrgency(value)}
                    />

                    <InputRadio 
                        content="Needs Care"
                        id="Needs Care"
                        name={inputRadioName}
                        value={"Needs Care"}
                        onChange={value => setUrgency(value)}
                    />

                    <InputRadio 
                        content="Can Wait"
                        id="Can Wait"
                        name={inputRadioName}
                        value={"Can Wait"}
                        onChange={value => setUrgency(value)}
                    />
                </fieldset>

                <button 
                    type="submit"
                    className="submit-btn"
                >
                    Register
                </button>
            </form>
        </>
    );
};

export default Register;