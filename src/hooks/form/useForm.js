import {useState, useEffect} from 'react'

const useForm = (submit, validate) => {
    const [values, setValues] = useState({})
    const [errors, setError] = useState({})
    const [submiting, setSubmiting] = useState(false)

    const handleChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit= event => {
        event.preventDefault()
        setError(validate(values))
        setSubmiting(true)
    }

    useEffect(()=>{
        if(Object.keys(errors).length === 0 && submiting){
            submit()
        }
    },[errors])

    return [
        values,
        errors,
        handleChange,
        handleSubmit
    ]
}

export default useForm
