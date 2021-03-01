import React, { useState } from "react";
import styled from "styled-components";
import Textarea from "react-textarea-autosize";
import { useDispatch } from "react-redux";
import { deleteCard, deleteList, editCard, editList } from "../Redux/actions";

const FormContainer = styled.div`
  color: grey;
  min-width: 230px;
  height: auto;
  background-color: #dfe3e6;
  border-radius: 10px;
  cursor: pointer;
  align-items: center;
  & textarea {
    padding-left: 8px;
    background: transparent;
    border: none;
    overflow: hidden;
    width: 90%;
    margin: 10px;
    border-radius: 5px;
    resize: none;
  }
  & div {
    display: flex;
    margin: 5px 10px 0;
    height: 45px;
    & button {
      width: 95px;
      margin: 5px;
      background-color: #82bd75;
      height: 30px;
      border: 0;
      outline: none;
      border-radius: 5px;
      color: #f5f5f5;
      padding-left: 5px;
    }

    & h4 {
      margin-top: 0;
      margin-left: 10px;
      font-weight: 700;
      font-size: 25px;
    }
    & button:nth-child(2) {
      background-color: #c62828;
    }
  }
`;

export const EditButton = ({
  listId,
  title,
  editListToggle,
  editCardToggle,
  cardId,
  list,
}) => {
  console.log(listId);
  const [text, setText] = useState(title);
  const editButtonTitle = list ? "edit List" : "edit Card";
  const deleteButtonTitle = list ? "delete List" : "delete Card";
  const dispatch = useDispatch();
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleDeleteList = () => {
    console.log("delete list function called");
    dispatch(deleteList(listId));
  };

  const handleEditList = () => {
    dispatch(editList(listId, text));
  };

  const handleDeleteCard = () => {
    console.log("delete card function called");
    dispatch(deleteCard(listId, cardId));
  };

  const handleEditCard = () => {
    console.log("edit card function called");
    dispatch(editCard(listId, cardId, text));
  };
  return (
    <FormContainer>
      <Textarea
        autoFocus
        onBlur={list ? editListToggle : editCardToggle}
        value={text}
        onChange={handleTextChange}
      />
      <div>
        <button onMouseDown={list ? handleEditList : handleEditCard}>
          {editButtonTitle}
        </button>
        <button onMouseDown={list ? handleDeleteList : handleDeleteCard}>
          {deleteButtonTitle}
        </button>
        <h4>X</h4>
      </div>
    </FormContainer>
  );
};
