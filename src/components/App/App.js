import React from 'react';
import Header from '../Header';
import Login from'../Login';
import Panier from '../Panier';
import Landing from '../Landing';
import Article from '../Article';
import Aside from'../Aside';
import Wrapper from '../Wrapper';
import Signup from '../Signup';
import Welcome from '../Welcome';
import Sale from '../Sale';

import "../../index.css";
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';



function App() {
  

  return (



      <Router>

      <Header></Header>
     <Switch>
     
      <Route path='/Welcome' component={Welcome}></Route>
     <Route  path="/login"component={Login}/>
     <Route path='/Signup' component={Signup}/>
     <Route path='/sale' component={Sale}/>
     <Route path="/panier" component={Panier}/>

     
     
    
     </Switch>
   <Landing></Landing>
     <Article></Article>
     <Aside></Aside>
     <Wrapper></Wrapper>
     
      </Router>
      
    
  );
}

export default App;
