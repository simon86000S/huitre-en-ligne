import React,{useEffect,useRef,useState,useContext} from 'react';
import huitre3 from '../img/huitre3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBagShopping} from '@fortawesome/free-solid-svg-icons';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {Link, NavLink, Redirect} from 'react-router-dom';
import "../../responsive.css";
import login from'../Login/index';
import { UserCount } from '../UserContext';
import { UserCounter } from '../UserContext';
import Oyester from '../Oyester';
import Panier from '../Panier';







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
   
       


    
    const [state, setstate] = useState(false)
    
    const {count,setCount} = useContext(UserCount)
    const {counter,setCounter} = useContext(UserCounter)

const handle=()=>{
    setstate(true)
}

    return (



        <div   className="q-hero">
         
            <h1><img style={{transform:"translate3d(-2px,12px,0)",height:"50px",width:'50px',borderRadius:'50%'}}src={huitre3}/>huître  
            en ligne
            <br></br>
            <div onClick={showMenu}  className="menu-burger">
           <span></span>
           <span></span>
           <span></span>
        </div>
        <Link style={{marginRight:"15px"}}className='logo' to='/Welcome'>
            <FontAwesomeIcon className='logoStry' style={{cursor:'pointer',color:'white'}} 
        icon={faUserCircle} /></Link>
        <FontAwesomeIcon style={{cursor:'pointer',color:'white'}}
        icon={faBagShopping}></FontAwesomeIcon>{count+counter}
           </h1>
      
       <button style={{color:"white",cursor:'pointer', background:'black',padding:'15px',fontSize:'15px',marginTop:'15px'}} onClick={handle}>Voir votre panier</button>
       
            
           {
               state && (<div>
              
              <Panier state={state} setState={setstate}/>
                <Link to='/Panier'></Link>
                </div>
                )
           }
   
     
         
        <nav ref={nav} class="navigation">
                <ul  className="nav"  >
                <h1   className="title-nav">Menu</h1>
                <div onClick={hiddenMenu} className="burger">
                    <span></span>
                    <span></span>
                    </div>
               
                    <Link style={{textDecoration:"none",listStyleType:"none"}} to ='/Oyester'> <li style={{cursor:'pointer'}}  className='first-li'>NOS HUITRES</li>
                           </Link>

              
               
                   
                   
               
                <li style={{cursor:'pointer'}}>NOS PRODUCTEURS</li>
               
                <Link style={{textDecoration:"none",listStyleType:"none"}} to ='/Contact'><li style={{cursor:'pointer'}}>CONTACT</li></Link>
               </ul>
            </nav>
           
        </div>
        
      
        
    )
}
export default Header;