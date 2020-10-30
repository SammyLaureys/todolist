import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from '@material-ui/core/styles';
import Clear from "./clear";
import styled from "@emotion/styled";

const useStyles = makeStyles({
    textField: {
        margin: '20px 0px 0px 0px',
        background: 'linear-gradient(45deg, white 30%, gray 90%)',
    },
    button: {
        margin: '20px 30px 0px 20px',
        background: 'linear-gradient(45deg, #32CD32 30%, #00FF00 80%)',
    },
});

const StyledH3 = styled.h3`
  float: left;
`;

function TodoForm({ addTodo,setSchoolTodos,setHomeTodos,kind}) {
    const classes = useStyles();
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(e) {
        setTodo({ ...todo, task: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuidv4() });
            setTodo({ ...todo, task: "" });
        }
    }

    return (
            <form className="todo-form" onSubmit={handleSubmit}>
                <StyledH3>{kind}</StyledH3>
                    <TextField id="inputField" className={classes.textField} placeholder={"Add task here."}
                        type="text"
                        name="task"
                        value={todo.task}
                        onChange={handleTaskInputChange}
                    />
                    <Button className={classes.button} id="+" type="submit">+</Button>
                    <Clear setSchoolTodos={setSchoolTodos} setHomeTodos={setHomeTodos} kind={kind}/>
            </form>
    );
}

export default TodoForm;