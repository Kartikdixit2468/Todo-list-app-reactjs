import Header from "./Custom_components/Navbar";
import Footer from "./Custom_components/Footer";
import TodoList from "./Custom_components/Todos_list";
import Add_todo from "./Custom_components/Add_todo";
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

  let todos_ = JSON.parse(localStorage.getItem("todos"))
  let [todos, set_todos] = useState( todos_ === null? [] : todos_);
  
  const add_todo = (title, desc) => {
    let new_todo = {
      sno: localStorage.length + 1,
      title: title,
      desc: desc,
    };
    set_todos([...todos, new_todo]);
    
  };
  
  useEffect(() => {
    let str_todo = JSON.stringify(todos);
    localStorage.setItem("todos", str_todo);
  }, [todos]);
  
  const delete_func = (todo) => {
    set_todos(
      todos.filter((e) => {
        return e !== todo;
      }));

      let str_todo = JSON.stringify(todos);
      localStorage.setItem("todos", str_todo);
  };


  return (
    <>
      <Header title="CodeWithKartik.tech" />
      <TodoList todos={todos} delete_func={delete_func} />
      <Add_todo add_todo={{add_todo}} />
      <Footer />
    </>
  );
}


export default App;
