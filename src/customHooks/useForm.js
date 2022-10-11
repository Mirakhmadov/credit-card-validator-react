import { useState } from 'react'
import validateInfo from '../validator/validateInfo';

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
        let { name, value, maxLength, localName} = e.target

        if (value.length <= maxLength || localName === "select"){
            if (name === "cardNumber" && value){
                value = value.split(" ").join("")
                value = value.match(/.{1,4}/g).join(" ")
            }
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