import { Link } from "react-router-dom"
import "./styling/home.css"
import Header from "./header"
import ServiceContainer from "./servicesContainer"
import Footer2 from "./footer2"
import Footer from "./footer"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

import Typewriter from 'typewriter-effect'

export default function Home(){

    useEffect(()=>{
          AOS.init({duration:2000})
    },[]);


    return(
        <div className="container">
          <Header/>
            <div className="home-main">
                <div className="banner">
                    <h1 data-aos = 'fade-left'><h3>We Are The</h3>Best IT Solution <br/> In Global 
                    <Typewriter

                       options={{
                        autoStart:true,
                        loop:true,
                        strings:['World', 'Community', 'Area']
                       }}
                    />
                    </h1>
                    <Link to="/portfolio"><button data-aos = 'fade-right'>My Team<span className="js"></span></button></Link>


                </div>

                  {/* services */}
                <div className="services" >
                      <h1 data-aos="fade-left">Our Services</h1>
                      <ServiceContainer />
                </div>
               
               {/* membs                 */}
                <div className="membs">
                    <span data-aos="fade-left">
                        <h1>1,030+</h1>
                        <h4>Team Members</h4>
                    </span>
                    <span data-aos="fade-up">
                        <h1>1,300+</h1>
                        <h4>Total Projects</h4>
                    </span>
                    <span data-aos="fade-down">
                        <h1>1,000+</h1>
                        <h4>Happy Clients</h4>
                    </span>
                </div>

                {/* get in touch */}

                <div className="get-in-touch">
                    <h6 data-aos = 'fade-right'>GET IN TOUCH</h6>

                    <h1 data-aos = 'fade-left'>Contact Us Now To Get <br/> Your Right Solution</h1>


                    <Link to="/contact"><button data-aos = 'fade-right'> Contact Us<span className="ge"></span></button></Link>
                </div>
                <Footer2/>
                <Footer/>

               

            </div>
        </div>
    )
}