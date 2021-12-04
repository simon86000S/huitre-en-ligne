import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import {faAnchor} from '@fortawesome/free-solid-svg-icons';



const Landing = () => {
    return (
        <div className="container">
           <FontAwesomeIcon style={{color:'blue'}} icon={faAnchor}/>
           <h1><i className='ancre' style={{marginRight:'5px'}} className="dash-blue">---</i><span style={{color:'blue'}}>Du producteur</span> au <span style={{color:'red'}}>consommateur</span><i style={{marginLeft:'5px'}} className="dash-red">---</i></h1>
           <FontAwesomeIcon style={{color:'red'}} icon={faAnchor}/>


</div>



    )
}

export default Landing
