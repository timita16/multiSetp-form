import React from 'react'
import { Route, Routes } from "react-router-dom";
import Step1 from '../../../routes/Step1';
import Step2 from '../../../routes/Step2';
import Step3 from '../../../routes/Step3';
import Step4 from '../../../routes/Step4';
import Step5 from '../../../routes/Step5';
import Error from '../error/Error';
import FormMudule from "./Form.module.css"

const Form = () => {
  return (
      <form className={FormMudule.form}>
          <Routes>
              <Route path='/' element={<Step1 />} />
              <Route path='/plan2' element={<Step2 />} />
              <Route path='/pick3' element={<Step3 />} />
              <Route path='/finishing4' element={<Step4 />} />
              <Route path='/finished' element={<Step5 />} />
              <Route path='*' element={<Error />} />
          </Routes>
      </form>
  )
}

export default Form