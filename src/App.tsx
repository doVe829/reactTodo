import React from "react";
import "./App.css";
import { Header } from "./components/header";
import { TodoItemList } from "./components/todoItemList";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <div>babababab</div>
        <TodoItemList />
      </div>
    </div>
  );
}

export default App;
