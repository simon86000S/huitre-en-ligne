import React,{useEffect,useRef } from 'react';
import huitre3 from '../img/huitre3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBagShopping} from '@fortawesome/free-solid-svg-icons';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import "../../responsive.css";
import login from'../Login/index';



 const Header = () => {
const showLi = useRef(null)
const nav = useRef(null)




   const showMenu=()=>{
nav.current.classList.add("showMenu")
   }
  

   const hiddenMenu=()=>{
     nav.current.classList.remove('showMenu')
   }
const showli=()=>{
    showLi.current.classList.add('showLi')
}
const hiddenli=()=>{
    if(showLi.current.classList.remove('showLi'))
    showLi.current.classList.add('effectButton')
    }
   
       

    

    return (



        <div   className="q-hero">
            
            <h1><img style={{transform:"translate3d(-2px,12px,0)",height:"50px",width:'50px',borderRadius:'50%'}}src={huitre3}/>huître  
            en ligne
            
            <Link className='logo' to='/Welcome'><FontAwesomeIcon className='logoStry' style={{cursor:'pointer',color:'white',height:'30px',width:'50px'}} icon={faUserCircle} /></Link>
            <Link  to='/panier'><FontAwesomeIcon style={{cursor:'pointer',color:'white'}} icon={faBagShopping}></FontAwesomeIcon></Link></h1>
            
       <div onClick={showMenu}  className="menu-burger">
           <span></span>
           <span></span>
           <span></span>
        </div>
         
        <nav ref={nav} class="navigation">
                <ul  className="nav"  >
                <h1   className="title-nav">Menu</h1>
               
                <li style={{cursor:'pointer'}}  className='first-li'>NOS HUITRES</li>
               
                <div onClick={hiddenMenu} className="burger">
                    <span></span>
                    <span></span>
                    </div>
                <ul  className="nav-Menu">
                   
                   
                </ul>
                <li style={{cursor:'pointer'}}>NOS PRODUCTEURS</li>
                <li style={{cursor:'pointer'}}>BIO </li>
                <li style={{cursor:'pointer'}}>REPAS DE FETE</li>
                <li style={{cursor:'pointer'}} >QUALITE</li>
                <li style={{cursor:'pointer'}}>LIVRAISON</li>
                <li style={{cursor:'pointer'}}>CONTACT</li>
               </ul>
            </nav>
        </div>
        
      
        
    )
}
export default Header;