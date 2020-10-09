import React, { useEffect, useState } from "react";
import "./App.css";
import styled from "@emotion/styled";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import Date from "./components/Date";
import Clear from "./components/Clear"

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

const Styledh1 = styled.h1`
  color: white;
`;
const StyledDiv = styled.div`
  background-color: #323633;
  color: white;
  border-radius: 10px;
  box-shadow: 0 0 50px 1px darkgray;
  margin: 2% 12%;
  padding: 0.5%;
  text-align: center;
  height: 500px;
`;

const StyledDiv2 = styled.div`
  background-color: #323633;
  border-radius: 10px;
  box-shadow: 0 0 50px 5px darkgray;
  margin: 2% 8%;
  padding: 0.5%;
  text-align: center;
`;

const StyledDiv3 = styled.div`
  text-align: center;
`;

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storageTodos) {
            setTodos(storageTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    function addTodo(todo) {
        setTodos([todo, ...todos]);
    }

    function toggleComplete(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            })
        );
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <div className="App">
            <StyledDiv2>
                <Styledh1>
                    To Do List
                </Styledh1>
                <Date/>
            </StyledDiv2>
            <StyledDiv3>
                <Clear setTodos={setTodos}/>
            </StyledDiv3>
            <StyledDiv>
                <ToDoForm addTodo={addTodo} />
                <ToDoList
                    todos={todos}
                    removeTodo={removeTodo}
                    toggleComplete={toggleComplete}
                />
            </StyledDiv>
        </div>
    );
}

export default App;