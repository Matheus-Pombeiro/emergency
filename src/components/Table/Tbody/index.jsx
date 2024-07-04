import { FaCircle } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";

const Tbody = ({ patients, search, filter, deletePatient, changeStatus }) => {
    return (
        <tbody>
            {patients.filter(patient => 
                    patient.name.toLowerCase().includes(search.toLowerCase())
                )
                .sort((a, b) => 
                    filter === "" || filter === "Urgency"
                        ? a.urgency.localeCompare(b.urgency)
                        : filter === "Name" 
                            ? a.name.localeCompare(b.name)
                            : a.doctor.localeCompare(b.doctor)
                )
                .map(patient => (
                    <tr key={patient.id}>
                        <td className="table-cell">
                            {patient.urgency === "1" ? <FaCircle color="red"/>
                                : patient.urgency === "2" ? <FaCircle color="yellow"/>
                                : <FaCircle color="green"/>
                            }
                        </td>
                        <td className="table-cell">
                            {patient.name}
                        </td>
                        <td className="table-cell">
                            {patient.doctor}
                        </td>
                        <td className="table-cell">
                            <button 
                                className={`status-btn
                                        ${patient.status ? "status-waiting" : "status-treated"}
                                    `}
                                onClick={() => changeStatus(patient.id)}
                            >
                                {patient.status ? "Waiting" : "Treated"}
                            </button>
                        </td>
                        <td className="table-cell">
                            <TiDelete 
                                color="red" 
                                size={25} 
                                className="delete-btn"
                                onClick={() => deletePatient(patient.id)}
                            />
                        </td>
                    </tr>
                ))
            }
        </tbody>
    );
};

export default Tbody;