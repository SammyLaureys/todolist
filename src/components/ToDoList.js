import { List } from "@material-ui/core";
import React from "react";
import Todo from "./todo";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  margin-top: 3%;
`;


function ToDoList({ homeTodos,schoolTodos, removeTodo, toggleComplete, kind }) {

    function WichToDoList(){
        if(kind==="school tasks"){
            return <List>
                {schoolTodos.map(todo => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        removeTodo={removeTodo}
                        toggleComplete={toggleComplete}
                    />
                ))}
            </List>
        }
        else{
            return <List>
            {homeTodos.map(todo => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    toggleComplete={toggleComplete}
                />
            ))}
        </List>

        }
    }

    return (
        <StyledDiv>
            <WichToDoList/>
        </StyledDiv>
    );
}

export default ToDoList;