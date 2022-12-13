import React from 'react';
import ButtonModule from "./Button.module.css";
import { NavLink } from 'react-router-dom';
import {useNavigate} from "react-router-dom"

const Button = ({back, next, error}) => {
  const navigate = useNavigate();

  const handleError = () => {
    if(Object.values(error).length === 0) return navigate(`/${next}`) 
  }

  return (
    <section className={`${ButtonModule.SectionButton} ${!back && ButtonModule.SectionButtonFalso} ` }>
        {
            !back 
            ? ""
            : <NavLink to={back}className={`${ButtonModule.button} ${ButtonModule.back}`}>
                Go back
            </NavLink> 
        }
      <p onClick={handleError} className={`${ButtonModule.button} ${ButtonModule.next}`}>Next Step</p>
    </section>
  )
}

export default Button