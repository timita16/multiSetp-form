import React from 'react';
import { Link } from 'react-router-dom';
import ButtonModule from "./Button.module.css";

const Button = ({back, next, error, handleError}) => {
  return (
    <section className={`${ButtonModule.SectionButton} ${!back && ButtonModule.SectionButtonFalso} ` }>
        {
            !back 
            ? ""
            : <Link to={back}>
                <p className={`${ButtonModule.button} ${ButtonModule.back}`}>Go back</p>
            </Link> 
        }
        {/*<Link to={next}>
            <button className={`${ButtonModule.button} ${ButtonModule.next}`}>Next Step</button>
      </Link>*/}
      <p onClick={() => handleError(error, next)} className={`${ButtonModule.button} ${ButtonModule.next}`}>next Step</p>
    </section>
  )
}

export default Button