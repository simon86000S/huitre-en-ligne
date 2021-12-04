import React from 'react';
import camion from '../img/camion.jpg';
import telephone from '../img/telephone.jpg';
import carte from '../img/carte.jpg';
import cadeaux from '../img/cadeaux.jpg';
import huitredessin from '../img/huitredessin.jpg';


 const Aside = () => {
    return (
        <div className="colunm-client">
            <ul>
                
           <li>Livraison garantie gratuit<img  src={camion}/></li>
       <li>Service client<img src={telephone}/></li> 
           <li>Paiement sécurisé<img src={carte}/></li>
               <li>Offres exclusives<img src={cadeaux}/></li>
           </ul>
            
           <div className="slide">
   
     
     <img className="img-huitre"src={huitredessin}></img><h1>Sélection d'huitre</h1>
        </div>
        </div>
        
    )
}
export default Aside;
