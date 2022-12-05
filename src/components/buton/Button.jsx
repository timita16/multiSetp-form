import React from 'react';
import { Link } from 'react-router-dom';
import ButtonModule from "./Button.module.css";

const Button = ({back, next}) => {
  return (
    <section className={`${ButtonModule.SectionButton} ${!back && ButtonModule.SectionButtonFalso} ` }>
        {
            !back 
            ? ""
            : <Link to={back}>
                <button className={`${ButtonModule.button} ${ButtonModule.back}`}>Go back</button>
            </Link> 
        }
        <Link to={next}>
            <button className={`${ButtonModule.button} ${ButtonModule.next}`}>Next Step</button>
        </Link>
    </section>
  )
}

export default Button