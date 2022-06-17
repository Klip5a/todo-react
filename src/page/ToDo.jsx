import React, { useState } from 'react';
import CreateTodo from '../components/CreateTodo/CreateTodo';
import FilterToDo from '../components/FilterTodo/FilterTodo';
import ToDoList from '../components/ToDoList/ToDoList';

const ToDo = () => {
  const toDoData = [
    { id: 1, title: 'Купить хлеб', isComplete: false },
    { id: 2, title: 'Оплатить интернет', isComplete: true },
  ];

  const [filterTodo, setFilterTodo] = useState({
    all: true,
    completed: false,
    uncompleted: false,
  });
  const [todos, setTodos] = useState(toDoData);

  const addTodo = (title) => {
    setTodos([{ id: new Date(), title, isComplete: false }, ...todos]);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-slate-300">
      <div className="bg-white rounded-2xl p-3 w-96">
        <h1 className="text-4xl mb-7">ToDo</h1>
        <CreateTodo addTodo={addTodo} />
        <FilterToDo filterTodo={filterTodo} setFilterTodo={setFilterTodo} />
        <ToDoList todos={todos} setTodos={setTodos} filterTodo={filterTodo} />
      </div>
    </div>
  );
};

export default ToDo;
