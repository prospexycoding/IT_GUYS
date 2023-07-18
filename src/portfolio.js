import Header from "./header";
import './styling/portfolio.css'
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import AliiceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Footer from "./footer"
import { useEffect } from "react";
import Aos from "aos";                                                                                                                      
import 'aos/dist/aos.css'
import ReactStar from 'react-rating-star-with-type'
import prosper from './images/prosper.jpeg'

export default function Portfolio(){

    useEffect(()=>{
        Aos.init({duration:2000})
    })
    
    return(
        <div className="container">
            <Header/>

            <h5 data-aos ="fade-right">Teams</h5>

            <div data-aos="fade-left" className="change">
                <AliiceCarousel  autoPlay infinite autoPlayInterval="3000">
                    <div className="aa">
                         <img src={prosper} alt=""  width={200} className="face"/>
                         <h3>Prosper</h3>
                         <span>
                            <ReactStar
                                 isEdit={true}
                                 size={20}
                            />
                         </span>
                         <h2>I am a web Designer with extensive <br/> experience, My expertise is to create <br/> full website, graphic design and many more. </h2>
                    </div>

                    <div className="aa">
                         <img src={img2} alt=""  width={200} className="face"/>
                         <h3>Kenneth</h3>
                         <span>
                            <ReactStar
                               isEdit={true}
                               size={20}   
                            />

                         </span>
                         <h2>I am a programmer</h2>
                    </div>

                    <div className="aa">
                         <img src={img3} alt=""  width={200} className="face"/>
                         <h3>Maleek</h3>
                         <span>
                            <ReactStar
                               isEdit={true}
                               size={20}   
                            />
                         </span>
                         <h2>I am a programmer</h2>
                    </div>

                    <div className="aa">
                         <img src={img3} alt=""  width={200} className="face"/>
                         <h3>Victor</h3>
                         <span>
                            <ReactStar
                               isEdit={true}
                               size={20}   
                            />
                         </span>
                         <h2>I am a programmer</h2>
                    </div>


                </AliiceCarousel>

            </div>
            <Footer/>
        </div>
    )
}