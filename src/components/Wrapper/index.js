import React,{Fragment,useEffect} from 'react';
import baie from '../img/photo1.jpg';
import huitrespeciale from'../img/huitrespeciale.jpg';
import photo1 from '../img/photo1.jpg';
import photo2 from '../img/photo2.jpg';
import photo3 from '../img/photo3.jpg';
import photo4 from '../img/photo4.jpg';
import photo5 from '../img/photo5.jpg';
import photo6 from '../img/photo6.jpg';
import huitrecreusebaie from '../img/huitrecreusebaie.jpg';
import {Link } from 'react-router-dom';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Wrapper = () => {
 
  
    return (
        
             <div className="containers">
           <div className="container1">
               <h1><i className='first-letter'>H</i>uitre de qualit<i className="last-letter">é</i></h1>
               <h2>L'huitres creuse</h2>
               <p>Nos huitres péchées dans la baie de Quiberon, offrent un gout exceptionnelle et unique de part sa qualité unique
                   Elles offrent des propriéte gustative inedite sa particularité en fait une huitre d'exception.
                   la qualité, la fraîcheur et le respect de la tradition sont au cœur de nos préoccupations.
                    C’est aussi la recherche constante de l’excellence à travers le goût des huîtres proposées.<br></br>
                    Creuses ou plates ?

D’un point de vue anatomique, on distingue les huîtres creuses des huîtres plates. Ces dernières sont les plus rares alors qu’elles étaient la seule espèce connue en France jusqu’au siècle dernier. Actuellement, ce sont les huîtres creuses qui sont le plus produites sur nos côtes.

Les huîtres plates ont un goût plus prononcé en iode que les creuses. Elles sont également plus chères car moins produites (2% de la production française).
               </p>
           </div>
           
        <div className="container2"><img style={{width:'50%',height:"100%",margin:"0"}} src={baie}></img>
        </div>
        <div className="container3">
            <h1><i className='first-letter'>Huitre de la</i> baie de <i className="last-letter">Quiberon</i></h1>
            <p>Retrouvez la gamme d’excellence des huîtres creuse produites par les maîtres affineurs fred qui est 
                l'une des exploitations les plus réputées de la baie de Quiberon. 
               </p>
            <img style={{display:'block',margin:'auto',width:'30%',height:'40%'}} src={huitrespeciale}></img>
        <Link className="btn" to="/">Découvrir</Link></div>
       
        
        <div className="article-images">
 <div>
  <img className="skewElem" style={{width:'100%',height:'100%'}} src={photo1}></img>
  </div>
  <div>
  <img className="skewElem"  style={{width:'100%',height:'100%'}} src={photo2}></img>
  </div>
  <div>
  <img className="skewElem"  style={{width:'100%',height:'100%'}} src={photo3}></img>
  </div>
  <div>
  <img className="skewElem"  style={{width:'100%',height:'100%'}} src={photo4}></img>
  
  </div>
  <div>
  <img className="skewElem"  style={{width:'100%',height:'100%'}} src={photo5}></img>
  
  </div>
  <div>
  <img className="skewElem"  style={{width:'100%',height:'100%'}} src={photo6}></img>
  
  
 </div>

 </div>
 <div className="sale-oyster">
   <h1>Nos ventes</h1>
  <div className="wrapper-oyster">
    <h2>huitre baie de quiberon</h2>
    <Link to="/sale"><img  src={huitrecreusebaie}/></Link>
    <p>Prix:14 euros la bourriche</p>

    

  </div>
 </div>
 

           </div>

    
            
       
    )
}

export default Wrapper;
