import { ServiceArray } from "./servicesArray";
import ServicesDesign from "./servicesDesign";


export default function ServiceContainer(){

    const done = ServiceArray.map((ee)=>{
       return(
                  <ServicesDesign  image={ee.image}
                                    text={ee.text}
                                     name={ee.name}/>
       ) 
    })








    return(
        <div className="serv-cont">
            <div className="serve-box">
                   {done}
            </div>
        </div>
    )
}