import { Checkbox, IconButton} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import styled from "@emotion/styled";
import "../App.css";

const StyledUl = styled.div`
  width: 100%;
`;

const removeButton = styled.div`
  text-align: right;
`;

function Todo({ todo, toggleComplete, removeTodo }) {
    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }

    function handleRemoveClick() {
        removeTodo(todo.id);
    }

    return (
        <StyledUl style={{ display: "flex" }}>
            <div className={"left"}>
                <Checkbox style={{color: "white"}} checked={todo.completed} onClick={handleCheckboxClick} />
            </div>
            <div className={"listItem"}
                style={{
                    textDecoration: todo.completed ? "line-through" : null
                }}
            >
                {todo.task}
            </div>
                <IconButton style={{color: "white"}} className={removeButton} onClick={handleRemoveClick}>
                        <CloseIcon />
                </IconButton>
        </StyledUl>
    );
}

export default Todo;