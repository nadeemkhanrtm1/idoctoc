import React from 'react'

const Report = () => {
  const tr1 = {
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '100',
    textAlign:'center',
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
  const fontweight = {
    fontWeight: '200',
    color: '#858585'
  }
  const allcolor = {
    color: '#858585',
    textAlign:'center'
  }
  return (
    <div className="rptTable">
      <table>
        <tr style={tr1}>
          <th>Prescription ID</th>
          <th>Date</th>
          <th>Description</th>
          <th>Attachment</th>
          <th>Created By</th>
          <th>Action</th>
        </tr>
        <tr style={allcolor}>
          <td
            style={tdstart}>12345678</td>
          <td>14/01/2020</td>
          <td>General Check-up</td>
          <td>generalcheckup.pdf</td>
          <td>
            <div className="rptinnerFlex">
              <img/>
              <b>Dr.Ruby Perrin</b>
              <br/>
              <b style={fontweight}>Dermatologist</b>
            </div>
          </td>
          <td
            style={tdend}>
            <a className="btn py-1 px-2 rptvwbtn">view</a>
            <a className="btn py-1 px-2 rptvwbtn">share</a>
            <a className="btn py-1 px-2 rptvwbtn">download</a>
          </td>
        </tr>

      </table>
    </div>
  );
};

export default Report;
