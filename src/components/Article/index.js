import React,{useEffect} from 'react';
import {Link } from 'react-router-dom';
import huitre from '../img/huitre.png'
import Aos from 'aos';
import "aos/dist/aos.css";


const Article = () => {

    useEffect(() => {
        Aos.init({
            duration:2000
        })
      
    }, [])
    return (
        <div className="container-article">

            <div className='buttons'>
            <div data-aos="fade-right" className="article1">
               
            <h2>huître naturelle</h2>
            <p>une huitre exceptionnelle,<br></br>réservée aux connaisseurs</p>
                <Link className='btn' to="/">Découvrir</Link>
               
            
            
                            </div>

                            <div  data-aos="fade-left" className="article2">
                            <h2>--huître-- Bio</h2>
                            <p>---une huitre Bio,<br></br>à decouvrir dans la région---</p>

                           
                <Link  className='btn'  to="/">Découvrir</Link>
                <img style={{zIndex:"-1",height:'50px',marginTop:'35px',borderRadius:"50%"}} src={huitre}/>
               
                
                </div>
               
            </div>
           
            
        </div>
    )
}

export default Article;
