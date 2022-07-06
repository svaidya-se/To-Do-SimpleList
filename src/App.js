import "./App.css";
import Header from "./Header";
import Todos from "./Todos";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import About from "./About";
import Welcome from "./Welcome";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const [todos, setTodos] = useState(initTodo);
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <BrowserRouter>
      <Header/> 
      <Routes>
      <Route path="/welcome" element={<Welcome />}>
          </Route>
          <Route path="/" element={<>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} /> 
            </>}> 
          </Route>
          <Route path="/about" element={<About />}>
          </Route> 
        </Routes> 
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
