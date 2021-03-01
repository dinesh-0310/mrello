import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ThemeContext } from "../ThemeContextProvider";
import { EditButton } from "./EditButton";
import { Draggable } from "react-beautiful-dnd";

const CardContainer = styled.div`
  min-height: 16px;
  position: relative;
  cursor: grab;
  background: ${(props) => props.theme.appTheme.headerColor};
  margin: 5px;
  padding: 0 2px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: 0 1px 0 rgba(9, 45, 66, 0.25);
  font-size: 15px;
  overflow-wrap: break-word;
`;
const Button = styled.button`
  color: ${(props) => props.theme.appTheme.headerBackground} !important;
  background: ${(props) => props.theme.appTheme.headerColor} !important;
  margin: 0 !important;
  padding: 0 !important;
  font-weight: 600;
  width: 90% !important;
`;
export const Card = ({ title, id, listId, index }) => {
  const [editCard, setEditCard] = useState(false);
  const theme = useContext(ThemeContext);
  const editCardToggle = () => {
    console.log("editCardToggle function called");
    setEditCard((prev) => !prev);
  };
  title = title
    .split("\n")
    .map((str) => str.trim())
    .filter((item) => item !== "")
    .join("\n");
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <CardContainer theme={theme}>
            {!editCard ? (
              <Button theme={theme} onClick={editCardToggle}>
                <pre>{title}</pre>
              </Button>
            ) : (
              <EditButton
                listId={listId}
                title={title}
                editCardToggle={editCardToggle}
                cardId={id}
              />
            )}
          </CardContainer>
        </div>
      )}
    </Draggable>
  );
};
