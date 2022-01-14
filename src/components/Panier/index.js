
import React from 'react';


const Panier = ({state,setstate}) => {
  
    return (
        <div style={{position:'absolute',left:'50px',top:"300px",width:'80%',height:'50%',background:'red'}} >
         <button onClick={()=>setstate(state+1)} >Appuyer</button>
         <p>,dklfbndjlkdcnld</p>
       
  
        </div>
    )
}
export default Panier;
