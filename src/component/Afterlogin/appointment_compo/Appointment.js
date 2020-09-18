import React,{useState}from 'react';
import box from "../../../images/orange.png";
import bluebox from "../../../images/teal.png";
import findoc from "../../../patient dashboard buttons/find doctor.png";
import {Route,Switch,Link} from 'react-router-dom';
import Appointment_component from "./Appointment_section";
import Messages_component from "./Messages";
import Report_comp from "./Report";
import Prescrition_comp from "./Prescrition";

const Appointment = () => {
    const images = [box,bluebox];
    const [imagesChange1,setimagesChange1] = useState(images[0]);
    const [imagesChange2,setimagesChange2] = useState(images[0]);
    const [imagesChange3,setimagesChange3] = useState(images[0]);
    const [imagesChange4,setimagesChange4] = useState(images[0]);
    const [imagesChange5,setimagesChange5] = useState(images[0]);
    const [imagesChange6,setimagesChange6] = useState(images[0]);
    const [imagesChange7,setimagesChange7] = useState(images[0]);
    const [imagesChange8,setimagesChange8] = useState(images[0]);
    const [imagesChange9,setimagesChange9] = useState(images[0]);
    const [imagesChange10,setimagesChange10] = useState(images[0]);
    const [imagesChange11,setimagesChange11] = useState(images[0]);
    const [imagesChange12,setimagesChange12] = useState(images[0]);
    const [imagesChange13,setimagesChange13] = useState(images[0]);
    const [imagesChange14,setimagesChange14] = useState(images[0]);
    const [imagesChange15,setimagesChange15] = useState(images[0]);
    const [imagesChange16,setimagesChange16] = useState(images[0]);
    const [imagesChange17,setimagesChange17] = useState(images[0]);
    const [imagesChange18,setimagesChange18] = useState(images[0]);
    const clickHandle1 = () =>{
        setimagesChange1(images[1]);
    }
    const clickHandle2 = () =>{
        setimagesChange2(images[1]);
    }
    const clickHandle3 = () =>{
        setimagesChange3(images[1]);
    }
    const clickHandle4 = () =>{
        setimagesChange4(images[1]);
    }
    const clickHandle5 = () =>{
        setimagesChange5(images[1]);
    }
    const clickHandle6 = () =>{
        setimagesChange6(images[1]);
    }
    const clickHandle7 = () =>{
        setimagesChange7(images[1]);
    }
    const clickHandle8 = () =>{
        setimagesChange8(images[1]);
    }
    const clickHandle9 = () =>{
        setimagesChange9(images[1]);
    }
    const clickHandle10 = () =>{
        setimagesChange10(images[1]);
    }
    const clickHandle11 = () =>{
        setimagesChange11(images[1]);
    }
    const clickHandle12 = () =>{
        setimagesChange12(images[1]);
    }
    const clickHandle13 = () =>{
        setimagesChange13(images[1]);
    }
    const clickHandle14 = () =>{
        setimagesChange14(images[1]);
    }
    const clickHandle15 = () =>{
        setimagesChange15(images[1]);
    }
    const clickHandle16 = () =>{
        setimagesChange16(images[1]);
    }
    const clickHandle17 = () =>{
        setimagesChange17(images[1]);
    }
    const clickHandle18 = () =>{
        setimagesChange18(images[1]);
    }
    return (
        
        <div className="flexBox">
            <div className="flex1">
                <div className="innerFlexforFirstDiv">
                    <Link to="/schedule" className="link">Appointments</Link>
                    <Link to="/schedule/prescriptions" className="link">Prescriptions</Link>
                    <Link to="/schedule/report" className="link">Reports</Link>
                    <Link to="/schedule/messages" className="link">Messages</Link>
                </div>
            <Switch>
                <Route exact path="/schedule" component={Appointment_component}/>
                <Route exact path="/schedule/prescriptions" component={Prescrition_comp}/>
                <Route exact path="/schedule/report" component={Report_comp}/>
                <Route exact path="/schedule/messages" component={Messages_component}/>
            </Switch>
            </div>
            <div className="flex2">
                <h3>Choose upto 3 symptoms to<br/> find your doctor</h3>
                <div className="innerFlex">
                    <div className="innerContainer"> 
                        <a onClick={clickHandle1}><img src={imagesChange1}/>
                        <p>FEVER</p></a>
                    </div>
                    <div className="innerContainer"> 
                        <a onClick={clickHandle2}><img src={imagesChange2}/>
                        <p>Chest<br/>Pain</p></a>
                    </div>
                    <div className="innerContainer"> 
                        <a onClick={clickHandle3}><img src={imagesChange3}/>
                        <p>Throat<br/>pain</p></a>
                    </div>
                </div>
                <div className="innerFlex">
                    <div className="innerContainer"> 
                        <a onClick={clickHandle4}><img src={imagesChange4}/>
                        <p>Runing<br/>noise</p></a>
                    </div>
                    <div className="innerContainer"> 
                    <a onClick={clickHandle5}><img src={imagesChange5}/>
                        <p>Ear<br/>pain</p></a>
                    </div>
                    <div className="innerContainer"> 
                    <a onClick={clickHandle6}><img src={imagesChange6}/>
                        <p>Head<br/>ache</p></a>
                    </div>
                </div>
                <div className="innerFlex">
                    <div className="innerContainer"> 
                        <a style={{cursor:'pointer'}} onClick={clickHandle7}><img src={imagesChange7}/>
                        <p style={{fontSize:'0.899rem'}}>Difficulty<br/>in<br/>Breathing</p></a>
                    </div>
                    <div className="innerContainer"> 
                    <a onClick={clickHandle8}><img src={imagesChange8}/>
                        <p>Cough</p></a>
                    </div>
                    <div className="innerContainer"> 
                    <a onClick={clickHandle9}><img src={imagesChange9}/>
                        <p>Mouth/<br/>oral<br/>Cavity</p></a>
                    </div>
                </div>
                <div className="innerFlex">
                    <div className="innerContainer"> 
                    <a onClick={clickHandle10}><img src={imagesChange10}/>
                        <p>Lose<br/>Motions</p></a>
                    </div>
                    <div className="innerContainer"> 
                    <a onClick={clickHandle11}><img src={imagesChange11}/>
                        <p>Stomach<br/>pain</p></a>
                    </div>
                    <div className="innerContainer"> 
                    <a onClick={clickHandle12}><img src={imagesChange12}/>
                        <p>Vomitting</p></a>
                    </div>
                </div>
                <div className="innerFlex">
                    <div className="innerContainer"> 
                    <a onClick={clickHandle13}><img src={imagesChange13}/>
                        <p>Urinary<br/>Symptoms</p></a>
                    </div>
                    <div className="innerContainer"> 
                    <a onClick={clickHandle14}><img src={imagesChange14}/>
                        <p>Shoulder<br/>pain</p></a>
                    </div>
                    <div className="innerContainer"> 
                    <a onClick={clickHandle15}> <img src={imagesChange15}/>
                        <p>Back<br/>pain</p></a>
                    </div>
                </div>
                <div className="innerFlex">
                    <div className="innerContainer"> 
                    <a onClick={clickHandle16}><img src={imagesChange16}/>
                        <p>Arm/<br/>Hand<br/>pain</p></a>
                    </div>
                    <div className="innerContainer"> 
                    <a onClick={clickHandle17}><img src={imagesChange17}/>
                        <p>Hip/thigh<br/>pain</p></a>
                    </div>
                    <div className="innerContainer"> 
                    <a onClick={clickHandle18}><img src={imagesChange18}/>
                        <p>knee/<br/>leg pain</p></a>
                    </div>
                </div>
                <div className="innerFlex">
                    <a><img src={findoc} alt="..." className="findoc"/></a>
                </div>
            </div>
        </div>
        
    );
};

export default Appointment;
