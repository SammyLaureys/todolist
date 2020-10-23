import { List } from "@material-ui/core";
import React from "react";
import Todo from "./todo";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  margin-top: 3%;
`;

function ToDoList({ todos, removeTodo, toggleComplete }) {
    return (
        <StyledDiv>
            <List>
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        removeTodo={removeTodo}
                        toggleComplete={toggleComplete}
                    />
                ))}
            </List>
        </StyledDiv>
    );
}

export default ToDoList;