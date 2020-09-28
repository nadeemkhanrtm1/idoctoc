import React from 'react';
import Styles from "./Professional.module.css";
import {Link} from "react-router-dom"

const Professional = () => {
  //patient ID
  const patientID = "ABCD1234";

  //first Name
  const firstName = "First Name";

  //middle Name
  const midName = "Mid Name";

  //last Name
  const lastName = "Last Name";

  //age
  const age = 0;


  //styles
  const i = {
    fontFamily: 'Overpass',
    fontSize: '16px',
    fontStyle: 'italic',
    fontWeight: '600',
    color:'#7A7A7A',
    textDecoration:'underline',
  }

  const i2= {
    fontFamily: 'Overpass',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '200',
    color:'#7A7A7A',
  }
  return (
    <React.Fragment>
      <form className={Styles.form}>
        <table className={Styles.table}>
          <tr >
            <th>
              <b>Patient ID:</b>
            </th>
            <td>
              <p>{patientID}</p>
            </td>
          </tr>
          <tr>
            <th>
              <b>Name of the patient:</b>
            </th>
            <td>
              <p>{firstName}</p>
            </td>
            <td>
              <p>{midName}</p>
            </td>
            <td>
              <p>{lastName}</p>
            </td>
          </tr>
          <tr>
            <th>
              <b>Date of birth:</b>
            </th>
            <td className="form-group">
              <select className="form-control">
                <option>MM</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
            </td>
            <td className="form-group">
              <select className="form-control">
                <option>DD</option>
                <option value="1">1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
              </select>
            </td>
            <td className="form-group">
              <select className="form-control">
                <option>YYYY</option>
                <option>1998</option>
                <option>1999</option>
                <option>2000</option>
                <option>2001</option>
                <option>2002</option>
                <option>2003</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>
              <b>Age:</b>
            </th>
            <td>
              <p>{age}</p>
            </td>
          </tr>
          <tr>
            <th>
              <b>Sex:</b>
            </th>
            <td>
              <input type="radio" id="M" name="sex" value="M"/>
              <label for="M">M</label>
            </td>
            <td>
              <input type="radio" id="F" name="sex" value="F"/>
              <label for="F">F</label>
            </td>
            <td>
              <input type="radio" id="O" name="sex" value="O"/>
              <label for="O">O</label>
            </td>
          </tr>
          <tr>
            <th>
              <b>Mobile phone number:</b>
            </th>
            <td colSpan="2">
              <input
                type="text"
                id="mob"
                name="mob"
                placeholder="Enter phone number"
                className="form-control"></input>
            </td>
          </tr>
          <tr>
            <th>
              <b>VERIFICATION:</b><br/><i style={i2}>(through OTP)</i></th>
            <td colSpan="2">
              <input
                type="text"
                id="verify"
                name="verify"
                placeholder="Enter OTP"
                className="form-control d-inline"/>
              <span className="d-inline">
                <Link>
                  <i style={i}>send OTP</i>
                </Link>
              </span>
            </td>
          </tr>
          <tr>
            <th>
              <b>E-mail:</b>
            </th>
            <td colSpan="2">
              <input type="text" placeholder="Enter e-mail" className="form-control"/>
            </td>
          </tr>
          <tr>
            <th>
              <b>E-MAIL VERIFICATION:</b><br/><i style={i2}>(OPTIONAL)(through OTP)</i></th>
            <td colSpan="2">
              <input
                type="text"
                id="verifyemail"
                name="verifyemail"
                placeholder="Enter OTP"
                className="form-control"/>
              <span className="d-inline">
                <Link>
                  <i style={i}>send OTP</i>
                </Link>
              </span>
            </td>
          </tr>
        </table>
        <table className={Styles.table2}>
          <tr>
            <th>
              <b>Family group name:</b>
            </th>
            <td><p>ABC</p></td>
          </tr>
          <tr>
            <td colSpan="3" style={{
              textAlign: "center"
            }}>
              <button type="button" className={Styles.update}>UPDATE</button>
            </td>
          </tr>
          <tr>
            <th>
              <label for="checkbox">Agreement Terms and condition</label>
            </th>
            <td><input type="checkbox" id="checkbox" name="TandC"/></td>
          </tr>
          <tr>
            <th>
              <label for="checkbox2">Terms of privacy</label>
            </th>
            <td><input type="checkbox" id="checkbox2" name="TofP"/></td>
          </tr>
          <tr>
            <th>
              <label for="idoc">idocloc.com will share call details<br/>by SMS/E-MAILS</label>
            </th>
            <td><input type="checkbox" id="idoc" name="idoc"/></td>
          </tr>
        </table>
      </form>
    </React.Fragment>
  )
}
export default Professional;