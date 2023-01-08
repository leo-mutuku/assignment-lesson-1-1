import React from 'react';
const todoList = [
  {
    id: 1,
    title: "Reed the book",
  }, {
    id: 2,
    title: "Watch the videos",
  }, {
    id: 3,
    title: "Complete assignment"
  } ];

function App() {
  return (
    <div>
      <h1>Todo List</h1>
        <ul>
          hint: {todoList.map (function (todo) {
          return <li key = {todo.id}>
                    <span>{todo.id}</span>
                    <span>{todo.title}</span>
                 </li>;
                
        })}
        </ul>
    </div>
    );
}

export default App;
