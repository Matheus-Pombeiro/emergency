import Tbody from "./Tbody";
import Tfooter from "./Tfooter";
import Thead from "./Thead";

const Table = ({ patients }) => {
    return (
        <div className="table-container">
            <table className="table">
                <Thead />
                <Tbody patients={patients}/>
                <Tfooter patients={patients}/>
            </table>
        </div>
    );
};

export default Table;