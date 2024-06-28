import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import DefaultPage from "./components/DefaultPage";
import Register from "./pages/Register";
import WaitingList from "./pages/WaitingList";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

const App = () => {

  return (
    <>
      <BrowserRouter>
        
        <div className="app app-mobile xl:app-desktop">
          
          <Header />

          <Routes>

            <Route path="/" element={<DefaultPage />}>

              <Route index element={<Register />}/>

              <Route path="waiting-list" element={<WaitingList />}/>

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
