import { useRef, useState } from 'react'

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

const useForm = () => {
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

    }

  return {
    handleChange,
    form,
    handleSubmit,
    handleCheck,
    check,
  }
}

export default useForm