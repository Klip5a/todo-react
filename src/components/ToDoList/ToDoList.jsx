import React from 'react';
import PropTypes from 'prop-types';
import { Reorder, AnimatePresence } from 'framer-motion';

import TodoItem from '../TodoItem/TodoItem';

const ToDoList = ({ todos, setTodos, filterTodo }) => {
  const completedTodo = (id) => {
    const copyTodo = [...todos];
    const currentTodo = copyTodo.find((toDoItem) => toDoItem.id === id);
    currentTodo.isComplete = !currentTodo.isComplete;
    setTodos(copyTodo);
  };

  const deleteTodo = (id) => {
    setTodos([...todos].filter((todoItem) => todoItem.id !== id));
  };

  const completedTodos = todos.filter((item) => {
    if (item.isComplete) {
      return item;
    }
  });

  const unCompletedTodos = todos.filter((item) => {
    if (!item.isComplete) {
      return item;
    }
  });

  return (
    <div className="py-2">
      <Reorder.Group as="ol" axys="y" values={todos} onReorder={setTodos}>
        <AnimatePresence>
          {filterTodo.all &&
            todos.map((item) => (
              <TodoItem key={item.id} item={item} deleteTodo={deleteTodo} completedTodo={completedTodo} />
            ))}
        </AnimatePresence>
      </Reorder.Group>
      <Reorder.Group axys="y" values={todos} onReorder={setTodos}>
        <AnimatePresence>
          {filterTodo.completed &&
            completedTodos.map((item) => (
              <TodoItem key={item.id} item={item} deleteTodo={deleteTodo} completedTodo={completedTodo} />
            ))}
        </AnimatePresence>
      </Reorder.Group>
      <Reorder.Group axys="y" values={todos} onReorder={setTodos}>
        <AnimatePresence>
          {filterTodo.uncompleted &&
            unCompletedTodos.map((item) => (
              <TodoItem key={item.id} item={item} deleteTodo={deleteTodo} completedTodo={completedTodo} />
            ))}
        </AnimatePresence>
      </Reorder.Group>
    </div>
  );
};

ToDoList.propTypes = {
  todos: PropTypes.array,
  setTodos: PropTypes.func,
  filterTodo: PropTypes.object,
};

export default ToDoList;
