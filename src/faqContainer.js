import "./styling/faq.css"
import { Array } from "./faqArray"
import FaqDesign from "./faqDesign"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

export default function FaqContainer(){
    useEffect(()=>{
        Aos.init({duration:2000})
    })

    const done = Array.map((aaa)=>{
       return(
            <FaqDesign questions={aaa.question}
                       answer={aaa.answer}/>
       )  
    })


    return(
        <div className="faq-contain">
            <h1 data-aos="fade-left">Faq</h1>
            <div className="faq-contain-box">
                 {done}
            </div>
        </div>
    )
}