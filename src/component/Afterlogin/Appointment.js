import React from 'react';
import Navbar from './Navbar';
import DarkBlueBox from '../utilities/DarkBlueBox';
import LightBlueBox from '../utilities/LightBlueBox';
import Anesthesiologist from "../../speciality/Anesthesiologist.png";
import Cardiologist from "../../speciality/Cardiologist.png";
import Dermatologist from "../../speciality/Dermatologist.png";
import Endocrinologist from "../../speciality/Endocrinologist.png";
import Nephrologist from "../../speciality/Nephrologist.png";
import Neurologist from "../../speciality/Neurologist.png";
import Obstetrician from "../../speciality/Obstetrician.png";
import Oncologist from "../../speciality/Oncologist.png";
import Opthamologist from "../../speciality/Opthamologist.png";
import Pediatrician from "../../speciality/Pediatrician.png";
import Physiotherapist from "../../speciality/Physiotherapist.png";
import Pulmonologist from "../../speciality/Pulmonologist.png";
import Radiologist from "../../speciality/Radiologist.png";
import Surgeon from "../../speciality/Surgeon.png";
import FamilyPhysician from "../../speciality/FamilyPhysician.png";
import Psychiatrist from "../../speciality/Psychiatrist.png";
import ShadeOrange from '../utilities/ShadeOrange';
import ShadeDarkOrange from '../utilities/ShadeDarkOrange';

const Home = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <div className="container-fluid sacontainer">
        <div className="row">
          <div className="col-lg-9 col-12 safirstdiv">
            <div className="row mb-3 pl-5">
              <div className="col-12">
                <h3>Select by Speciality</h3>
              </div>
            </div>
            <div className="row text-center p-0">
              <div className="col-12 p-0">
                <DarkBlueBox image={FamilyPhysician} title="Family Physician"/>
                <LightBlueBox image={Pediatrician} title="Pediatrician"/>
                <DarkBlueBox image={Obstetrician} title="Obstetrician"/>
                <LightBlueBox image={Surgeon} title="Surgeon"/>
                <DarkBlueBox image={Psychiatrist} title="Psychiatrist"/>
                <LightBlueBox image={Cardiologist} title="Cardiologist"/>
                <DarkBlueBox image={Dermatologist} title="Dermatologist"/>
                <LightBlueBox image={Endocrinologist} title="Endocrinologist"/>
                <LightBlueBox image={Nephrologist} title="Nephrologist"/>
                <DarkBlueBox image={Opthamologist} title="Opthamologist"/>
                <LightBlueBox image={Pulmonologist} title="Pulmonologist"/>
                <DarkBlueBox image={Neurologist} title="Neurologist"/>
                <LightBlueBox image={Radiologist} title="Radiologist"/>
                <DarkBlueBox image={Anesthesiologist} title="Anesthesiologist"/>
                <LightBlueBox image={Physiotherapist} title="Physiotherapist"/>
                <DarkBlueBox image={Oncologist} title="Oncologist"/>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-12">
            <div className="row">
              <div className="col-12">
                <h3 className="text-center selectdoctor">Select your doctor</h3>
              </div>
              <div className="col-lg-6 col-12 my-lg-5">
                <div class="form-group">
                  <label for="Doctorsname">Doctor’s name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Doctorsname"
                    placeholder="Enter your text here"/>
                </div>
              </div>
              <div className="col-lg-6 col-12 my-lg-5">
                <div className="form-group">
                  <label for="location">Location</label>
                  <select class="form-control" id="location">
                    <option selected></option>
                    <option value="india">INDIA</option>
                    <option value="USA">USa</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div class="form-group">
                  <label for="doctorspecialty">Doctor’s specialty</label>
                  <input
                    type="text"
                    class="form-control"
                    id="doctorspecialty"
                    placeholder="Enter your text here"/>
                </div>
              </div>
              <div className="col-12 text-center">
                <button type="button" class="btn btn-primary mt-lg-5 px-5 py-2 buttonfind">Find</button>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-center m-0 mt-lg-3 selectdoctor">Select your symptoms</h1>
        <p className="text-center m-0 chooseuptofive">(Choose upto five)</p>
        <div className="row mx-auto mt-lg-3 mb-0">
          <div className="col-12 mb-0 selectyoursymptoms">
            <ShadeOrange title="FEVER"/>
            <ShadeDarkOrange title="Chest Pain"/>
            <ShadeOrange title="Throat Pain"/>
            <ShadeDarkOrange title="Running/ blocked Nose"/>
            <ShadeOrange title="EAR Pain/ discharge"/>
            <ShadeDarkOrange title="HEAD ACHE"/>
            <ShadeOrange title="Difficulty in Breathing"/>
            <ShadeDarkOrange title="COUGH"/>
            <ShadeOrange title="Mouth/ oral cavity"/>
            <ShadeDarkOrange title="Neck pain"/>
            <ShadeOrange title="Abdomen Pain"/>
            <ShadeDarkOrange title="Stomach pain"/>
            <ShadeOrange title="Vomitting "/>
            <ShadeDarkOrange title="Lose motions"/>
            <ShadeOrange title="Bleeding from rectum"/>
            <ShadeDarkOrange title="Loss of appetite "/>
            <ShadeOrange title="Urinary symptoms "/>
            <ShadeDarkOrange title="Haematuria (bloor in urine)"/>
            <ShadeOrange title="Shoulder Pain"/>
            <ShadeDarkOrange title="Back Pain"/>
            <ShadeOrange title="Arm/ hand Pain"/>
            <ShadeDarkOrange title="Hip/thigh Pain"/>
            <ShadeOrange title="Knee/ leg Pain"/>
            <ShadeDarkOrange title="Skin allergy/ rashes"/>
          </div>
          <div className="col-12 text-center mt-0">
            <button type="button" class="btn btn-primary px-5 py-2 mb-2 finddoc">Find Doctor</button>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default Home
