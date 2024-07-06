import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useEffect, useState } from "react";

import Header from "./components/Header";
import DefaultPage from "./components/DefaultPage";
import Register from "./pages/Register";
import WaitingList from "./pages/WaitingList";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

const App = () => {
  // Declare an array that will keep all the patients
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "Matheus",
      age: 23,
      photo: "",
      city: "Cianorte",
      doctor: "Cardiologist",
      urgency: "1",
      status: true
    },
    {
      id: 2,
      name: "Maria",
      age: 25,
      photo: "",
      city: "New York",
      doctor: "Ophthalmologist",
      urgency: "2",
      status: true
    },
    {
      id: 3,
      name: "John",
      age: 28,
      photo: "",
      city: "Cincinati",
      doctor: "General Practitioner",
      urgency: "3",
      status: true
    },
    {
      id: 4,
      name: "Carla Carla Carla Carla Carla Carla Carla",
      age: 22,
      photo: "",
      city: "Buenos Aires",
      doctor: "Orthopedist",
      urgency: "2",
      status: true
    },
    {
      id: 5,
      name: "Fuwatomi",
      age: 25,
      photo: "",
      city: "Tokyo",
      doctor: "Endocrinologist",
      urgency: "1",
      status: true
    }
  ]);

  // Get the patients from the localStorage()
  useEffect(() => {
    try {
      const data = window.localStorage.getItem("patients");
      data !== null ? setPatients(JSON.parse(data)) : null;
    } catch (error) {
      alert("Sorry, but we couldn't get your patients from our database");
    }
  }, []);

  // Save the patients in the localStorage() 
  useEffect(() => {
    try {
      window.localStorage.setItem("patients", JSON.stringify(patients));
    } catch (error) {
      alert("Sorry, but we couldn't save your patient in our database. Please, try to clean up your browser's localStorage().");
    }
  }, [patients]);

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

              <Route path="*" element={<NotFound />} />

            </Route>

          </Routes>

          <Footer />

        </div>

      </BrowserRouter>
    </>
  )
}

export default App
