import Tbody from "./Tbody";
import Tfooter from "./Tfooter";
import Thead from "./Thead";

const Table = ({ patients, search, filter }) => {
    return (
        <div className="table-container">
            <table className="table">
                <Thead />
                <Tbody 
                    patients={patients}
                    search={search}
                    filter={filter}
                />
                <Tfooter patients={patients}/>
            </table>
        </div>
    );
};

export default Table;