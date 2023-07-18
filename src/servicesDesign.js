
import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

export  default function ServicesDesign(props){

    useEffect(()=>{
         AOS.init({duration:2000})
    },[])



    return(
        <div className="service-design" data-aos= "fade-left">
            <img src={props.image} data-aos="fade-down"/>
            <h3 data-aos="fade-right">{props.name}</h3>
            <p data-aos = "fade-left">{props.text}</p>
        </div>
    )
}