import React, { useState } from 'react';
import styled from 'styled-components';
import { AddButton } from './AddButton';
import { Card } from './Card';
import {EditButton} from './EditButton'

const ListContainer =  styled.div`
    min-width : 270px;
    height : fit-content;
    background-color : #DFE3E6;
    border-radius : 10px;
    margin: 10px;
    cursor: pointer;
    font-size: 18px;
    letter-spacing: 1px;
    & button{
        width: 100%;
        height: 100%;
        cursor: pointer;
        background-color : #DFE3E6;
        border: 0;
        outline: none;
        margin-top:10px;
        text-align: left;
        font-size: 15px;
        padding-left: 20px;
        & p{
            height : 15px;
            font-weight:700;
            margin: 10px 0;
        }
    }
`;


export const List = ({id,title, cards}) =>{
    const [editList, setEditList] = useState(false)
    const editListToggle = ()=>{
        console.log("editListToggle function called");
        setEditList(prev => !prev)
    }
    return(
     
        <ListContainer >
            {
                !editList ?
                    <button onClick={editListToggle}>
                         <p >{title}</p>
                    </button> 
                        : <EditButton listId={id}
                                        list
                                        title={title}
                                        editListToggle={editListToggle}
                                        />

            }            
            
            {
               cards.map((item,index) =>(
                    <Card key={item.id} index={index} listId={id} title={item.title} id={item.id}/>
                ))
            }
            <AddButton listId={id}/>
        </ListContainer>
      
    )
}