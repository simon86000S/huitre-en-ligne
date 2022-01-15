
import React,{useContext} from 'react';
import { UserContext } from '../UserContext';

const Panier = () => {
  const {price,setPrice} = useContext(UserContext)
  
    return (
        <div style={{position:'absolute',right:"0px",top:"250px",width:'50%',height:'50%',background:'grey'}} >
        
         <h1>votre panier</h1>

         
         

       
  
        </div>
    )
}
export default Panier;
