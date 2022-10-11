import React from 'react';
import "./components.css"
import useForm from "../customHooks/useForm";
import {Button, Form, Alert, Row, Col, Input, FormGroup} from "reactstrap";
import Cards from "react-credit-cards";


const CustomCard = () => {
    const {handleChange, handleFocus, handleSubmit, values, errors} = useForm();

    const months = [
        {value: '01', label: "January"},
        {value: '02', label: "February"},
        {value: '03', label: "March"},
        {value: '04', label: "April"},
        {value: '05', label: "May"},
        {value: '06', label: "June"},
        {value: '07', label: "July"},
        {value: '08', label: "August"},
        {value: '09', label: "September"},
        {value: '10', label: "October"},
        {value: '11', label: "November"},
        {value: '12', label: "December"},
    ]

    const years = [
        {value : "22", label : "2022"},
        {value : "23", label : "2023"},
        {value : "24", label : "2024"},
        {value : "25", label : "2025"},
        {value : "26", label : "2026"}
    ]

    return (
        <div className="container">
            <div className="box justify-content-center align-items-center">
                <div className="formDiv">
                    <div className="creditCard">
                        <Cards
                            cvc={values.cardSecurityCode}
                            expiry={values.cardExpirationMonth + values.cardExpirationYear}
                            focused={values.focus}
                            name={values.cardName}
                            number={values.cardNumber}
                        />
                    </div>
                    <Form onSubmit={handleSubmit}>
                        Card Number
                        <FormGroup>
                            <Input
                                type="number"
                                id="cardNumber"
                                data-testid="cardNumber"
                                name="cardNumber"
                                value={values.cardNumber}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                isValid={errors.cnumber}
                                maxLength={16}
                            />
                        </FormGroup>

                        <FormGroup>
                            Card Name
                            <Input
                                type="text"
                                id="cardName"
                                data-testid="cardName"
                                name="cardName"
                                value={values.cardName}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                isValid={errors.cname}
                                maxLength={50}
                            />
                        </FormGroup>
                        <Row>
                            <Col>
                                Expiration Date
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Input
                                                type="select"
                                                id="cardExpirationMonth"
                                                data-testid="cardExpirationMonth"
                                                name="cardExpirationMonth"
                                                value={values.cardExpirationMonth}
                                                onChange={handleChange}
                                                onFocus={handleFocus}
                                                isValid={errors.cexpM}
                                            >
                                                <option selected={true} value={0}>Month</option>
                                                {months ? months.map(item =>
                                                    <option value={item.value}>{item.label}</option>
                                                ) : ""}
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Input
                                                type="select"
                                                id="cardExpirationYear"
                                                data-testid="cardExpirationYear"
                                                name="cardExpirationYear"
                                                value={values.cardExpirationYear}
                                                onChange={handleChange}
                                                onFocus={handleFocus}
                                                isValid={errors.cexpY}
                                            >
                                                <option selected={true} value={0}>Year</option>
                                                {years ? years.map(item =>
                                                    <option value={item.value}>{item.label}</option>
                                                ) : ""}
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                CVV
                                <FormGroup>
                                    <Input
                                        type="number"
                                        id="cardSecurityCode"
                                        data-testid="cardSecurityCode"
                                        name="cardSecurityCode"
                                        value={values.cardSecurityCode}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        isValid={errors.ccvv}
                                        maxLength={3}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button
                            size={"block"}
                            data-testid="validateButton"
                            id="validateButton"
                            type="submit"
                        >
                            Validate
                        </Button>
                    </Form>
                </div>
                <Alert
                    id="alertMessage"
                    data-testid="alertMessage"
                    color={errors.variant}
                    isOpen={errors.show}
                >
                    {errors.message}
                </Alert>{" "}
            </div>
        </div>
    );
}

export default CustomCard;