import { useState } from "react"

import { NavLink } from "react-router-dom"
import menu from "./images/menu.png"
import exit from "./images/exit.png"
import search from "./images/search.png"
import left from "./images/left.png"

export default function Header(){


    const activelink = ({isActive})=>{
        return{
            borderTop : isActive ? "2px solid white" : "none"

        }
    }

    const[show,setShow] = useState(true)

    function handleshow(){
        setShow((eee)=>{
            return ! eee
        })
    }


    const[slide,setSlide] = useState(true)


    function handleslide(){
        setSlide((ee)=>{
            return ! ee
        })
    }
  


    return(
    <header>
        <h2 style={{color:"white",
                    fontSize:33,
                    border:"none"}}>I.T</h2>

        <div className="search-box">
            <img onClick={handleslide} src={slide? search: left} alt=""  width={30}/>    

            <span className={slide ? "ddd" : "eee"}>
                <input type="text" placeholder="Search..."  className="search"/>
                <button style={{display:slide? "none":"flex"}} className="search-btn">Search <span className="kkk"></span></button>
            </span>        
        </div>            

        <nav className={show ? "slide" : "noslide"}>
              <NavLink to="/" style={activelink}> Home</NavLink>
              <NavLink to="/bio" style={activelink}>Portfolio</NavLink>
              <NavLink to="/faq" style={activelink}>Faq</NavLink>
              <NavLink to="/contact" style={activelink}>Contact Us</NavLink>

        </nav>

        <img onClick={handleshow} src={show ? menu:exit} width={30} className="menu"/>
    </header>
    )
}