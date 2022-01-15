
import React,{useContext} from 'react';
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
  
    return (
        <div style={{position:'fixed',zIndex:'1000',right:"0px",top:"250px",width:'50%',height:'50%',background:'grey'}} >
        
         <h1>votre panier</h1>
         <p>{count}</p>
        <p>{counter}</p>
      
         <p>{price.Firstprice}</p>
         <p>{price.secondPrice}</p> 
<button onClick={handleChange}>Appuyer</button>       

       
  
        </div>
    )
}
export default Panier;
