import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./home"
import Team from "./team"
import Faq from "./faq"
import "./styling/app.css"
import Contactus from "./contactUs"
import Portfolio from "./portfolio"


export default function App(){
    return(
        <BrowserRouter>
              <Routes>
                   <Route path="/" element={<Home/>}/>
                   <Route path="/bio" element={<Team/>}/>
                   <Route path="/faq" element={<Faq/>}/>
                   <Route path="/contact" element={<Contactus/>}/>
                   <Route path="/portfolio" element={<Portfolio/>}/>
              </Routes>
        </BrowserRouter>
        

        
    )
}