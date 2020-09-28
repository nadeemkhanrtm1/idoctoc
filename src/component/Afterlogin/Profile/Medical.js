import React from 'react';
import Styles from "./Medical.module.css";
import {Link} from "react-router-dom";

const Medical = () => {
  const heading = {
    fontFamily: 'Overpass',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '700',
    color: '#000000'
  }

  const p = {
    color: '#000000'
  }

  const h4 = {
    fontFamily: 'Overpass',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '700'
  }

  const span = {
    position: 'relative',
    left: '50px',
    top: '10px',
    fontFamily: 'Overpass',
    fontSize: '16px',
    fontStyle: 'italic',
    fontWeight: '600',
    color: '#7A7A7A !important',
    textDecoration:'underline',


  }
  return (
    <React.Fragment>
      <form className={Styles.form}>
        <table className={Styles.table}>
          <tr>
            <th>
              <p style={heading}>Diseases/Ailments</p>
            </th>
          </tr>
          <tr>
            <th>
              <p style={p}>Diabetes:</p>
            </th>
            <td>
              <input type="radio" id="yes" name="diabetes" value="yes"/>
              <label for="yes">yes</label>
            </td>
            <td>
              <input type="radio" id="no" name="diabetes" value="no" className="input1"/>
              <label for="no" className="label1">no</label>
            </td>
            <td>
              <input type="radio" id="donotknow" name="diabetes" value="donotknow"/>
              <label for="donotknow">don't know</label>
            </td>
          </tr>
          <tr>
            <th>
              <p style={p}>Hypertension:<br/>(High blood pressure)</p>
            </th>
            <td>
              <input type="radio" id="yes1" name="hypertension" value="yes"/>
              <label for="yes1">yes</label>
            </td>
            <td>
              <input type="radio" id="no1" name="hypertension" value="no"/>
              <label for="no1">no</label>
            </td>
            <td>
              <input type="radio" id="donotknow1" name="hypertension" value="donotknow"/>
              <label for="donotknow1">don't know</label>
            </td>
          </tr>

          <tr>
            <th>
              <p style={p}>Hypotension:<br/>(Low blood pressure)</p>
            </th>
            <td>
              <input type="radio" id="yes2" name="hypotension" value="yes"/>
              <label for="yes2">yes</label>
            </td>
            <td>
              <input type="radio" id="no2" name="hypotension" value="no"/>
              <label for="no2">no</label>
            </td>
            <td>
              <input type="radio" id="donotknow2" name="hypotension" value="donotknow"/>
              <label for="donotknow2">don't know</label>
            </td>
          </tr>

          <tr>
            <th>
              <p style={p}>Any other Heart ailment:</p>
            </th>
            <td>
              <input type="radio" id="yes3" name="heartailment" value="yes"/>
              <label for="yes3">yes</label>
            </td>
            <td>
              <input type="radio" id="no3" name="heartailment" value="no"/>
              <label for="no3">no</label>
            </td>
            <td>
              <input type="radio" id="donotknow3" name="heartailment" value="donotknow"/>
              <label for="donotknow3">don't know</label>
            </td>
          </tr>

          <tr>
            <th>
              <p style={p}>Thyroid disorder:</p>
            </th>
            <td>
              <input type="radio" id="yes4" name="throid" value="yes"/>
              <label for="yes4">yes</label>
            </td>
            <td>
              <input type="radio" id="no4" name="throid" value="no"/>
              <label for="no4">no</label>
            </td>
            <td>
              <input type="radio" id="donotknow4" name="throid" value="donotknow"/>
              <label for="donotknow4">don't know</label>
            </td>
          </tr>
          <tr>
            <th>
              <p style={p}>Asthma:</p>
            </th>
            <td>
              <input type="radio" id="yes5" name="asthma" value="yes"/>
              <label for="yes5" className="label6">yes</label>
            </td>
            <td>
              <input type="radio" id="no5" name="asthma" value="no"/>
              <label for="no5" className="label6">no</label>
            </td>
            <td>
              <input type="radio" id="donotknow5" name="asthma" value="donotknow"/>
              <label for="donotknow5" className="label6">don't know</label>
            </td>
          </tr>

          <tr>
            <th>
              <p style={p}>History of epilepsy:<br/>(seizures)</p>
            </th>
            <td>
              <input type="radio" id="yes6" name="epilepsy" value="yes"/>
              <label for="yes6" className="label7">yes</label>
            </td>
            <td>
              <input type="radio" id="no6" name="epilepsy" value="no"/>
              <label for="no6" className="label7">no</label>
            </td>
            <td>
              <input type="radio" id="donotknow6" name="epilepsy" value="donotknow"/>
              <label for="donotknow6" className="label7">don't know</label>
            </td>
          </tr>

          <tr>
            <th>
              <p style={p}>Any other chest ailment:</p>
            </th>
            <td>
              <input type="radio" id="yes7" name="ailment" value="yes"/>
              <label for="yes7" className="label8">yes</label>
            </td>
            <td>
              <input type="radio" id="no7" name="ailment" value="no"/>
              <label for="no7" className="label8">no</label>
            </td>
            <td>
              <input type="radio" id="donotknow7" name="ailment" value="donotknow"/>
              <label for="donotknow7" className="label8">don't know</label>
            </td>
          </tr>

          <tr>
            <th>
              <p style={p}>Any Know allergy:</p>
            </th>
            <td>
              <input type="radio" id="yes8" name="allergy" value="yes"/>
              <label for="yes8" className="label9">yes</label>
            </td>
            <td>
              <input type="radio" id="no8" name="allergy" value="no"/>
              <label for="no8" className="label9">no</label>
            </td>
            <td>
              <input type="radio" id="donotknow8" name="allergy" value="donotknow"/>
              <label for="donotknow8" className="label9">don't know</label>
            </td>
          </tr>

          <tr>
            <th>
              <p style={p}>Recent treatment<br/>(last 2 weeks):</p>
            </th>
            <td>
              <input type="radio" id="yes9" name="treatment" value="yes"/>
              <label for="yes9" className="label10">yes</label>
            </td>
            <td>
              <input type="radio" id="no9" name="treatment" value="no"/>
              <label for="no9" className="label10">no</label>
            </td>
          </tr>
        </table>

        <table className={Styles.table2}>
          <tr>
            <th>
              <p style={p}>Any ongoing treatment:</p>
            </th>
            <td>
              <input type="radio" id="yes10" name="treatment ongoing" value="yes"/>
              <label for="yes10" className="label11">yes</label>
            </td>
            <td>
              <input type="radio" id="no10" name="treatment ongoing" value="no"/>
              <label for="no10" className="label11">no</label>
            </td>
          </tr>

          <tr>
            <th>
              <p style={p}>Any recent hospitilisation:</p>
            </th>
            <td>
              <input type="radio" id="yes11" name="treatment recent" value="yes"/>
              <label for="yes11" className="label12">yes</label>
            </td>
            <td>
              <input type="radio" id="no11" name="treatment recent" value="no"/>
              <label for="no11" className="label12">no</label>
            </td>
          </tr>

          <tr>
            <th>
              <p style={p}>Any past surgeries:</p>
            </th>
            <td>
              <input type="radio" id="yes12" name="treatment past" value="yes"/>
              <label for="yes12" className="label13">yes</label>
            </td>
            <td>
              <input type="radio" id="no12" name="treatment past" value="no"/>
              <label for="no12" className="label13">no</label>
            </td>
          </tr>
          <tr>
            <th>
              <b>Blood group:</b>
            </th>
            <td colSpan="2">
              <select className="form-control">
                <option selected></option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
                <option>don't know</option>
              </select>
            </td>
          </tr>
          <h4 style={h4}>
            BMI Calculation:
          </h4>
          <tr>
            <th>
              <p style={p}>height:</p>
            </th>
            <td colSpan="2">
              <input type="text" className="form-control"/>
            </td>
          </tr>
          <tr>
            <th>
              <p style={p}>weight:</p>
            </th>
            <td colSpan="2">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  aria-label=""
                  aria-describedby="basic-addon1"/>
                <div class="input-group-prepend">
                  <select className="form-control">
                    <option selected></option>
                    <option>Kg</option>
                    <option>lbs</option>
                  </select>
                </div>
              </div>
            </td>
          </tr>
          <h4 style={h4}>
            Your BMI (body mass index) is
          </h4>
          <tr className="text-center">
            <td colSpan="3">
              <button type="button" className={Styles.update}>UPDATE</button>
              <span style={span} >
                <Link className={Styles.span}>Remind me later</Link>
              </span>
            </td>
          </tr>
        </table>
      </form>
    </React.Fragment>
  )
}
export default Medical;
