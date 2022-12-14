import React, { useContext } from 'react';
import ButtonModule from "./Button.module.css";
import { NavLink } from 'react-router-dom';
import {useNavigate} from "react-router-dom"
import formContext from '../../context/Form';

const Button = ({back, next, error,confirm}) => {
  const navigate = useNavigate();

  const handleError = () => {
    if(Object.values(error).length === 0) return navigate(`/${next}`) 
  }
  let {
    handleSubmit
  } = useContext(formContext)

  return (
    <section className={`${ButtonModule.SectionButton} ${!back && ButtonModule.SectionButtonFalso} ` }>
        {
            !back 
            ? ""
            : <NavLink to={back} className={`${ButtonModule.button} ${ButtonModule.back}`}>
                Go back
            </NavLink> 
        }
        {
          !confirm
          ? <p onClick={handleError} className={`${ButtonModule.button} ${ButtonModule.next}`}>Next Step</p>
          : <button type='submit' onSubmit={handleSubmit} className={ButtonModule.confimar}>Confirm</button>
        }
      
    </section>
  )
}

export default Button