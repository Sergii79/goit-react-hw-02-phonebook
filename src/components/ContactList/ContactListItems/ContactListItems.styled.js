import styled from "styled-components";

export const TextList = styled.li`
    margin: 5px 0;   
    display: flex; 
    justify-content: space-between;
    align-items: center;
`;

export const Text = styled.span`
    /* margin: 10px 0; */
    font-size: 16px;
    font-weight: 400; 
`;

export const DeleteBtn = styled.button`
    /* display: flex; */
    /* height: auto; */
    /* margin-top: 30px; */
    /* text-align: center;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center; */
  
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