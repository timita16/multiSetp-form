import {createContext, useState } from 'react'

const initialForm = {
    name:"",
    email:"",
    number:"",
    plan:"arcade",
    membresia:"monthly",
}
const initialCheck = {
  onlineService:false,
  checkBoxStorage:false,
  customizableProfile:false
}

const formContext = createContext();

export const FormProvider = ({children}) => {
    const [form, setForm] = useState(initialForm);
    const [check, setCheck] = useState(initialCheck)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }

    const handleCheck = (e) => {
        setCheck({
            ...check,
            [e.target.name]:e.target.checked
        });
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Enviar")
    }
    let datas = {
      handleChange,
      form,
      handleSubmit,
      handleCheck,
      check,
    }
  return <formContext.Provider value={datas}>{children}</formContext.Provider>
}

export default formContext