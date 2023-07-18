import { Link } from "react-router-dom"
import "./styling/footer.css"
import twitter from "./images/twitter2.png"
import Youtube from "./images/youtube.png"
import github from "./images/github.png"
import instagram from "./images/instagram.png"
import facebook from "./images/facebook.png"

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"


export default function Footer2(){
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
    return(
        <div className="footer-2">
              <div className="foot" data-aos = 'fade-left'>
                  <h1>Links</h1>
                  <span className="stuff">
                    <Link to="/portfolio">Teams</Link>
                    <Link to="/bio">Portfolio</Link>
                    <Link to="/faq">Faq</Link>
                  </span>
              </div>

              <div className="foot" data-aos="zoom-in">
                  <h1>Services</h1>
                  <span className="stuff">
                    <h3>Web Development</h3>
                    <h3>Web Design</h3>
                    <h3>Digital Marketing</h3>
                    <h3>Solution Sloving</h3>
                    <h3>Creative Services</h3>
                  </span>
              </div>

              <div className="foot" data-aos="fade-left">
                  <h1>Connects</h1>
                  <span className="stuff">
                     <h4> <img src={instagram}/>Instagram</h4>
                     <h4><img src={facebook}/>Facebook</h4>
                     <h4><img src={github}/>Github</h4>
                     <h4><img src={twitter}/>Twitter</h4>
                     <h4><img src={Youtube}/>Youtube</h4>
                  </span>
              </div>
        </div>
    )
}