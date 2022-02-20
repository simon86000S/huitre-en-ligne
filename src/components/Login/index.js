
import { useState} from 'react'; 
import {Link} from 'react-router-dom';
import {signInWithEmailAndPassword} from"firebase/auth";
import {auth} from '../firebase';


 function Login(){
    
    const[loginPassword,setLoginPassword]=useState("")
   const[loginEmail,setLoginEmail]=useState("")
   

   
    const register=async()=>{
        try{
const user= await signInWithEmailAndPassword(
    auth,
   loginEmail,
    loginPassword
    );
    
    alert("success: vous etes connecté")
    setLoginEmail('')
    
    
     }catch(error){
    console.log(error.message)
    alert('le mot de passe doit contenir minimum 6 charactére ')
    
     }
    };

     return(
         <div id="main" className="signupUser">
            
         <h2>Connectez-vous à votre compte</h2>
<form className="form">
<div  className="inputBox">
<label>Entrer votre Email</label> 
<input 
onChange={(event)=>{setLoginEmail(event.target.value)}}


   placeholder='Email'></input>

</div>
<div  className="inputBox">
<label>Entrer votre mot de passe</label> 
<input 
onChange={(event)=>{setLoginPassword(event.target.value)}}
type="password" placeholder='votre mot de passe'></input>


</div>

</form>

<button  onClick={register} className="btn-acceuil" >Connexion</button>
<Link className="btn-acceuil" to="/Signup">Vous voulez vous incrire? incrivez-vous</Link>
<Link className="btn-acceuil" to="/Landing">Revenir page d'accueil</Link>


         </div>
        
     )

 }

 export default Login;