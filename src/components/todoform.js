import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from '@material-ui/core/styles';
import Clear from "./clear";

const useStyles = makeStyles({
    textField: {
        margin: '20px 0px 0px 0px',
        background: 'linear-gradient(45deg, white 30%, gray 90%)',
    },
    button: {
        margin: '20px 30px 0px 20px',
        background: 'linear-gradient(45deg, #33FFFF 30%, #33CEFF 80%)',
    },
});

function Todoform({ addTodo,setTodos }) {
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
                    <TextField className={classes.textField}
                        type="text"
                        name="task"
                        value={todo.task}
                        onChange={handleTaskInputChange}
                    />
                    <Button className={classes.button} type="submit">+</Button>
                    <Clear setTodos={setTodos}/>
            </form>
    );
}

export default Todoform;