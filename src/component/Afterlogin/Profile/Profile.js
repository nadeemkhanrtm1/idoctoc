import React, {useState} from 'react';
import Medical from "./Medical";
import Pro from "./Professional";
import {Route, Link} from 'react-router-dom';
import Navbar from '../../Afterlogin/Navbar';
import david from "../../../images/david.jpg"

function Profile() {
  const [title1,
    settitle1] = useState({background: '#FFE5C6'})
  const [title2,
    settitle2] = useState({background: '#FFFFFF'})
  const clicktitle1 = () => {
    if (title1.background === "#FFE5C6") {
      settitle1({background: '#FFFFFF'})
      settitle2({background: '#FFE5C6'})
    }
    if (title1.background === "#FFFFFF") {
      settitle1({background: '#FFE5C6'})
      settitle2({background: "#FFFFFF"})
    }
  }
  const clicktitle2 = () => {
    if (title2.background === "#FFFFFF") {
      settitle2({background: '#FFE5C6'})
      settitle1({background: "#FFFFFF"})
    } else {
      settitle2({background: '#FFFFFF'})
      settitle1({background: '#FFE5C6'})
    }
  }
  return (
    <React.Fragment>
      <Navbar/>
      <main className="mt-5 pt-5">
        <div className="Image_portion">
          <label for="customFile"><img src={david}/></label>
          <input type="file" className="d-none" id="customFile"/>
          <p>Dmitry Galkin,38<br/>
            NewYork,USA</p>
        </div>
        <div className="title_portion">
          <Link to="/profile" className="link" onClick={clicktitle1} style={title1}>Personal Details</Link>
          <Link
            to="/profile/medical_details"
            className="link"
            onClick={clicktitle2}
            style={title2}>Medical Details</Link>
        </div>
      </main>
      <Route exact path="/profile" component={Pro}/>
      <Route exact path="/profile/medical_details" component={Medical}/>
    </React.Fragment>
  );
}

export default Profile;
