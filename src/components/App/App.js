import React,{useState} from 'react';
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

import { UserContext, UserCount, UserCounter} from '../UserContext';
import "../../index.css";
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';



function App() {
  const data={
    Firstprice:14,
    secondPrice:15
  }
  
    

   const [price, setPrice] = useState(data)
   const [count, setCount] = useState(0)
   const [counter, setCounter] = useState(0)


  return (



      <Router>
        
        
       <UserCount.Provider value={{count,setCount}}>
       
<UserContext.Provider value={{price,setPrice}}>
<UserCounter.Provider value={{counter,setCounter}}>
      <Header></Header>
 
     <Switch>
     
      <Route path='/Welcome' component={Welcome}></Route>
     <Route  path="/login"component={Login}/>
     <Route path='/Signup' component={Signup}/>
     <Route path='/sale' component={Sale}/>
     <Route path='/Panier' component={Panier}/>
   
     
  
    

     
     
    
     </Switch>
   <Landing></Landing>
     <Article></Article>
     <Aside></Aside>
     <Wrapper></Wrapper>
     </UserCounter.Provider>
     </UserContext.Provider>
     </UserCount.Provider>
   
    
      </Router>
      
    
  );
}

export default App;
