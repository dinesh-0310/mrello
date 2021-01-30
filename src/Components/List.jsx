import React from 'react';
import styled from 'styled-components';
import { Card } from './Card';

const ListContainer =  styled.div`
    min-width : 270px;
    height : fit-content;
    background-color : #DFE3E6;
    border-radius : 10px;
    margin: 10px;
    cursor: pointer;
    font-size: 18px;
    letter-spacing: 1px;
    & h5{
        margin-left: 20px;
        height : 10px;
        cursor: pointer;
    }
`;


export const List = ({title, cards}) =>{
    
    return(
     
        <ListContainer >
                        
            <h5 >{title}</h5>
            {
               cards.map((item,index) =>(
                    <Card key={item.id} index={index} title={item.title} id={item.id}/>
                ))
            }

        </ListContainer>
      
    )
}