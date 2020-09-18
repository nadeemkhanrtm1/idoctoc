import React from 'react';
import './App.css';
import Homepage from "./component/BeforeLogin/HomePage";
import {BrowserRouter , Switch , Route} from "react-router-dom";
import LoginPage from './component/BeforeLogin/LoginPage';
import Home from './component/Afterlogin/Home';
import SchedulePage from './component/Afterlogin/appointment_compo/SchedulePage';
import "./component/Afterlogin/AfterLog.css"

function App() {
  
  return (
  <BrowserRouter>
      <React.Fragment>  
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/home" component={Home}/>
            <Route path="/schedule" component={SchedulePage}/>
          </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
