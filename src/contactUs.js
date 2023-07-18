import "./styling/contact.css"
import Header from "./header"
import email from "./images/email.png"
import phone from "./images/phone.png"
import add from "./images/location.png" 
import Type from "typewriter-effect"
import Footer from "./footer"

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useState } from "react"


export default function Contactus(){

  useState(()=>{
    AOS.init({duration:2000})
  })



    return(
        <div className="container">
          <Header/>

          <div className="main-contact">

            <div className="left">
              <h1 data-aos="fade-left">Contact Us</h1>

              <div className="mee">
                <span data-aos="fade-right" className="dell">
                  <img src={phone} alt="" />
                  <h3><Type
                     options={{
                      autoStart:true,
                      strings:['07061266382','09038823237'],
                      loop:true,
                      deleteSpeed:"30",
                      delay:"200",
                      wrapperClassName:"wrr"
                     }}
                  /></h3>
                </span>

                <span  data-aos="fade-left" className="dell">
                  <img src={add} alt="" className="location" />
                  <h3>Surulare, Lagos</h3>
                </span>

                <span data-aos="fade-right" className="dell">
                  <img src={email} alt="" />
                  <h3>idisiprosper87@gmail.com</h3>
                </span>
              </div>

            </div>

            <div className="right">
                   <h1 data-aos="fade-right">Get In  Touch With Us</h1>
                         <form>
                             <input data-aos="fade-left" type="text"  placeholder="First name"/>
                             <input data-aos="fade-right" type="text"  placeholder="Last name"/>
                             <input data-aos="fade-left" type="email" placeholder="Email" />
                             <input data-aos="fade-right" type="number"  placeholder="Phone"/>
                             <textarea data-aos="fade-left" cols="25" rows="8" placeholder="Start Typing"></textarea>

                             <button data-aos="fade-right" className="send-btn"> Send <span className='nnn'></span></button>
                         </form>
            </div>
            
          </div>

          <Footer/>




        
        </div>
    )
}

