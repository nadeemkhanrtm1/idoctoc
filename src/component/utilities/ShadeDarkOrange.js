import React from 'react';
import shade2 from "../../images/shades/shade2.png"

const ShadeDarkOrange = (props) => {
  const firstdiv = {
    position: 'relative',
    display: 'inline-block',
    cursor:'pointer'
  }
  const p = {
    position: 'absolute',
    top: '15%',
    left: '25%',
    color: '#FFFFFF',
    fontFamily: 'Overpass',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '800',
    width:'90px',
    textDecoration:'none',
    textAlign:'left',
  }
  return (
    <React.Fragment>
      <div style={firstdiv}>
        <img src={shade2} alt="..."/>
        <a style={p} className="mb-0 p-0">{props.title}</a>
      </div>
    </React.Fragment>
  )
}

export default ShadeDarkOrange
