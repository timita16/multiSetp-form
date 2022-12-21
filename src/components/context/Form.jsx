import {createContext, useEffect, useState } from 'react'
import errorForm from '../helpers/errorForm';

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
    const [errores, setErrores] = useState({})
    const [check, setCheck] = useState(initialCheck)
    const [url, setUrl] = useState("1");

    let {error} = errorForm(form);

    useEffect(() => {
      setErrores({})
    }, [])
    

    const handleChange = (e) => {
        setErrores(error)
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
      let numero = path[path.length-1];
      setUrl(numero === "/" ? "1" : numero);
    }

    let datas = {
      handleChange,
      form,
      handleCheck,
      check,
      handleUrl,
      url,
      errores,
      setErrores,
      error
    }
  return <formContext.Provider value={datas}>{children}</formContext.Provider>
}

export default formContext