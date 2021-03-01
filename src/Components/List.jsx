import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ThemeContext } from "../ThemeContextProvider";
import { AddButton } from "./AddButton";
import { Card } from "./Card";
import { EditButton } from "./EditButton";
import { Draggable, Droppable } from "react-beautiful-dnd";

const ListContainer = styled.div`
  min-width: 270px;
  height: fit-content;
  background: ${(props) => props.theme.appTheme.listBackground};
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
  font-size: 18px;
  letter-spacing: 1px;
  & button {
    width: 90%;
    height: 100%;
    cursor: pointer;
    color: ${(props) => props.theme.appTheme.headerColor};
    background-color: transparent;
    border: 0;
    outline: none;
    margin-top: 10px;
    text-align: left;
    font-size: 15px;
    padding-left: 20px;
    & p {
      height: 15px;
      font-weight: 700;
      margin: 10px 0;
    }
  }
`;

export const List = ({ id, title, cards, index }) => {
  const [editList, setEditList] = useState(false);
  const theme = useContext(ThemeContext);
  const editListToggle = () => {
    console.log("editListToggle function called");
    setEditList((prev) => !prev);
  };
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <ListContainer
          theme={theme}
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          <Droppable droppableId={String(id)}>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {!editList ? (
                  <button onClick={editListToggle}>
                    <p>{title}</p>
                  </button>
                ) : (
                  <EditButton
                    listId={id}
                    list
                    title={title}
                    editListToggle={editListToggle}
                  />
                )}

                {cards.map((item, index) => (
                  <Card
                    key={item.id}
                    index={index}
                    listId={id}
                    title={item.title}
                    id={item.id}
                  />
                ))}
                <AddButton listId={id} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </ListContainer>
      )}
    </Draggable>
  );
};
