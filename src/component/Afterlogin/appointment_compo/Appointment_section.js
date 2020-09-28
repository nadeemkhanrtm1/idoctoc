import React from 'react';
import call from "../../../images/appointment_images/call.png";
import stats from "../../../images/appointment_images/stats.png";
import video from "../../../images/appointment_images/video.png";

const Appointment_section = () => {
  const tr1 = {
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '100',
  }
  const tdstart = {
    borderTopLeftRadius: '30px',
    borderBottomLeftRadius: '30px',
    paddingLeft: '10px',
    color: '#5B5B5B'
  }
  const tdend = {
    borderTopRightRadius: '30px',
    borderBottomRightRadius: '30px'
  }
  const b = {
    color: '#ffac50'
  }
  const fontweight = {
    fontWeight: '200',
    color: '#858585'
  }
  const allcolor = {
    color: '#858585'
  }
  return (
    <React.Fragment>

      <div className="tableSection">
        <table>
          <thead>
            <tr style={tr1}>
              <th>Dcotor</th>
              <th>Appointment ID</th>
              <th>Type</th>
              <th>Appt Date</th>
              <th>Booking Date</th>
              <th>Amount</th>
              <th>Follow up</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tr style={allcolor}>
            <td style={tdstart}>
              <b>Dr.Ruby Perrin</b><br/>
              <b style={fontweight}>Dermatologist</b>
            </td>
            <td>12345678</td>
            <td><img src={call} alt="..."/></td>
            <td>14/01/2020<br/>
              <b style={b}>10AM</b>
            </td>
            <td>14/01/2020</td>
            <td>Rs.100</td>
            <td>14/01/2020</td>
            <td>
              <a className="btn px-2 py-1 cnfbtn">Confirmed</a>
            </td>
            <td style={tdend}>
              <a className="btn px-2 py-1 vwbtn">view</a>
              <a className="btn px-2 py-1 rbkbtn">rebook</a>
            </td>
          </tr>
          <tr style={allcolor}>
            <td style={tdstart}>
              <b>Dr.Ruby Perrin</b>
              <br/>
              <b style={fontweight}>Dermatologist</b>
            </td>
            <td>12345678</td>
            <td><img src={video} alt="..."/></td>
            <td>14/01/2020<br/>
              <b style={b}>10AM</b>
            </td>
            <td>14/01/2020</td>
            <td>Rs.100</td>
            <td>14/01/2020</td>
            <td>
              <a className="btn px-2 py-1 cncbtn">Cancelled</a>
            </td>
            <td style={tdend}>
              <a className="btn px-2 py-1 vwbtn">view</a>
              <a className="btn px-2 py-1 rbkbtn">rebook</a>
            </td>
          </tr>
          <tr style={allcolor}>
            <td style={tdstart}>
              <b>Dr.Ruby Perrin</b>
              <br/>
              <b style={fontweight}>Dermatologist</b>
            </td>
            <td>12345678</td>
            <td><img src={stats} alt="..."/></td>
            <td>14/01/2020<br/>
              <b style={b}>10AM</b>
            </td>
            <td>14/01/2020</td>
            <td>Rs.100</td>
            <td>14/01/2020</td>
            <td>
              <a className="btn px-3 py-1 pndbtn">Pending</a>
            </td>
            <td style={tdend}>
              <a className="btn px-2 py-1 vwbtn">view</a>
              <a className="btn px-2 py-1 rbkbtn">rebook</a>
            </td>
          </tr>
        </table>
      </div>
    </React.Fragment>
  )
}

export default Appointment_section;
