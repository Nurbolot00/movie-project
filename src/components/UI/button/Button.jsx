import React from 'react';
import styled from 'styled-components';


const Button = (props) => {
    return (
        <MyButton style={{background: `${props.color}`}} onClick={props.onClick}>{props.children}</MyButton>
    );
};

export default Button;



const MyButton = styled.button`
    font: inherit;
    padding: 0.5rem 1.5rem;
    border: 1px solid #00329e;
    background: #00329e;
    color: white;
    border-radius: 6px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
    cursor: pointer;
    margin: 0 0.5rem;
    outline: none;
  
  &:hover,
  &:active {
    background: #f67722;
    border-color: #f67722;
  }
    
`