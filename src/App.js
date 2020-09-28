import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import "./component/Afterlogin/AfterLog.css"
import ScrollToTop from './component/utilities/ScrollToTop';
import HomePage from "./component/BeforeLogin/HomePage";
import LogInPage from "./component/BeforeLogin/LoginPage";
import Home from './component/Afterlogin/appointment_compo/Home';
import Schedule from "./component/Afterlogin/Appointment";
import Profile from "./component/Afterlogin/Profile/Profile";

function App() {

  return (
    <BrowserRouter>
      <React.Fragment>
        <ScrollToTop/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/login" component={LogInPage}/>
          <Route path="/home" component={Home}/>
          <Route path="/profile" component={Profile}/>
          <Route exact path="/schedule" component={Schedule}/> 
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
