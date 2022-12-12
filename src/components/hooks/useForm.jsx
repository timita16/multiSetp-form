import { useState } from 'react'
import {useNavigate} from "react-router-dom"

const initialForm = {
    name:"",
    email:"",
    number:"",
    plan:"arcade",
    membresia:"monthly"
}

const useForm = () => {
    const [form, setForm] = useState(initialForm);
    const navigate = useNavigate();


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit = (e) => {

    }

    const handleError = (error, next) => {
        if(Object.values(error).length === 0) return navigate(`/${next}`)        
    }

  return {
    handleChange,
    form,
    handleSubmit,
    handleError,
  }
}

export default useForm