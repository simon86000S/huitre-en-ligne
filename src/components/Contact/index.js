import React,{useRef} from 'react';
import {Link} from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Contact = () => {
    
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_mxbrbq7', 'template_obg8fmv', form.current, 'user_FB5ogej5kgGW1sUteinHH')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className='Contact'>

        <div className='form'>
        <Link style={{listStyleType:'none'}}to='/' style={{textDecoration:"none",border:"1px solid #000",width:'10%',marginLeft:"15px",marginTop:'10px'}}><h1>X</h1></Link>

        <form ref={form} onSubmit={sendEmail}>
<div style={{border:"1px solid black",width:'60%',marginLeft:'25px'}} className='inputBox1'>
    <h2>IDENTIFICATION</h2>
    <label htmlFor='Entrez votre nom'>Entrez votre Nom</label>
    <input style={{textAlign:"center",marginBottom:'25px'}} placeholder='Votre nom' type='text' name="name"></input>
    <label htmlFor='Entrez votre nom'>Entrez votre Prénom</label>
    <input style={{textAlign:"center",marginBottom:'25px'}} placeholder='Votre prenom' type='text' name="subname"></input>
    <input style={{textAlign:"center",marginBottom:'25px'}} placeholder='Votre adresse email' type='text' name="email"></input>
    <textarea style={{textAlign:"center",marginBottom:'25px'}} placeholder='Votre message' type='text' name="message"></textarea>
  
</div>


<div style={{border:"1px solid black",width:'60%',marginLeft:'25px',marginTop:'5px'}} className='inputBox1'>
<h2>COORDONNEES</h2>
<div className='inputBox1'>

<label htmlFor='Entrez votre nom'>Entrez votre numero de rue </label>
    <input style={{width:'9%',padding:'2px',marginBottom:'5px'}} type='number' name="number"></input>

<label htmlFor='Entrez votre nom'>Entrez Votre addresse</label>
    <input style={{width:'45%',marginBottom:'25px'}} type='text' name="adress"></input>

    
    <label htmlFor='Entrez votre code postal'>Entrez votre code postal</label>
    <input  style={{width:'45%',marginBottom:'25px'}} type='text' name="numberCode"></input>

    <label htmlFor='Entrez votre telephone'>Entrez Votre telephone</label>
    <input  style={{width:'45%',marginBottom:'25px'}} type='tel' name="phone"></input>
</div>





</div>
<div className='inputBox1'>
   
    <input  style={{padding:'6px',width:'25%'}} type="submit"></input>
</div>










</form>
</div>








    </div> 
  
  )
}

export default Contact