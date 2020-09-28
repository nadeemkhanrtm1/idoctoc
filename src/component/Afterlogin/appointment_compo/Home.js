import React from 'react';
import Dash from "./Dashboard";
import Appointment from "./Appointment";
import Navbar from "../Navbar";
const SchedulePage = () => {
    return (
        <>
        <Navbar/>
        <div className="mt-5 pt-4">
         <Dash />
         <Appointment/>
         </div>   
        </>
    )
}
export default SchedulePage;
