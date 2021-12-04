import React from 'react';
import{Link} from 'react-router-dom';

const Welcome = () => {



    return (
        <div className="card-client">
           <div className="New-client">
               <h1>Nouveaux clients</h1>
               <p>Vous pouvez vous inscrire,vous pourrez passer vos commande plus rapidement et ainsi 
            etre informer pour pouvoir profitez des offres commerciales</p>
            <div className="btn-client">
            
            <Link className="btn-signup" to="/Signup">Créez votre compte</Link>
            <Link className='btn-login' to="/login">Se connecter</Link>
           
                 <Link className='btn-acceuil' to="/">Revenir à l'acceuil </Link>

            </div>
            </div>

            </div>
         
    )
}

export default Welcome;