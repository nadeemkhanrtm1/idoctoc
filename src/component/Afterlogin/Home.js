import React, {useState} from 'react';
import Blue from "../../images/blue.png";
import find from "../../images/Rectangle 15.png";
import orange from "../../images/orange.png";
import Navbar from './Navbar';

const Home = () => {
  const arr = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ];
  return (
    <React.Fragment>
      <Navbar/>
      <div className="hmmaindiv">
        <div className="hmfirstinnerdiv">
          <p>Select by Speciality</p>
          <div className="hmimgdiv">
            {arr.map(val => <div className="hminnerflex1">
              <img src={Blue} alt="..." key={val}></img>
              <p >Family physician</p>
            </div>)
}
          </div>
          <div className="hmimgdiv">
            {arr.map(val => <div className="hminnerflex1">
              <img src={Blue} alt="..." key={val}></img>
              <p >Family physician</p>
            </div>)
}
          </div>
        </div>
        <div className="hmsecondinnerdiv">
          <p>Select Your Doctors</p>
          <div className="hminnersecondivflex1">
            <div className="hminnersecondivflex11">
              <label>Doctor's Name:</label><br/>
              <input type="text" placeholder="doctors name"/>
            </div>
            <div className="hminnersecondivflex22">
              <label>Location</label><br/>
              <select>
                <option>f</option>
              </select>
            </div>

          </div>
          <div className="hminnersecondivflex2">
            <div className="hminnersecondivflex33">
              <label>Doctor's Speciality:</label><br/>
              <input type="text" placeholder="doctors speciality"/>
            </div>
          </div>
          <div className="hmfindbtndiv">
            <img src={find} className="hmfind" alt="..."/>
          </div>
        </div>
      </div>
      {/*select your symptoms */}
      <div className="hmselectdiv">
        <p>Select Your Symptoms</p>
        <p>(Choose upto five)</p>
        <div className="hmimgdiv">
          {arr.map(val =>< img src = {
            orange
          } />)}
        </div>
        <div className="hmimgdiv">
          {arr.map(val =>< img src = {
            orange
          } />)}
        </div>
        <div className="hmimgdiv">
          {arr.map(val =>< img src = {
            orange
          } />)}
        </div>
        <div className="hmimgdiv">
          <button className="finddoctorbtn">FIND DOCTOR</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
