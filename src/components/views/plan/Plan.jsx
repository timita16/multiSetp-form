import React from 'react'
import Button from '../buton/Button'
import PlanModule from "./Plan.module.css"
import useForm from '../../hooks/useForm'

const Plan = () => {
  let {
    form,
    handleChange,
  } = useForm();
  return (
    <>
      <section>
        <div>
          <h1 className={PlanModule.h1}>Select your plan</h1>
          <p className={PlanModule.subtitle}>You have the option of monthly or yerly billing.</p>
        </div>
        <div className={PlanModule.divLabelInput}>
          <div className={PlanModule.divLLABEL}>
            <input type="radio" name='plan' id='plan1' value="arcade" className={PlanModule.input} onChange={handleChange} defaultChecked />
            <label htmlFor='plan1' className={`${PlanModule.labelL} ${form.membresia === "yearly" && PlanModule.divLLABELYear}`}>Arcade</label>
            {form.membresia === "yearly" && <p className={PlanModule.monthFree}>2 month free</p>}
          </div>
          <div className={PlanModule.divLLABEL}>
            <input type="radio" name='plan' id='plan2' value="advanced" className={PlanModule.input} onChange={handleChange}  />
            <label htmlFor='plan2' className={`${PlanModule.labelL2} ${form.membresia === "yearly" && PlanModule.divLLABELYear}`}>Advanced</label>
            {form.membresia === "yearly" && <p className={PlanModule.monthFree}>2 month free</p>}
          </div>
          <div className={PlanModule.divLLABEL}>
            <input type="radio" name='plan' id='plan3' value="pro" className={PlanModule.input} onChange={handleChange}  />
            <label htmlFor='plan3' className={`${PlanModule.labelL3} ${form.membresia === "yearly" && PlanModule.divLLABELYear}`}>Advanced</label>
            {form.membresia === "yearly" && <p className={PlanModule.monthFree}>2 month free</p>}
          </div>
        </div>
        <div className={PlanModule.divPlan}>
          <p className={`${PlanModule.labelPlan} ${form.membresia === "yearly" && PlanModule.labelPlanActive}`}>Monthly</p>
          <div className={PlanModule.divButon}>
            <input 
              type="radio" 
              name="membresia"
              value="monthly"
              className={PlanModule.boton} 
              defaultChecked 
              onChange={handleChange}
            />
            <span className={`${PlanModule.span} ${form.membresia === "yearly" ? PlanModule.spanActive : ""}`}></span>
            <input 
              type="radio" 
              name="membresia" 
              value="yearly"
              className={PlanModule.boton} 
              onChange={handleChange}
            />
          </div>
          <p className={`${PlanModule.labelPlan} ${form.membresia === "monthly" && PlanModule.labelPlanActive}`}>Yearly</p>
        </div>
      </section>
      <Button next="pick3" back="/" error={{}} />
    </>
  )
}

export default Plan