import "./styling/faq.css"
import Header from './header'
import FaqContainer from "./faqContainer"
import Footer from "./footer"

export default function Faq(){
    return(
    <div className="container">

      <Header/>
      <FaqContainer/>
      <Footer/>
    </div>

    )
}