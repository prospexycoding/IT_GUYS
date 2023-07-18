import Header from './header'
import AliceCaurosel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import './styling/team.css'
import Footer from "./footer"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


export default function Team(){
    useEffect(()=>{
        AOS.init({duration:2000})
    })
    return(
        <div className="container">
           <Header/>
           <div className='ooo'>
                  <div className='absolut'></div>

                  <div className='Myname' data-aos="fade-left">
                    <h1 data-aos="zoom-in">Idisi Prosper <br/> <h3 className='web-h3'>Web Developer</h3></h1>
                  </div>

                  <div className='profile-box'>
                    <div className='profile-left'>
                        <span className='ttttt' data-aos="fade-left">
                            <h1 data-aos="fade-left">PROFILE</h1>
                            <p data-aos="zoom-in">  Lorem orem Lorem Lorem  <br/> Lorem Lorem Lorem Lorem <br/>Lorem Lorem Lorem <br/>Lorem Lorem Lorem Lorem Lorem Lorem</p> 
                        </span>

                        <span className='ttttt'>
                            <h1 data-aos="fade-left">SKILLS</h1>
                            <p data-aos="zoom-in">
                               Web Design, <br/>Web Development, <br/> Solution Solving and more... <br/> 
                            </p>
                        </span>

                        <span className='ttttt'>
                            <h1 data-aos="fade-left">LANGUAGES</h1>
                            <p data-aos="zoom-in">English Language</p>
                           
                        </span>
                    </div>

                    {/* right */}
                    <div className='profile-right'>
                        <span className='ttttt-right'>
                            <h1 data-aos="fade-left">STUDIES</h1>
                           <span data-aos="zoom-in">
                            <h4 data-aos="fade-right">Idisi Prosper</h4>
                                    <p data-aos="zoom-in"> National Diploma. <br/>Delta State Polytechnic Ozoro, <br/> 2020/2021</p>
                           </span>
                        </span>

                        <span className='ttttt-right'>
                            <h1 data-aos="fade-left">EXPREIENCE</h1>
                           <span data-aos="zoom-in">
                           <p data-aos="zoom-in">  Lorem orem Lorem Lorem  <br/> Lorem Lorem Lorem Lorem <br/>Lorem Lorem Lorem <br/>Lorem Lorem Lorem Lorem Lorem Lorem</p> 
                           </span>
                        </span>
                    </div>

                  </div>
                  <Footer/>
           </div>
        </div>
    )
}