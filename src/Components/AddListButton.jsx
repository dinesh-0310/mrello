import React, { useState } from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux'
import { addList } from '../Redux/actions';

const ActionButtonWrapper = styled.div`
    opacity : 0.5;
    color : inherit;
    min-width : 230px;
    height : 50px;
    font-size: 17px;
    background-color : #399151 ;
    border-radius : 10px;
    cursor: pointer;
    margin: 5px;
  
`;
const FormContainer = styled.div`
    color : grey;
    min-width : 230px;
    height : 95px;
    background-color : #DFE3E6;
    border-radius : 10px;
    cursor: pointer;
    margin: 5px;
    align-items:center;
    & input{
        padding-left: 8px;
        background : transparent;
        border : none;
        overflow: hidden;
        width: 90%;
        margin: 10px;
        border-radius: 5px;
        resize: none;
        
    }
    & div{
        display: flex;
        margin: 10px 10px;
        height: 25px;
        & button{
            width: 80px;
            background-color: #82BD75;
            height: 30px;
            border: 0;
            outline: none;
            border-radius: 5px;
            color: #f5f5f5;
        }
        & h4{
            margin-top: 0;
            margin-left: 10px;
            font-weight: 700;
            font-size: 25px;
        }
    }
`;


export const AddListButton = ()=>{
    
    const [formOpen, setFormOpen] = useState(false)
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    const openForm = ()=>{
        setFormOpen(true)
    }
    const closeForm = () =>{
        setFormOpen(false)
    }
    const handleTextChange = e =>{
        setText(e.target.value)
    }
    const handleAddList = ()=>{
        if(text){
            dispatch(addList(text))
            setText("")
        }

        return;
    }
   
    return(
        <>
        {
            !formOpen ? 
                    <ActionButtonWrapper onClick={openForm}>
                            <p> + Add a list</p>
                    </ActionButtonWrapper>
                    : <FormContainer >                        
                        <input autoFocus 
                                placeholder="Enter list title..." 
                                onBlur={closeForm}
                                value={text}
                                onChange={handleTextChange}/>
                        <div>
                            <button onMouseDown={handleAddList}>Add List</button>
                            <h4>X</h4>
                        </div>
                    </FormContainer>
        }
        </>
      
    )
}