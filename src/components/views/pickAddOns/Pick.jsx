import React, { useContext } from 'react'
import formContext from '../../context/Form';
import Button from '../buton/Button'
import PickModule from "./Pick.module.css"

const Pick = () => {
  let {
    check,
    handleCheck,
  } = useContext(formContext);
  return (
    <>
      <section>
        <div>
          <h1 className={PickModule.h1}>Pick add-ons</h1>
          <p className={PickModule.subtitle}>You have the option of monthly or yerly billing.</p>
        </div>
        <div className={PickModule.divCheckBoxAll}>
          <div className={PickModule.divLabelInput}>
              <input 
                type="checkbox" 
                name="onlineService"
                className={PickModule.inputCheck} 
                onChange={handleCheck} 
                checked={check.onlineService}
                id="plan1"
              />
              <label 
                htmlFor='plan1' 
                className={`${PickModule.label} ${PickModule.labelText} ${PickModule.labelMonth1} ${PickModule.labelYear1}`}
              >
                Online service
              </label>
          </div>
          <div className={PickModule.divLabelInput}>
              <input 
                type="checkbox" 
                name="checkBoxStorage"
                className={PickModule.inputCheck} 
                onChange={handleCheck} 
                checked={check.checkBoxStorage}
                id="plan2"
              />
              <label 
                htmlFor='plan2' 
                className={`${PickModule.label} ${PickModule.labelText2} ${PickModule.labelMonth2} ${PickModule.labelYear2}`}
              >
                Larger storage
              </label>
          </div>
          <div className={PickModule.divLabelInput}>
              <input 
                type="checkbox" 
                name="customizableProfile"
                className={PickModule.inputCheck} 
                onChange={handleCheck} 
                checked={check.customizableProfile}
                id="plan3"
              />
              <label 
                htmlFor='plan3' 
                className={`${PickModule.label} ${PickModule.labelText3} ${PickModule.labelMonth3} ${PickModule.labelYear3}`}
              >
                Customizable profile
              </label>
          </div>
        </div>
      </section>
      <Button next="finishing4" back="/plan2" error={{}} />
    </>
  )
}

export default Pick