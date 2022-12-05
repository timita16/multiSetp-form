import React from 'react'
import Button from '../buton/Button'
import PersonalModule from "./Personal.module.css"

const PersonalInfo = () => {
  return (
    <>
      <section className={PersonalModule.sectionPrincipal}>
        <div>
          <h1 className={PersonalModule.h1}>Personal info</h1>
          <p className={PersonalModule.subtitle}>Please provide your name, email addres, and phone number.</p>
        </div>
        <div className={PersonalModule.divTodosLosInputos}>
          <div className={PersonalModule.divLabelInput}>
            <label 
              for="name"
              className={PersonalModule.label} >
              Name
            </label>
            <input 
              type="text" 
              placeholder="e.g. Sthepen King"
              name='name'
              id='name'
              className={PersonalModule.input}
            />
          </div>
          <div className={PersonalModule.divLabelInput}>
            <label 
              for="email"
              className={PersonalModule.label}>
              Email address
            </label>
            <input 
              type="email" 
              placeholder="e.g. SthepenKing@gmail.com"
              name='email'
              id='email'
              className={PersonalModule.input}
            />
          </div>
          <div className={PersonalModule.divLabelInput}>
            <label 
              for="number"
              className={PersonalModule.label}>
                Phone number
            </label>
            <input 
              type="number" 
              placeholder="e.g. +1 234 567 890"
              name='number'
              id='number'
              className={PersonalModule.input}
            />
          </div>
        </div>
      </section>
      <Button next="plan2" />
    </>
  )
}

export default PersonalInfo