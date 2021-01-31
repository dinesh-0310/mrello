import React,{useState} from 'react';
import styled from 'styled-components'
import Textarea from 'react-textarea-autosize';
import { useDispatch } from 'react-redux';
import { deleteList, editList } from '../Redux/actions';

const FormContainer = styled.div`
    color : grey;
    min-width : 230px;
    height : 95px;
    background-color : #DFE3E6;
    border-radius : 10px;
    cursor: pointer;
    margin: 5px;
    align-items:center;
    & textarea{
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
            width: 90px;
            margin: 5px;
            background-color: #82BD75;
            height: 30px;
            border: 0;
            outline: none;
            border-radius: 5px;
            color: #f5f5f5;
            padding-left:5px;
        }
        & h4{
            margin-top: 0;
            margin-left: 10px;
            font-weight: 700;
            font-size: 25px;
        }
    }
`;

export const EditButton =({listId, title, editListToggle})=>{
 
    const [text, setText] = useState(title)
    const editButtonTitle = "edit List"
    const deleteButtonTitle = "delete List"
    const dispatch = useDispatch()
    const handleTextChange = e =>{
        setText(e.target.value)
    }

    const handleDeleteList = () =>{
        console.log("delete list function called");
        dispatch(deleteList(listId))
    }

    const handleEditList = () =>{
        dispatch(editList(listId, text))
    }
    return(
        <FormContainer >                        
            <Textarea autoFocus 
                    onBlur={editListToggle}
                    value={text}
                    onChange={handleTextChange}/>
            <div>
                <button onMouseDown={handleEditList}>{editButtonTitle}</button>
                <button onMouseDown={handleDeleteList}>{deleteButtonTitle}</button>
                <h4>X</h4>
            </div>
        </FormContainer>
    )
}