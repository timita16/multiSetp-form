import React, { useContext } from 'react'
import price from '../../helpers/price';
import Button from '../buton/Button';
import FinishingUpModule from "./FinishinUp.module.css"
import formContext from '../../context/Form';
import precioTotal from '../../helpers/precioTotal';

const FinishingUp = () => {
    let {
        form,
        check
      } = useContext(formContext);
    let precio = price(form.plan, form.membresia);
    let precioTotal1 = precioTotal(precio, check, form.membresia) 
  return (
    <>
        <section>
            <div>
                <h1 className={FinishingUpModule.h1}>Finishing Up</h1>
                <p className={FinishingUpModule.subtitle}>Double-check everything looks OK before confirming.</p>
            </div>
            <div>
                <div className={FinishingUpModule.divGris}>
                    <div className={FinishingUpModule.divPricePlan}>
                        <p className={FinishingUpModule.plan}>{form.plan}({form.membresia})</p>
                        <p className={FinishingUpModule.price}>${precio}/{form.membresia === "yearly" ? "yr" : "mo"}</p>
                    </div>
                    <hr className={FinishingUpModule.span} />
                    <div>
                        {   
                            check.onlineService &&
                            <div className={FinishingUpModule.divPriceInfo}>
                                <p className={FinishingUpModule.informacion}>Online service</p>
                                <p className={FinishingUpModule.price2}>
                                    +${form.membresia === "yearly" ? 10 : 1}
                                    /
                                    {form.membresia === "yearly" ? "yr" : "mo"}
                                </p>
                            </div>
                        }
                        {
                            check.checkBoxStorage &&
                            <div className={FinishingUpModule.divPriceInfo}>
                                <p className={FinishingUpModule.informacion}>Larger storage</p>
                                <p className={FinishingUpModule.price2}>
                                    +${form.membresia === "yearly" ? 20 : 2}
                                    /
                                    {form.membresia === "yearly" ? "yr" : "mo"}
                                </p>
                            </div>
                        }
                        {
                            check.customizableProfile &&
                            <div className={FinishingUpModule.divPriceInfo}>
                                <p className={FinishingUpModule.informacion}>Online service</p>
                                <p className={FinishingUpModule.price2}>
                                    +${form.membresia === "yearly" ? 20 : 2}
                                    /
                                    {form.membresia === "yearly" ? "yr" : "mo"}
                                </p>
                            </div>
                        }
                    </div>
                </div>
                <div className={FinishingUpModule.totalPrice}>
                    <p className={FinishingUpModule.informacion}>Total({form.membresia === "yearly" ? "Per year" : "Per month"})</p>
                    <p className={FinishingUpModule.total}>${precioTotal1}/{form.membresia === "yearly" ? "yr" : "mo"}</p>
                </div>
            </div>
        </section>
        <Button  next="finished" back="/pick3" error={{}} confirm={true}/>
    </>
  )
}

export default FinishingUp