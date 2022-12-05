import React from 'react'
import AsideModule from "./Aside.module.css"

const Aside = () => {
  return (
    <aside className={AsideModule.aside}>
            <div className={AsideModule.divStep}>
                <p className={AsideModule.numerationActiva}>1</p>
                <div className={AsideModule.divStepDescription}>
                    <p>STEP 1</p>
                    <p>YOUR INFO</p>
                </div>
            </div>
            <div className={AsideModule.divStep}>
                <p className={AsideModule.numeration}>2</p>
                <div className={AsideModule.divStepDescription}>
                    <p>STEP 2</p>
                    <p>SELECT PLAN</p>
                </div>
            </div>
            <div className={AsideModule.divStep}>
                <p className={AsideModule.numeration}>3</p>
                <div className={AsideModule.divStepDescription}>
                    <p>STEP 3</p>
                    <p>ADD-ONS</p>
                </div>
            </div>
            <div className={AsideModule.divStep}>
                <p className={AsideModule.numeration}>4</p>
                <div className={AsideModule.divStepDescription}>
                    <p>STEP 4</p>
                    <p>SUMMARY</p>
                </div>
            </div>
    </aside>
  )
}

export default Aside