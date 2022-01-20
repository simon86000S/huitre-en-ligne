
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


function somme(){
  var nbr1, nbr2, sum;
  nbr1 =Number({counter});
  nbr2 = Number({price});
  sum = nbr1 + nbr2;

}



  
    return (
        <div style={{position:'fixed',zIndex:'1000',right:"0px",top:"250px",width:'50%',height:'50%',background:'grey'}} >
        
         <h1>votre panier</h1>
         
         <p>{count}</p>
        <p>{counter}</p>
      <h1>{counter}+{price.Firstprice}</h1>
         <p>{price.Firstprice}</p>
         <p>{price.secondPrice}</p> 
<button onClick={handleChange}>Appuyer</button>       

    somme()
  
        </div>
    )
}
export default Panier;
