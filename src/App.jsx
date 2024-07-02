import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useState } from "react";

import Header from "./components/Header";
import DefaultPage from "./components/DefaultPage";
import Register from "./pages/Register";
import WaitingList from "./pages/WaitingList";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "Matheus",
      age: 23,
      photo: "",
      city: "Cianorte",
      doctor: "Cardiologist",
      urgency: "1"
    },
    {
      id: 2,
      name: "Maria",
      age: 25,
      photo: "",
      city: "New York",
      doctor: "Ophthalmologist",
      urgency: "2"
    },
    {
      id: 3,
      name: "John",
      age: 28,
      photo: "",
      city: "Cincinati",
      doctor: "General Practitioner",
      urgency: "3"
    },
    {
      id: 4,
      name: "Carla Carla Carla Carla Carla Carla Carla",
      age: 22,
      photo: "",
      city: "Buenos Aires",
      doctor: "Orthopedist",
      urgency: "2"
    },
    {
      id: 5,
      name: "Fuwatomi",
      age: 25,
      photo: "",
      city: "Tokyo",
      doctor: "Endocrinologist",
      urgency: "1"
    }
  ]);

  // Set a initial value for the menu hamburger state (opened / closed)
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  console.log(menuIsOpen)

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
