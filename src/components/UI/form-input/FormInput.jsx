import React, { forwardRef } from 'react';
import styled from "styled-components";


const FormInputContainer = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
width: 330px;
`
const Input = styled.input`
height: 30px;
border-radius: 10px;
padding: 10px;
outline-color: blue;
font-size: 16px;
margin: 0.5rem;
`
const FormInput = forwardRef((props,ref) => {
console.log(ref);


    return (
        <FormInputContainer>
            <label htmlFor={props.id}>{props.labelName}</label>
            <Input type={props.inputType} placeholder={props.placeholder || "..."} id={props.id} ref={ref}/>
        </FormInputContainer>
    );
})

export default FormInput;