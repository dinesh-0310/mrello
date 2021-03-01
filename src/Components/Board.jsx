import React, { useContext } from "react";
import styled from "styled-components";
import { List } from "./List";
import { useSelector, useDispatch } from "react-redux";
import { AddButton } from "./AddButton";
import { ThemeContext } from "../ThemeContextProvider";
import { dragHappened } from "../Redux/actions";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const BoardWrapper = styled.div`
  height: 87%;
  display: flex;
  overflow-x: auto;
  background: ${(props) => props.theme.appTheme.boardBackground};
`;

export const Board = () => {
  const lists = useSelector((state) => state.lists);
  const dispatch = useDispatch();
  const theme = useContext(ThemeContext);
  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    dispatch(
      dragHappened(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-list" direction="horizontal" type="list">
        {(provided) => (
          <BoardWrapper
            theme={theme}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {lists.map((list, index) => (
              <List
                key={list.id}
                index={index}
                id={list.id}
                title={list.title}
                cards={list.cards}
              />
            ))}
            {provided.placeholder}
            <AddButton list />
          </BoardWrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
};
