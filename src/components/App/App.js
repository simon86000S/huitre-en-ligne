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
import Oyester from '../Oyester';
import { UserContext, UserCount, UserCounter,Userbutton} from '../UserContext';
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
   const [stateButton, setstateButton] = useState(true)
 

  return (



      <Router>
        
        <Userbutton.Provider value={{stateButton,setstateButton}}>
       <UserCount.Provider value={{count,setCount}}>
       
<UserContext.Provider value={{price,setPrice}}>
<UserCounter.Provider value={{counter,setCounter}}>
      <Header></Header>

 
     <Switch>
     
      <Route path='/Welcome' component={Welcome}></Route>
     <Route  path="/login"component={Login}/>
     <Route path='/Signup' component={Signup}/>
     <Route path='/Oyester' component={Oyester}></Route>
     <Route path='/Panier' component={Panier}/>
   
     
     
    
     </Switch>
   <Landing></Landing>
     <Article></Article>
     <Aside></Aside>
     <Wrapper></Wrapper>
     </UserCounter.Provider>
     </UserContext.Provider>
     </UserCount.Provider>
     </Userbutton.Provider>
    
      </Router>
      
    
  );
}

export default App;
