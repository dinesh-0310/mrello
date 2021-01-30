import React from 'react';
import styled from 'styled-components';
import {List} from './List'
import {useSelector} from 'react-redux'
import {AddListButton} from './AddListButton'

const BoardWrapper = styled.div`
    height: 87%;
    display: flex;
    overflow-x: auto;
`;

export const Board = ()=>{
    const lists = useSelector(state => state.lists)
    return(
        
        <BoardWrapper>  
        {
            lists.map((list, index)=>(
                <List key={list.id} index={index} id={list.id} title={list.title} cards={list.cards} />
            ))
        }
        <AddListButton />
        </BoardWrapper>
               
    )
}