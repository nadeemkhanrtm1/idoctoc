import React from 'react'
import Medication1 from "../../../medication icons/Medication.png";
import Medication2 from "../../../medication icons/Medication2.png";
import Medication3 from "../../../medication icons/Medication3.png";
import Medication4 from "../../../medication icons/Medication4.png";
import scheduleAppointment from "../../../patient dashboard buttons/schedule app.png"
const Dashboard = () => {
    return (
        <React.Fragment>
            <div className="dashBoardContainer">
                <p className="dsh_heading">YOUR DAILY MEDICATION</p>
                <div className="dsh_Items">
                    <div><a><img src={Medication1} alt="..."/></a>
                    <a><img src={Medication2} alt="..."/></a>
                    <a><img src={Medication3} alt="..."/></a>
                    <a><img src={Medication4} alt="..."/></a>
                    </div>
                    <a><img src={scheduleAppointment} alt="..." className="schedule_app"/></a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Dashboard;
