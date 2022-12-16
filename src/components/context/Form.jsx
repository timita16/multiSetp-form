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
    const [url, setUrl] = useState("1");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    };

    const handleCheck = (e) => {
        setCheck({
            ...check,
            [e.target.name]:e.target.checked
        });
    }

    
    const handleUrl = (path) => {
      console.log(path)
      let numero = path[path.length-1];
      setUrl(numero === "/" ? "1" : numero)
    }

    let datas = {
      handleChange,
      form,
      handleCheck,
      check,
      handleUrl,
      url
    }
  return <formContext.Provider value={datas}>{children}</formContext.Provider>
}

export default formContext