import React, { useState } from "react";
import styled from "styled-components";
import Textarea from "react-textarea-autosize";
import { useDispatch } from "react-redux";
import { addList, addCard } from "../Redux/actions";

const ActionButtonWrapper = styled.div`
  opacity: 0.5;
  color: inherit;
  min-width: 230px;
  height: 50px;
  font-size: 17px;
  background-color: ${(props) => (props.list ? "#399151" : "#C3CCD1")};
  border-radius: 10px;
  cursor: pointer;
  margin: 5px;
`;
const FormContainer = styled.div`
  color: grey;
  min-width: 230px;
  height: ${(props) => (props.list ? "90px" : "fit-content")};
  background-color: #dfe3e6;
  border-radius: 10px;
  cursor: pointer;
  margin: 5px;
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
    margin: 0 10px 10px;
    height: 40px;
    & button {
      width: 90px;
      background-color: #82bd75;
      height: 30px;
      border: 0;
      outline: none;
      border-radius: 5px;
      color: #f5f5f5;
      padding-left: 10px;
      margin: 0;
    }
    & h4 {
      margin-top: 0;
      margin-left: 10px;
      font-weight: 700;
      font-size: 25px;
    }
  }
`;

export const AddButton = ({ list, listId }) => {
  // console.log(listId);
  const [formOpen, setFormOpen] = useState(false);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const buttonText = list ? "+ Add a list" : "+ Add a card";
  const placeholder = list
    ? "Enter list title..."
    : "Enter a title for this card...";
  const buttonTitle = list ? "Add List" : "Add Card";
  const openForm = () => {
    setFormOpen(true);
  };
  const closeForm = () => {
    setFormOpen(false);
  };
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleAddList = () => {
    if (text) {
      dispatch(addList(text));
      setText("");
    }

    return;
  };
  const handleAddCard = () => {
    console.log("add card function called");
    if (text) {
      dispatch(addCard(listId, text));
      setText("");
    }
    return;
  };
  const handleKeyEvent = (e) => {
    if (e.keyCode === 13) {
      if (list) {
        dispatch(addList(text));

        setFormOpen(false);
        setText("");
      }

      return;
    }
  };
  return (
    <>
      {!formOpen ? (
        <ActionButtonWrapper onClick={openForm}>
          <p>{buttonText}</p>
        </ActionButtonWrapper>
      ) : (
        <FormContainer list={list && true.toString()}>
          <Textarea
            autoFocus
            placeholder={placeholder}
            onBlur={closeForm}
            value={text}
            onChange={handleTextChange}
            onKeyDown={handleKeyEvent}
          />
          <div>
            <button onMouseDown={list ? handleAddList : handleAddCard}>
              {buttonTitle}
            </button>
            <h4>X</h4>
          </div>
        </FormContainer>
      )}
    </>
  );
};
