import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useEffect, useState } from "react";

import Header from "./components/Header";
import DefaultPage from "./components/DefaultPage";
import Register from "./pages/Register";
import WaitingList from "./pages/WaitingList";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Patient from "./pages/Patient";

const App = () => {
  // Declare an array that will keep all the patients
  const [patients, setPatients] = useState([]);

  // // Get the patients from the localStorage()
  // useEffect(() => {
  //   try {
  //     const data = window.localStorage.getItem("patients");
  //     data !== null ? setPatients(JSON.parse(data)) : null;
  //   } catch (error) {
  //     alert("Sorry, but we couldn't get your patients from our database");
  //   }
  // }, []);

  // // Save the patients in the localStorage() 
  // useEffect(() => {
  //   try {
  //     window.localStorage.setItem("patients", JSON.stringify(patients));
  //   } catch (error) {
  //     alert("Sorry, but we couldn't save your patient in our database. Please, try to clean up your browser's localStorage().");
  //   }
  // }, [patients]);

  // Set a initial value for the menu hamburger state (opened / closed)
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  // Delete a patient choosed by the user based on their id 
  const handleDeletePatient = (id) => {
    setPatients(patients.filter(patient => patient.id !== id));
  };

  // Change the patient's status
  const handlePatientStatus = (id) => {
    patients.map(patient => {
      patient.id === id ? setPatients([...patients], patient.status = !patient.status) : null;
    });
  };

  return (
    <>
      <BrowserRouter>
        
        <div className={`app app-mobile xl:app-desktop
            ${menuIsOpen ? "app-menu-hamburger" : ""}
          `}>
          
          <Header 
            handleMenuHamburger={() => setMenuIsOpen(!menuIsOpen)}
            menuIsOpen={menuIsOpen}
          />

          <Routes>

            <Route path="/" element={<DefaultPage />}>

              <Route index element={<Register
                  addPatient={patient => setPatients([...patients, patient])}
                />}
              />

              <Route path="waiting-list" element={<WaitingList
                  patients={patients}
                  deletePatient={handleDeletePatient}
                  changeStatus={handlePatientStatus}
                />}
              />

              <Route path="patient/:id" element={<Patient 
                  patients={patients}
                />}
              />

            </Route>

            <Route path="*" element={<NotFound />} />

          </Routes>

          <Footer />

        </div>

      </BrowserRouter>
    </>
  )
}

export default App
