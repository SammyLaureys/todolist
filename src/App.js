import React, { useEffect, useState } from "react";
import "./App.css";
import styled from "@emotion/styled";
import TodoForm from "./components/todoForm";
import ToDoList from "./components/ToDoList";
import KindOfTask from "./components/date";

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
  height: fit-content;
`;

const StyledDiv2 = styled.div`
  background-color: #323633;
  border-radius: 10px;
  box-shadow: 0 0 50px 5px darkgray;
  margin: 2% 8%;
  padding: 0.5%;
  text-align: center;
`;

function App() {
    const [homeTodos, setHomeTodos] = useState([]);
    const [schoolTodos, setSchoolTodos] = useState([]);
    const [kind, setKind] = useState("schooltaken");

    // useEffect(() => {
    //     const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    //     if (storageTodos) {
    //         setTodos(storageTodos);
    //     }
    // }, []);
    //
    // useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    // }, [todos]);

    function addTodo(todo) {
        if(kind==="schooltaken"){
            setSchoolTodos([todo, ...schoolTodos])
        }
        else{
            setHomeTodos([todo, ...homeTodos])
        }
    }

    function toggleComplete(id) {
        setHomeTodos(
            homeTodos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            })
        );
        setSchoolTodos(
            schoolTodos.map(todo => {
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
        if(kind==="schooltaken"){
            setSchoolTodos(schoolTodos.filter(todo => todo.id !== id))
        }
        else{
            setHomeTodos(homeTodos.filter(todo => todo.id !== id))
        }
    }

    return (
        <div className="App">
            <StyledDiv2>
                <Styledh1>
                    TO DO LIST
                </Styledh1>
                <KindOfTask setKind={setKind}/>
            </StyledDiv2>
            <StyledDiv>
                <TodoForm addTodo={addTodo} setSchoolTodos={setSchoolTodos} setHomeTodos={setHomeTodos} kind={kind}/>
                <ToDoList
                    kind={kind}
                    homeTodos={homeTodos}
                    schoolTodos={schoolTodos}
                    removeTodo={removeTodo}
                    toggleComplete={toggleComplete}
                />
            </StyledDiv>
        </div>
    );
}

export default App;