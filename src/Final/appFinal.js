import Detail from "./detail"
import LandingPage from "./landingPage"
import Lowongan from "./lowongan"
import Nav from "./nav"
import {BrowserRouter, Routes, Route} from "react-router-dom";

function AppFinal() {
  
  return(
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<LandingPage />} />
         <Route path="/lowongan" element={<Lowongan />} />
       </Routes>
     
     
     </BrowserRouter>
    
    )
}

export default AppFinal;