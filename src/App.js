import React, {useState} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {  BrowserRouter as Router , Switch,Route,Redirect} from "react-router-dom";
import RouterWrapper from './RouterWrapper';
import RouterWrapperAuth from './RouterWrapperAuth';
import Home from './pages/Home';
import Service from './pages/Service';
import About from './pages/About';
import Contact from './pages/Contact';
import Lottery from './pages/Lottery';
import './App.css';

const  App = ()  => {
  const [isProtectedRoute, setIsProtectedRoute] = useState(true);
  return (
     <Router>
       <Switch>
       <RouterWrapper path="/" exact component={Home} />
       <RouterWrapper path="/home" exact component={Home}/>
       <RouterWrapper path="/about" exact  component={About}  />
       <RouterWrapper path="/lottery" exact  component={Lottery} />
       <RouterWrapper path="/contact" exact  component={Contact} />
      { /* <RouterWrapper path="/contact" exact  component={Contact} isProtectedRoute={isProtectedRoute} /> */}
       <Redirect to="/" />
     </Switch>
       </Router>
  );
}

export default App;
