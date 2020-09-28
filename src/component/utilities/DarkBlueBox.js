import React from 'react';

const DarkBlueBox = (props) => {
  const divfirst = {
    display: 'inline-block',
    textAlign: 'center',
    margin: '0 18px',
    cursor:'pointer'
  }
  const divcss = {
    backgroundColor: '#00A4AD',
    height: '120px',
    width: '140px',
    borderRadius: '15px',
    position: 'relative',
    display: 'inline-block',
    marginBottom: '0px'
  }
  const img = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    height: '80px',
    width: '80px'
  }
  return (
    <React.Fragment>
      <div style={divfirst}>
        <figure style={divcss}>
          <img src={props.image} alt="..." style={img}/>
        </figure>
        <p className="figurecaption">{props.title}</p>
      </div>
    </React.Fragment>
  )
}

export default DarkBlueBox;
