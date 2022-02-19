
import React,{useContext,useRef,useEffect,useState} from 'react';
import {  UserContext} from '../UserContext';
import { UserCount } from '../UserContext';
import{UserCounter} from '../UserContext'
import {Link} from 'react-router-dom';


const Panier = ({state,setState}) => {
  const {price,setPrice} = useContext(UserContext)

const {count,setCount} = useContext(UserCount)
const {counter,setCounter} = useContext(UserCounter)


 const handleChange=()=>{
  setState(false)
}
let resultat=count*parseInt(Number(14));

let resultat1=counter*parseInt(Number(15)) ;
let resultatTotal=count*parseInt(Number(14)) +parseInt(counter*Number(15)) ;

useEffect(() => {
 

 if(resultat<0 && resultat1<0||  count<=0 && counter<=0){
   setCount(0)
   setCounter(0)
 }
}, [resultat,resultat1,count,counter]);

const Reset=(e)=>{
  setCount(0)
  setCounter(0)
  
}


    return (
        <div className='Menu-choice' style={{position:'fixed',postion:"relative",zIndex:'100',opacity:"0.8",right:"15px",top:"250px",width:"50%",height:'61%',background:'grey'}} >
        
         <div style={{display:'flex',justifyContent:"space-around",alignContent:"center"}}>
           <h1>votre panier</h1> 
         <button style={{padding:"15px",cursor:'pointer'}} className='btn-choice' onClick={handleChange}>X</button>
         </div>
         <div style={{display:"flex",justifyContent:"space-around",marginTop:"35px"}}>
         <div className='oyester plate'> 
         <ul style={{listStyleType:"none",textDecoration:"none"}}>
           
           <li><h4>Quantité</h4></li>
           <li> <p>{count }</p>
           <li> <h4>Prix</h4></li>

           <p>{price.Firstprice}euros</p></li>
           <li> <h4>Total</h4></li>

           <li>{resultat} euros</li>
         </ul>
        
          
          
           </div>
        <div className='oyester creuse' >
          <ul style={{listStyleType:"none",textDecoration:"none"}}>
          <li><h4>Quantité</h4></li>
            <li><p>{counter}</p>
     </li>
     <li> <h4>Prix</h4></li>
     <li> <p>{price.secondPrice} euros</p> </li>
     <li><h4>Total</h4></li>
     <li>{resultat1}euros</li>
          </ul>
      
    
    </div>

 </div> 
 <h2>Total:  {resultatTotal}  euros</h2>
 <div className='btnId'>

<input style={{transform:'translate3d(87px, 33px, 0px)',backgroundColor:'#1a528b',color:'white',padding:"10px"}} type="submit" value='Envoyer votre commande'></input>
<button onClick={Reset} style={{transform:'translate3d(87px, 44px, 0px)',backgroundColor:'#1a528b',color:'white',padding:"10px",width:"45%"}} type="button" value='Reset'>Reset</button>
 </div>

  
        </div>
    )
}
export default Panier;
