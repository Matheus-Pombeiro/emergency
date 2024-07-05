import { useState } from "react";

import SearchBar from "../../components/SearchBar";
import Table from "../../components/Table";
import Title from "../../components/Title";
import Filter from "../../components/Filter";

const WaitingList = ({ patients, deletePatient, changeStatus }) => {
    // Declare a state that will contain the search value made by the user
    const [search, setSearch] = useState("");

    // Declare a state that will contain the filter option choosed by the user
    const [filter, setFilter] = useState("");
    
    // Declare an array to keep the filter options
    const [filterOptions, setFilterOptions] = useState([
        "Urgency", "Name", "Doctor"  
    ]);

    return (
        <>
            <Title 
                title="Waiting List"
                subtitle="Next you can see the waiting list"
            />

            <SearchBar 
                search={search}
                setSearch={setSearch}
            />

            <Filter 
                content="Order"
                data={filterOptions}
                filter={filter}
                setFilter={setFilter}
            />

            {patients.length > 0 && (
                <Table 
                    patients={patients}
                    search={search}
                    filter={filter}
                    deletePatient={deletePatient}
                    changeStatus={changeStatus}
                />
            )}
        </>
    );
};

export default WaitingList;