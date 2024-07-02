import { FaCircle } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";

const Tbody = ({ patients }) => {
    return (
        <tbody>
            {patients.sort((a, b) => a.urgency.localeCompare(b.urgency))
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
                        <button className="status-btn">Waiting</button>
                    </td>
                    <td className="table-cell">
                        <TiDelete color="red" size={25} className="delete-btn"/>
                    </td>
                </tr>
            ))}
        </tbody>
    );
};

export default Tbody;