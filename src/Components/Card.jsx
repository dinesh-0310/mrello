import React,{useState} from 'react';
import styled from 'styled-components';
import { EditButton } from './EditButton';

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
const Button = styled.button`
    background: #fff !important;
    margin : 0 !important;
    padding: 0 !important;
`;
export const Card = ({title,id, listId}) =>{
    const [editCard, setEditCard] = useState(false)
    const editCardToggle = ()=>{
        console.log("editCardToggle function called");
        setEditCard(prev => !prev)
    }
    title = title.split("\n").map(str=> str.trim()).filter(item => item !== "").join("\n")
    return(
       
        <CardContainer>
            {
                !editCard ? <Button onClick={editCardToggle}><pre>{title}</pre></Button>
                        : <EditButton listId={listId} title={title} editCardToggle = {editCardToggle} cardId={id} />
            }
            
        </CardContainer>
              

    )
}