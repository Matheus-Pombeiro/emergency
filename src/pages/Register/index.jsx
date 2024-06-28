import { useTranslation } from "react-i18next";

import { useState } from "react";

import Title from "../../components/Title";
import InputText from "../../components/InputText";
import DropDown from "../../components/DropDown";
import InputRadio from "../../components/InputRadio";

const Register = () => {
    const { t } = useTranslation();     // Translation reference

    // Declare an array to keep the doctor options
    const [doctorData, setDoctorData] = useState([
        "Cardiologist", "General Practitioner", "Ophthalmologist", "Orthopedist", "Endocrinologist", "Gastroenterologist"
    ]);

    // Declare a const to keep the input radio name
    const inputRadioName = "Urgency Level";

    return (
        <>
            <Title 
                title="Emergency"
                subtitle="Please, register a patient next"
            />

            <form className="form">
                <InputText 
                    content="Name"
                    type="text"
                    required={true}
                />

                <InputText 
                    content="Age"
                    type="number"
                    required={true}
                />

                <InputText 
                    content="Photo"
                    type="text"
                    required={false}
                />

                <InputText 
                    content="City of Birth"
                    type="text"
                    required={true}
                />

                <DropDown 
                    content="Doctor"
                    data={doctorData}
                    required={true}
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
                    />

                    <InputRadio 
                        content="Needs Care"
                        id="Needs Care"
                        name={inputRadioName}
                    />

                    <InputRadio 
                        content="Can Wait"
                        id="Can Wait"
                        name={inputRadioName}
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