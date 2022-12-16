import { useContext } from "react";
import formContext from "../../context/Form";
import AsideModule from "./Aside.module.css"

const Aside = () => {
    let {
        url
    } = useContext(formContext);
  return (
    <aside className={AsideModule.aside}>
            <div className={AsideModule.divStep}>
                <p className={`${AsideModule.numeration} ${url === "1" && AsideModule.numerationActiva}`}>1</p>
                <div className={AsideModule.divStepDescription}>
                    <p className={AsideModule.step}>STEP 1</p>
                    <p className={AsideModule.information}>YOUR INFO</p>
                </div>
            </div>
            <div className={AsideModule.divStep}>
                <p className={`${AsideModule.numeration} ${url === "2" && AsideModule.numerationActiva}`}>2</p>
                <div className={AsideModule.divStepDescription}>
                    <p className={AsideModule.step}>STEP 2</p>
                    <p className={AsideModule.information}>SELECT PLAN</p>
                </div>
            </div>
            <div className={AsideModule.divStep}>
                <p className={`${AsideModule.numeration} ${url === "3" && AsideModule.numerationActiva}`}>3</p>
                <div className={AsideModule.divStepDescription}>
                    <p className={AsideModule.step}>STEP 3</p>
                    <p className={AsideModule.information}>ADD-ONS</p>
                </div>
            </div>
            <div className={AsideModule.divStep}>
                <p className={`${AsideModule.numeration} ${url === "4" && AsideModule.numerationActiva}`}>4</p>
                <div className={AsideModule.divStepDescription}>
                    <p className={AsideModule.step}>STEP 4</p>
                    <p className={AsideModule.information}>SUMMARY</p>
                </div>
            </div>
    </aside>
  )
}

export default Aside