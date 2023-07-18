import down from "./images/dowm.png"
import up from "./images/up.png"

import AOS from 'aos'
import 'aos/dist/aos.css'

import { useState,useEffect } from "react"

export default function FaqDesign(props){

    const [Show, Setshow] = useState(false)
    const[more,Setmore] = useState(false)

    function handlechange(){
        Setshow((ee)=>{
            return ! ee
        })
    }

    function handleShowmore(){
        Setmore((rrr)=>{
            return ! rrr
        })
    }

    useEffect(()=>{
        AOS.init({duration:2000})
    })




    return(
        <div className="faq-main">
            <div className="question" data-aos = 'zoom-in'>
                <h3>{props.questions}</h3>
                <img src={Show? up :down} width={30} onClick={handlechange} className="up-down"/>
            </div>
            <div className="answer" style={{display: Show ? "flex" : "none"}}>
                  <h4 >{more ? props.answer : `${props.answer.substring('0', '10')}....`}<button className="show-more" onClick={handleShowmore}>{more ? "showless": "showmore"}</button></h4>
            </div>
        </div>
    )
}