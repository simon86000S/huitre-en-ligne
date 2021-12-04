
import { useState,useEffect} from 'react'; 
import {Link} from 'react-router-dom';
import {createUserWithEmailAndPassword} from"firebase/auth";
import {auth} from '../firebase';


 function Signup(){
   
    const[btn,setBtn]=useState(false)
    const[registerPassword,setRegisterPassword]=useState("")
   const[registerEmail,setRegisterEmail]=useState("")
   const[error,setError]=useState("")
  /*gestion d'erreur*/ 
const errorMsg=error!=="" &&<span>{error.message}</span>
useEffect(() => {
   
  if(registerPassword!==""){
     setBtn(true)
 }else{
     setBtn(false)
 }
   
}, [registerPassword])
    const register=async()=>{
     
        try{
const user= await createUserWithEmailAndPassword(
    auth,
   registerEmail,
    registerPassword
    );
    console.log(user)
    alert("success")
    setRegisterPassword("")
    setRegisterPassword("")
    
     }catch(error){
    console.log(error.message)
    alert("6 charactere minimum")
    
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
 {errorMsg}

</div>

</form>

{btn ?( <button  onClick={register} className="btn-acceuil" >Inscription</button>):
(<button style={{color:'black'}}disabled onClick={register} className="btn-acceuil" >Inscription</button>)

    }
<Link className="btn-acceuil" to="/Landing">Revenir page d'accueuil</Link>
         </div>
        
     )

 }

 export default Signup;