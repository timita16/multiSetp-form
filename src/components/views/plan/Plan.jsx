import React from 'react'
import Button from '../buton/Button'
import PlanModule from "./Plan.module.css"

const Plan = () => {
  return (
    <>
      <section>
        <div>
          <h1 className={PlanModule.h1}>Select your plan</h1>
          <p className={PlanModule.subtitle}>You have the option of monthly or yerly billing.</p>
        </div>
        <div className={PlanModule.divLabelInput}>
          <div className={PlanModule.divLabel}>
            <input type="radio" name='plan' defaultChecked id='plan1' value="arcade" className={PlanModule.input} />
            <label htmlFor='plan1' className={PlanModule.label}>Arcade</label>
          </div>
          <div className={PlanModule.divLabel}>
            <input type="radio" name='plan' id='plan2' value="advanced" className={PlanModule.input} />
            <label htmlFor='plan2' className={PlanModule.label}>Advanced</label>
          </div>
          <div className={PlanModule.divLabel}>
            <input type="radio" name='plan' id='plan3' value="pro" className={PlanModule.input} />
            <label htmlFor='plan3' className={PlanModule.label}>Pro</label>
          </div>
        </div>
      </section>
      <Button next="plan2" back="/"  />
    </>
  )
}

export default Plan