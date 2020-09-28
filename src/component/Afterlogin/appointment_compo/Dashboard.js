import React from 'react'
import Medication1 from "../../../medication icons/Medication.png";
import Medication2 from "../../../medication icons/Medication2.png";
import Medication3 from "../../../medication icons/Medication3.png";
import Medication4 from "../../../medication icons/Medication4.png";
import scheduleAppointment from "../../../patient dashboard buttons/schedule app.png"
const Dashboard = () => {
  const p = {
    fontFamily: 'Lato',
    fontSize: '13px',
    fontStyle: 'normal',
    fontWeight: '700',
    color: '#486581',
    marginBottom:'0px',
  }
  const button = {
   color:'#000000',
   borderRadius:'30px',
   background: '#FFAC50',
   border:'none',
  }
  return (
    <React.Fragment>
      <div className="dashBoardContainer">
        <p className="dsh_heading" style={p}>YOUR DAILY MEDICATION</p>
        <div className="dsh_Items">
          <div>
            <a><img src={Medication1} alt="..."/></a>
            <a><img src={Medication2} alt="..."/></a>
            <a><img src={Medication3} alt="..."/></a>
            <a><img src={Medication4} alt="..."/></a>
          </div>
          <button className="btn btn-primary px-4 py-2" style={button}>Schedule Appointment</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Dashboard;
