import SearchBar from "../../components/SearchBar";
import Table from "../../components/Table";
import Title from "../../components/Title";

const WaitingList = ({ patients }) => {
    return (
        <>
            <Title 
                title="Waiting List"
                subtitle="Next you can see the waiting list"
            />

            <SearchBar />

            {patients.length > 0 && (
                <Table patients={patients}/>
            )}
        </>
    );
};

export default WaitingList;