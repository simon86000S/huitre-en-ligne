
import { useState,useEffect} from 'react'; 
import {Link} from 'react-router-dom';
import {createUserWithEmailAndPassword,sendPasswordResetEmail} from"firebase/auth";
import {auth} from '../firebase';


 function Signup(){
   
    const[btn,setBtn]=useState(false)
    const[registerPassword,setRegisterPassword]=useState("")
   const[registerEmail,setRegisterEmail]=useState("")
   const[forgetPassword,setforgetPassword]=useState("")
   const[error,setError]=useState("")
  /*gestion d'erreur*/ 

const errorMsg=error===""&&<span>{error.message}</span>
useEffect(() => {
   
  if(registerPassword!=="" && registerEmail!==""){
     setBtn(true)
 }else{
     setBtn(false)
     
 }
   
}, [registerPassword,registerEmail])

    const register=async()=>{
     
        try{
        
const user= await createUserWithEmailAndPassword(
    auth,
   registerEmail,
    registerPassword,
    
    );

   
        
    alert("success:vous etes désormais incrit")
    setRegisterPassword("")
    setRegisterEmail("")

    
     }catch(error){

    if(error.code=== 'auth/invalid-email'){
        alert("format invalide")
    }
    
     }
    };

     return(
         <div id="main" className="signupUser">
               
         <h2>Inscription</h2>
      
<form className="form">
<div  className="inputBox">
<label>Entrer votre Email</label> 
<input 
onChange={(event)=>{setRegisterEmail(event.target.value)}}

   placeholder='Email'></input>

</div>

<div  className="inputBox">
<label>Entrer votre mot de passe</label> 
<input 
onChange={(event)=>{setRegisterPassword(event.target.value)}}
type="password" placeholder='votre mot de passe'></input>

<h1> {errorMsg}</h1>
<button onClick={register} style={{marginTop:'25px',border:"none",opacity:"0.4"}}>mot de passe oublié?</button>

</div>

</form>

{
btn ?( <button  onClick={register} className="btn-acceuil" >Inscription</button>):
(<button style={{color:'black'}}disabled onClick={register} className="btn-acceuil" >Inscription</button>)

    }
<Link className="btn-acceuil" to="/Landing">Revenir page d'accueil</Link>
         </div>
        
     )

 }

 export default Signup;