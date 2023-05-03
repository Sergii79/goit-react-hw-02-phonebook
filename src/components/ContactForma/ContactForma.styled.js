import { Form as FormikForm, Field as FormikField } from "formik";
import styled from "styled-components";

export const Form = styled(FormikForm)`
    padding: 10px;
    border: 1px solid black;
`;

export const AddContactBtn = styled.button`
    /* display: flex; */
    /* height: auto; */
    /* margin-top: 30px; */
    /* text-align: center;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center; */
    width: 100%;
    cursor: pointer;
    padding: 5px 10px;    
    background-color: #fff;
    outline: none;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 0px 5px #242424;
    transition: color 250ms ease-in-out, background-color 250ms ease-in-out,
        box-shadow 250ms ease-in-out;
    font-size: 16px;
    font-weight: 400; 
    :hover {
        color: #fff;
        background-color: #868282;
        box-shadow: inset 0px 0px 5px #3c3c3c;
    }   
`;

export const Heading = styled.h3`  
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 400; 
`;

export const Field = styled(FormikField)`   
    width: 100%;
    margin-bottom: 20px;   
`;