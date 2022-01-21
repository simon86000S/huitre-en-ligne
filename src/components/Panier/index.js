
import React,{useContext,useRef} from 'react';
import { UserContext, UserCountSecond } from '../UserContext';
import { UserCount } from '../UserContext';
import{UserCounter} from '../UserContext'
import {Link} from 'react-router-dom'

const Panier = ({state,setState}) => {
  const {price,setPrice} = useContext(UserContext)
const {count,setCount} = useContext(UserCount)
const {counter,setCounter} = useContext(UserCounter)

 const handleChange=()=>{
  setState(false)
}

let resulat=count*Number(14)
let resulat1=counter*Number(12)
let resultatTotal=resulat+resulat1




    return (
        <div style={{position:'fixed',zIndex:'1000',right:"0px",top:"250px",width:'50%',height:'50%',background:'grey'}} >
        
         <h1>votre panier</h1>
         <div style={{display:"flex",justifyContent:"space-around",marginTop:"35px"}}>
         <div className='oyester plate'> 
         <ul style={{listStyleType:"none",textDecoration:"none"}}>
           <li><h4>Quantité</h4></li>
         

           <li> <p>{count }</p>
           <li> <h4>Prix</h4></li>

           <p>{price.Firstprice}euros</p></li>
           <li> <h4>Total</h4></li>

           <p>{resulat} euros</p>
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
     <li>{resulat1}</li>
          </ul>
      
         
    </div>

 </div> 
 <h2>Total:  {resultatTotal}  euros</h2>
 <button onClick={handleChange}>Appuyer</button>
<button >reset</button>
 
  
        </div>
    )
}
export default Panier;
