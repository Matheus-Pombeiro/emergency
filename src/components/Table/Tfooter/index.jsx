const Tfooter = ({ patients }) => {
    return (
        <tfoot>
            <tr>
                <td className="table-cell">
                    Number of Patients:
                </td>
                <td className="table-cell">
                    {patients.length}
                </td>
            </tr>
        </tfoot>
    );
};

export default Tfooter;