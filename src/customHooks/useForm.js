import { useState } from 'react'
import validateInfo from './validateInfo';

const useForm = () => {
    const [values, setValues] = useState({
        cardName: '',
        cardNumber: '',
        cardExpirationMonth: '',
        cardExpirationYear: '',
        cardSecurityCode: '',
        focus: ''
    })

    const [errors, setErrors] = useState({
        show : false
    })

    const handleFocus = (e) => {
        setValues({ 
            ...values,
            focus: (e.target.name === 'cardSecurityCode') ? 'cvc' : e.target.name
        });
    }

    const handleChange = e => {
        const { name, value, maxLength, localName} = e.target
        if (value.length <= maxLength || localName === "select"){
            setValues({
                ...values,
                [name]: value
            })
        }else {
            e.target.value = values[name]
        }

    }

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(validateInfo(values))

        console.log(values)
    };
    
    return { handleChange, handleFocus, handleSubmit, values, errors };
};

export default useForm; 