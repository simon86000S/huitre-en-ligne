import React from 'react'

const Contact = () => {
  return (
    <div className='Contact'>

        <div className='form'>
        <button style={{border:"1px solid #000",width:'10%',marginLeft:"15px",marginTop:'10px'}}><h1>X</h1></button>
<div className='inputBox1'>
    <label htmlFor='Entrez votre nom'>Entrez Votre Nom</label>
    <input style={{textAlign:"center"}} placeholder='Votre nom' type='text'></input>
</div>


<div className='localisation'>
<div className='inputBox1'>
<label htmlFor='Entrez votre nom'>Entrez numero de rue </label>
    <input style={{width:'9%',padding:'2px'}} type='number'></input>

<label htmlFor='Entrez votre nom'>Entrez Votre addresse</label>
    <input type='text'></input>
   
</div>


<div className='inputBox1'>
    <label htmlFor='Entrez votre code postal'>Entrez Votre code postal</label>
    <input  style={{width:'9%'}} type='text'></input>
</div>

</div>





<div className='inputBox1'>
    <label htmlFor='Entrez votre telephone'>Entrez Votre telephone</label>
    <input type='tel'></input>
</div>



<div className='inputBox1'>
   
    <button type='submit'>Envoyer</button>
</div>



</div>








    </div> 
  
  )
}

export default Contact