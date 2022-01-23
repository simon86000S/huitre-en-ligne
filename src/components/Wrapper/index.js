import React,{Fragment,useEffect,useState,useContext} from 'react';
import baie from '../img/photo1.jpg';
import huitrespeciale from'../img/huitrespeciale.jpg';
import photo1 from '../img/photo1.jpg';
import photo2 from '../img/photo2.jpg';
import photo3 from '../img/photo3.jpg';
import photo4 from '../img/photo4.jpg';
import photo5 from '../img/photo5.jpg';
import photo6 from '../img/photo6.jpg';
import huitre7 from '../img/huitre7.jpg'
import huitrecreusebaie from '../img/huitrecreusebaie.jpg';
import {Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";
import { UserContext, UserCount,UserCounter,Userbutton } from '../UserContext';






const Wrapper = () => {
 const {price,setPrice}= useContext(UserContext)
const {count,setCount} = useContext(UserCount)
const{counter,setCounter}=useContext(UserCounter)
const{stateButton, setstateButton}=useContext(Userbutton)

  useEffect(() => {
    Aos.init({
        duration:2000
    })

  
}, [])
 useEffect(() => {
   if(counter>=0 && count>=0){
     setstateButton(true)
   }else if (count<=0 || counter<=0 || count+counter<=0  ){
    setstateButton(false)
    setCount(0)
    setCounter(0)
   }
 }, [counter,count])


 
  
    return (
        
             <div className="containers">
           <div data-aos="fade-right" className="container1">
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
           
        <div  data-aos="fade-left" className="container2"><img style={{width:'50%',height:"100%",margin:"0"}} src={baie}></img>
        </div>
        <div  data-aos="fade-bottom" className="container3">
            <h1  data-aos="fade-bottom"><i className='first-letter'>Huitre de la</i> baie de <i className="last-letter">Quiberon</i></h1>
            <p>Retrouvez la gamme d’excellence des huîtres creuse produites par les maîtres affineurs fred qui est 
                l'une des exploitations les plus réputées de la baie de Quiberon. 
               </p>
            <img style={{display:'block',margin:'auto',width:'30%',height:'40%'}} src={huitrespeciale}></img>
        <Link className="btn" to="/">Découvrir</Link></div>
       
        
        <div  className="article-images">
 <div  >
  <img  data-aos="fade-right" className="skewElem" style={{width:'100%',height:'100%'}} src={photo1}></img>
  </div>
  <div>
  <img  data-aos="fade-left" className="skewElem"  style={{width:'100%',height:'100%'}} src={photo2}></img>
  </div>
  <div>
  <img  data-aos="fade-right" className="skewElem"  style={{width:'100%',height:'100%'}} src={photo3}></img>
  </div>
  <div>
  <img  data-aos="fade-left"className="skewElem"  style={{width:'100%',height:'100%'}} src={photo4}></img>
  
  </div>
  <div>
  <img  data-aos="fade-right"className="skewElem"  style={{width:'100%',height:'100%'}} src={photo5}></img>
  
  </div>
  <div>
  <img  data-aos="fade-left" className="skewElem"  style={{width:'100%',height:'100%'}} src={photo6}></img>
  
  
 </div>

 </div>
 <div className="sale-oyster">
   <h1 className='title-oyester'>Nos ventes</h1>
   <h2>huitre baie de quiberon</h2>
  <div style={{transform:'translateX(-80px)'}} className="wrapper-oyster">
    
    <Link  to="/sale"><img data-aos="fade-up"  src={huitrecreusebaie} /></Link>
    <label style={{marginRight:'10px',display:'block',fontSize:'20px'}} htmlFor='quantité'>Quantité</label>
    <button value="+"  onClick={()=>{ setCount(count +1)}}style={{width:'50px'}}><i >+</i></button>
   
    
{
  stateButton ?  <button value="-" onClick={()=>{ setCount(count -1)}}style={{width:'50px'}}><i >-</i></button>:
  <button disabled value="-"  onClick={()=>{ setCount(count -1)}}style={{width:'50px'}}><i >-</i></button>
}
 
    <p >Prix: 14 euros la bourriche (huitres plates)</p>
    
    <Link to="/sale"><img style={{marginTop:"150px"}} data-aos="fade-up"   src={huitre7}/></Link>
   <label style={{marginRight:'10px',display: 'block',fontSize:'20px'}} htmlFor='quantité'>Quantité</label>

   <button value="+"  onClick={()=>{ setCounter(counter +1)}}style={{width:'50px'}}><i >+</i></button>
  

{
  stateButton ? <button   value="-"  onClick={()=>{ setCounter(counter-1)}}style={{width:'50px'}}><i >-</i></button>:
  <button disabled  value="-"  onClick={()=>{ setCounter(counter-1)}}style={{width:'50px'}}><i >-</i></button>
}
 
   
   
    <p >Prix: 12 euros la bourriche (huitres creuses)</p>

  

  </div>
 </div>
 

           </div>

    
            
       
    )
}

export default Wrapper;
