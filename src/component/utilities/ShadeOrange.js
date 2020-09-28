import React from 'react';
import shade1 from "../../images/shades/shade1.png"

const ShadeOrange = (props) => {
  const firstdiv = {
    position: 'relative',
    display: 'inline-block',
    cursor:'pointer',
  }
  const p = {
    position: 'absolute',
    top: '15%',
    left: '25%',
    bottom:'0%',
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
        <img src={shade1} alt="..."/>
        <a style={p} className="mb-0">{props.title}</a>
      </div>
    </React.Fragment>
  )
}

export default ShadeOrange