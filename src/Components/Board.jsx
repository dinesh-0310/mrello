import React, { useContext } from 'react';
import styled from 'styled-components';
import {List} from './List'
import {useSelector} from 'react-redux'
import {AddButton} from './AddButton'
import { ThemeContext } from '../ThemeContextProvider';

const BoardWrapper = styled.div`
    height: 87%;
    display: flex;
    overflow-x: auto;
    background:  ${props => props.theme.appTheme.boardBackground} ;
`;

export const Board = ()=>{
    const lists = useSelector(state => state.lists)
    const theme = useContext(ThemeContext)
    return(
        
        <BoardWrapper theme={theme}>  
        {
            lists.map((list, index)=>(
                <List key={list.id} index={index} id={list.id} title={list.title} cards={list.cards}  />
            ))
        }
        <AddButton list/>
        </BoardWrapper>
               
    )
}