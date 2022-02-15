import React,{useEffect,useContext} from 'react'

import chevron2 from '../img/chevron2.png'
import huitre7 from '../img/huitre7.jpg'
import huitrecreusebaie from '../img/huitrecreusebaie.jpg';
import Aos from 'aos';
import { Link } from 'react-router-dom';
import { UserContext, UserCount,UserCounter,Userbutton } from '../UserContext';
import r from '../img/r.jpg';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

 const Oyester = () => {
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
    
      
        <div className="sale-oyster">
       
   <Link style={{fontSize:'30px',display:'flex',alignItems:'center',textDecoration:'none',color:'black',justifyContent:'center'}} to="/"><img style={{width:"100px",transform:'rotate(180deg)'}} src={chevron2}></img>Revenir à la page d'acceuil</Link><h1 style={{marginRight:'50px'}}  className='title-oyester'>Nos ventes</h1>
   
   <h2>huitre baie de quiberon</h2>
   
  <div style={{transform:'translateX(-33px)'}} className="wrapper-oyster1">
  
    
    <Link  to="/sale"><img data-aos="fade-up"  src={huitrecreusebaie} /></Link>
    <label style={{marginRight:'10px',display:'block',fontSize:'34px'}} htmlFor='quantité'>Quantité</label>
    
    <button value="+"  onClick={()=>{ setCount(count +1)}}style={{width:'50px'}}><i >+</i></button>
   
    
{
  stateButton ?  <button value="-" onClick={()=>{ setCount(count -1)}}style={{width:'50px'}}><i >-</i></button>:
  <button disabled value="-"  onClick={()=>{ setCount(count -1)}}style={{width:'50px'}}><i >-</i></button>
}
 
    <p >Prix: 14 euros la bourriche (huitres plates)</p> 
    <h2 style={{margin:"25px"}}>Nombre de bourriche:  {count}</h2>
    
    <img style={{marginTop:"150px"}} data-aos="fade-up"   src={huitre7}/>
   <label style={{marginRight:'10px',display: 'block',fontSize:'34px'}} htmlFor='quantité'>Quantité</label>

   <button value="+"  onClick={()=>{ setCounter(counter +1)}}style={{width:'50px'}}><i >+</i></button>
  

{
  stateButton ? <button   value="-"  onClick={()=>{ setCounter(counter-1)}}style={{width:'50px'}}><i >-</i></button>:
  <button disabled  value="-"  onClick={()=>{ setCounter(counter-1)}}style={{width:'50px'}}><i >-</i></button>
}
 
   
   
    <p >Prix: 12 euros la bourriche (huitres creuses)</p><h2 style={{margin:"25px"}}>Nombre de bourriche:  {counter}</h2>



  </div>
  
 </div>
 
  )
}
export default Oyester;