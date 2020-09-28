import React from 'react';
import stats from "../../../images/appointment_images/stats.png"

const Messages = () => {
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
  const allcolor = {
    color: '#858585',
    textAlign: 'center'
  }
  const tr1 = {
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '100',
    textAlign: 'center'
  }
  return (
    <div className="msgTable">
      <table >
        <thead style={tr1}>
          <tr>
            <th>Date</th>
            <th>Subject</th>
            <th>Sender</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          <tr style={allcolor}>
            <td style={tdstart}>
              14/01/2020
            </td>
            <td>Follow-up reminder</td>
            <td>
                <b style={{
                  color: '#5b5b5b'
                }}>Dr.Ruby Perrin</b>
                <br/>
                <b style={{
                  fontWeight: 200
                }}>Dermatologist</b>
            </td>
            <td style={tdend}>
              <div
                style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around'
              }}>
                <p
                  style={{
                  width: '350px',
                  textAlign: 'justify',
                  marginBottom: '0px'
                }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed dictum
                  ligula.
                </p>
                <a className="btn btn-primary msgvwbtn">view</a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Messages
