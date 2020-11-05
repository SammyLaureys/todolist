import { Checkbox, IconButton} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import styled from "@emotion/styled";

const ListItem = styled.div`
  font-size: xx-large;
  margin-right: 10%;
`;
const CheckboxDiv = styled.div`
  margin-left: 30%;
  margin-right: 10%;
  font-size: xx-large;
`;

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
            <CheckboxDiv>
                <Checkbox style={{color: "white"}} checked={todo.completed} onClick={handleCheckboxClick} />
            </CheckboxDiv>
            <ListItem
                variant="body1"
                style={{
                    textDecoration: todo.completed ? "line-through" : null
                }}
            >
                {todo.task}
            </ListItem>
                <IconButton style={{color: "white"}} className={removeButton} onClick={handleRemoveClick}>
                        <CloseIcon />
                </IconButton>
        </StyledUl>
    );
}

export default Todo;