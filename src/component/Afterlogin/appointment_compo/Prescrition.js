import React from 'react';
import stats from "../../../images/appointment_images/stats.png"

const Prescrition = () => {
  const flexbox = {
    display: 'flex',
    flexWrap: 'nowrap',
  }
  const img ={
    width:'40px',
    height:'40px',
    alignSelf:'center',
    borderRadius:'50%',
  }
  const tr1 = {
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '100',
    textAlign: 'center'
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
    <div className="prsTable">
      <table className="table-responsive">
        <thead>
          <tr style={tr1}>
            <th>Date</th>
            <th>Name</th>
            <th>Created By</th>
            <th>Action</th>
          </tr>
        </thead>
        <tr style={allcolor}>
          <td style={tdstart}>14/01/2020</td>
          <td>Prescription 1</td>
          <td style={flexbox}>
              <img src={stats} style={img}/>
              <div>
                <b style={{color:'#5B5B5B'}}>Dr.Ruby Perrin</b>
                <br/>
                <b style={fontweight}>Dermatologist</b>
                </div>
          </td>
          <td style={tdend}>
            <a className="btn px-2 py-1 rptvwbtn">view</a>
            <a className="btn px-2 py-1 rptvwbtn">print</a>
            <a className="btn px-2 py-1 rptvwbtn">download</a>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Prescrition
