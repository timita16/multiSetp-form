import React from 'react';
import { NavLink } from 'react-router-dom';
import ButtonModule from "./Button.module.css";

const Button = ({back, next, error, handleError}) => {
  return (
    <section className={`${ButtonModule.SectionButton} ${!back && ButtonModule.SectionButtonFalso} ` }>
        {
            !back 
            ? ""
            : <NavLink to={back}className={`${ButtonModule.button} ${ButtonModule.back}`}>
                Go back
            </NavLink> 
        }
      <p onClick={() => handleError(error, next)} className={`${ButtonModule.button} ${ButtonModule.next}`}>Next Step</p>
    </section>
  )
}

export default Button