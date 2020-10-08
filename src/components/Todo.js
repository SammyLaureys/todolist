import { Checkbox, IconButton} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import styled from "@emotion/styled";

const ListItem = styled.div`
  font-size: xx-large;
`;
const CheckboxDiv = styled.div`
  margin-left: 10%;
`;

const StyledUl = styled.div`
  width: 100%;
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
            <CheckboxDiv>
                <Checkbox checked={todo.completed} onClick={handleCheckboxClick} />
            </CheckboxDiv>
            <ListItem
                variant="body1"
                style={{
                    textDecoration: todo.completed ? "line-through" : null
                }}
            >
                {todo.task}
            </ListItem>
                <IconButton onClick={handleRemoveClick}>
                        <CloseIcon />
                </IconButton>
        </StyledUl>
    );
}

export default Todo;