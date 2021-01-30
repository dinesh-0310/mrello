import React from 'react';
import styled from 'styled-components';
import {List} from './List'

const lists = [
    {
        title: "first List",
        id: 0,
        cards : [
            {
                id: 2,
                title : "card1"
            },
            {
                id: 3,
                title : "card2"
            }
        ]
    },
    {
        title: "second List",
        id: 1,
        cards : [
            {
                id: 4,
                title : "card1"
            }
        ]
    }
]
const BoardWrapper = styled.div`
    height: 85%;
    display: flex;
    overflow-x: auto;
`;

export const Board = ()=>{
    return(
        
        <BoardWrapper>  
        {
            lists.map((list, index)=>(
                <List key={list.id} index={index} id={list.id} title={list.title} cards={list.cards} />
            ))
        }
        </BoardWrapper>
               
    )
}