import React, {useEffect, useState} from "react";
import "./App.css";
import styled from "@emotion/styled";
import TodoForm from "./components/todoForm";
import ToDoList from "./components/ToDoList";
import KindOfTask from "./components/kindOfTask";
import Info from "./components/info";
import {Link} from "react-router-dom";
import {ActiveToDoListProvider} from "./contexts/activeToDoListProvider";
import {ThemeProvider, createGlobalStyle} from "styled-components";
import {HashRouter, Switch, Route} from "react-router-dom";

const LOCAL_SCHOOL_KEY = "react-todo-list-schoolTodos";
const LOCAL_HOME_KEY = "react-todo-list-homeTodos";
const LOCAL_SHOPPING_KEY = "react-todo-list-shoppingTodos";

const Styledh1 = styled.h1`
  width: 100%;
  float: left;
`;

const StyledButton = styled.label`
  float: right;
`;

const HowToUse = styled.p`
  float: left;
  text-decoration: none;
`;

const StyledDiv = styled.div`
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

const GlobalStyle = createGlobalStyle`
  .div1{
    background-color: ${props => props.theme.mode === 'dark' ? '#323633' : '#A9A9A9'};
    color: ${props => props.theme.mode === 'dark' ? '#FFFFFF' : '#000000'};
    box-shadow: ${props => props.theme.mode === 'dark' ? '0 0 50px 5px darkgray' : '0 0 50px 5px #545151'};
  }
  .div2{
    background-color: ${props => props.theme.mode === 'dark' ? '#323633' : '#A9A9A9'};
    color: ${props => props.theme.mode === 'dark' ? '#FFFFFF' : '#000000'};
    box-shadow: ${props => props.theme.mode === 'dark' ? '0 0 50px 5px darkgray' : '0 0 50px 5px #545151'};
  }
  .infoLink{
    color: ${props => props.theme.mode === 'dark' ? '#FFFFFF' : '#000000'};
  }
  body {
    background-color: ${props => props.theme.mode === 'dark' ? '#323633' : '#A9A9A9'};
  }
`;

function App() {
    const [homeTodos, setHomeTodos] = useState([]);
    const [schoolTodos, setSchoolTodos] = useState([]);
    const [shoppingTodos, setShoppingTodos] = useState([]);
    const [kind, setKind] = useState("school tasks");
    const [theme, setTheme] = useState({mode: 'dark'});

    useEffect(() => {
        const storageSchoolTodos = JSON.parse(localStorage.getItem(LOCAL_SCHOOL_KEY));
        if (storageSchoolTodos) {
            setSchoolTodos(storageSchoolTodos);
        }
    }, []);

    useEffect(() => {
        const storageHomeTodos = JSON.parse(localStorage.getItem(LOCAL_HOME_KEY));
        if (storageHomeTodos) {
            setHomeTodos(storageHomeTodos);
        }
    }, []);

    useEffect(() => {
        const storageShoppingTodos = JSON.parse(localStorage.getItem(LOCAL_SHOPPING_KEY));
        if (storageShoppingTodos) {
            setShoppingTodos(storageShoppingTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_HOME_KEY, JSON.stringify(homeTodos));
    }, [homeTodos]);

    useEffect(() => {
        localStorage.setItem(LOCAL_SCHOOL_KEY, JSON.stringify(schoolTodos));
    }, [schoolTodos]);

    useEffect(() => {
        localStorage.setItem(LOCAL_SHOPPING_KEY, JSON.stringify(shoppingTodos));
    }, [shoppingTodos]);

    function addTodo(todo) {
        if (kind === "school tasks") {
            setSchoolTodos([todo, ...schoolTodos])
        } else if (kind === "home tasks") {
            setHomeTodos([todo, ...homeTodos])
        } else {
            setShoppingTodos([todo, ...shoppingTodos])
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
        setShoppingTodos(
            shoppingTodos.map(todo => {
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
        if (kind === "school tasks") {
            setSchoolTodos(schoolTodos.filter(todo => todo.id !== id))
        } else if (kind === "home tasks") {
            setHomeTodos(homeTodos.filter(todo => todo.id !== id))
        } else {
            setShoppingTodos(shoppingTodos.filter(todo => todo.id !== id))
        }
    }

    return (
        <HashRouter basename="/tasks">
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <div className="App">
                    <ActiveToDoListProvider>
                        <StyledDiv2 className="div1">
                            <div><Link id="link" to='/info'><HowToUse className="infoLink">How to use?</HowToUse></Link></div>
                            <StyledButton id="switch" className="switch">
                                <input type="checkbox" onClick={e =>
                                    setTheme(
                                        theme.mode === 'dark'
                                            ? {mode: 'light'}
                                            : {mode: 'dark'}
                                    )}/>
                                <span className="slider round"/>
                            </StyledButton>
                            <Styledh1>
                                TO DO LIST
                            </Styledh1>
                            <KindOfTask setKind={setKind}/>
                        </StyledDiv2>
                        <Switch>
                            <Route path="/info" exact>
                                <StyledDiv className="div2">
                                    <Info/>
                                </StyledDiv>
                            </Route>
                            <Route path="/">
                                <StyledDiv className="div2">
                                    <TodoForm addTodo={addTodo} setSchoolTodos={setSchoolTodos}
                                              setHomeTodos={setHomeTodos}
                                              setShoppingTodos={setShoppingTodos}
                                              kind={kind}/>
                                    <ToDoList
                                        kind={kind}
                                        homeTodos={homeTodos}
                                        schoolTodos={schoolTodos}
                                        shoppingTodos={shoppingTodos}
                                        removeTodo={removeTodo}
                                        toggleComplete={toggleComplete}
                                    />
                                </StyledDiv>
                            </Route>
                        </Switch>
                    </ActiveToDoListProvider>
                </div>
            </ThemeProvider>
        </HashRouter>
    );
}

export default App;