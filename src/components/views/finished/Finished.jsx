import React from 'react'
import image from "../../../assets/images/icon-thank-you.svg"
import finishedModule from "./Finishing.module.css"

const Finished = () => {
  return (
    <section className={finishedModule.section}>
      <img src={image} alt="Icono de thank you" />
      <h1 className={finishedModule.h1}>Thank you!</h1>
      <p className={finishedModule.subtitle}>Thanks for confirming your subscription! <br />
        We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com
      </p>
    </section>
  )
}

export default Finished