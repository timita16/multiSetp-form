import errorForm from '../../helpers/errorForm';
import Button from '../buton/Button'
import PersonalModule from "./Personal.module.css"
import formContext from '../../context/Form';
import { useContext } from 'react';

const PersonalInfo = () => {
  let {
    form,
    handleChange,
  } = useContext(formContext);
  let {error} = errorForm(form);
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
              htmlFor="name"
              className={PersonalModule.label} >
              Name
            </label>
            <input 
              type="text" 
              placeholder="e.g. Sthepen King"
              name='name'
              id='name'
              onChange={handleChange}
              value={form.name}
              className={`${PersonalModule.input} ${error.name && PersonalModule.inputError}`}
            />
            {error.name && <p className={PersonalModule.msgError}>{error.name}</p>}
          </div>
          <div className={PersonalModule.divLabelInput}>
            <label 
              htmlFor="email"
              className={PersonalModule.label}>
              Email address
            </label>
            <input 
              type="email" 
              placeholder="e.g. SthepenKing@gmail.com"
              name='email'
              id='email'
              onChange={handleChange}
              value={form.email}
              className={`${PersonalModule.input} ${error.email && PersonalModule.inputError}`}
            />
            {error.email && <p className={PersonalModule.msgError}>{error.email}</p>}
          </div>
          <div className={PersonalModule.divLabelInput}>
            <label 
              htmlFor="number"
              className={PersonalModule.label}>
                Phone number
            </label>
            <input 
              type="number" 
              placeholder="e.g. +1 234 567 890"
              name='number'
              id='number'
              onChange={handleChange}
              value={form.number}
              className={`${PersonalModule.input} ${error.number && PersonalModule.inputError}`}
            />
            {error.number && <p className={PersonalModule.msgError}>{error.number}</p>}
          </div>
        </div>
      </section>
      <Button next="plan2" error={error}   />
    </>
  )
}

export default PersonalInfo