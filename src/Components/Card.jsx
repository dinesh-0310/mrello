import React from 'react';
import styled from 'styled-components';

const CardContainer =  styled.div`
    min-height: 16px;
    position: relative;
    cursor: pointer;
    background: #fff;
    margin: 5px;
    padding: 0 2px;
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,.12);
    box-shadow: 0 1px 0 rgba(9,45,66,.25);
    font-size: 15px;
    overflow-wrap: break-word;
   
`;
export const Card = ({title}) =>{
   
    title = title.split("\n").map(str=> str.trim()).filter(item => item !== "").join("\n")
    return(
       
        <CardContainer>
            <pre>{title}</pre>
        </CardContainer>
              

    )
}