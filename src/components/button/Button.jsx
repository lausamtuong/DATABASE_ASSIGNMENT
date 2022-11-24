import React from 'react';
import './button.scss'
const Button = (props) => {



  return <button  className ={`btn ${props.class}
  `}
    style={props.style}
  >
      {props.label}
  </button>;
};

export default Button;
