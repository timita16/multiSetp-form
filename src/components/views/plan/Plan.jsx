import React from 'react'
import Button from '../buton/Button'
import PlanModule from "./Plan.module.css"
import imageArcade from "../../../assets/images/icon-arcade.svg"
import imageAdvanced from "../../../assets/images/icon-advanced.svg"
import imagePro from "../../../assets/images/icon-pro.svg"

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
            <img src={imageArcade} alt="Icono de la imagen arcade" />
            <input type="radio" name='plan' defaultChecked id='plan1' value="arcade" className={PlanModule.input} />
            <div className={PlanModule.divLabelPrecio}>
              <label htmlFor='plan1' className={PlanModule.label}>Arcade</label>
              <p className={PlanModule.precio}>$9/mo</p>
            </div>
          </div>
          <div className={PlanModule.divLabel}>
            <img src={imageAdvanced} alt="Icono de la imagen arcade" />
            <input type="radio" name='plan' id='plan2' value="advanced" className={PlanModule.input} />
            <div className={PlanModule.divLabelPrecio}>
              <label htmlFor='plan2' className={PlanModule.label}>Advanced</label>
              <p className={PlanModule.precio}>$12/mo</p>
            </div>
          </div>
          <div className={PlanModule.divLabel}>
            <img src={imagePro} alt="Icono de la imagen arcade" />
            <input type="radio" name='plan' id='plan3' value="pro" className={PlanModule.input} />
            <div className={PlanModule.divLabelPrecio}>
              <label htmlFor='plan3' className={PlanModule.label}>Pro</label>
              <p className={PlanModule.precio}>$15/mo</p>
            </div>
          </div>
        </div>
        <div className={PlanModule.divPlan}>
          <div className={PlanModule.divLabelInputPlan}>
            <input type="radio" name='plan' id='month' defaultChecked value="month" className={PlanModule.inputPlan}/>
            <label htmlFor='month' className={PlanModule.labelPlan}>Monthly</label>
          </div>
          <div className={PlanModule.divLabelInputPlan}>
            <input type="radio" name="plan" id="year" value="year" className={PlanModule.inputPlan}/>
            <label htmlFor='year' className={PlanModule.labelPlan}>Yearly</label>
          </div>
        </div>
      </section>
      <Button next="plan2" back="/"  />
    </>
  )
}

export default Plan