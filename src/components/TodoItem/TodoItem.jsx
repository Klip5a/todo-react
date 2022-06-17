import React from 'react';
import PropTypes from 'prop-types';
import { GrDrag } from 'react-icons/gr';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiCheck } from 'react-icons/fi';
import { Reorder } from 'framer-motion';

const ToDoItem = ({ item, completedTodo, deleteTodo }) => {
  const variants = {
    initial: {
      opacity: 0,
      heigth: 0,
    },
    animate: {
      opacity: 1,
      heigth: 'auto',
    },
    exit: {
      opacity: 0,
      heigth: 0,
    },
  };
  return (
    <Reorder.Item
      value={item}
      whileDrag={{ boxShadow: 'rgba(0,0,0,0.12) 0px 1px 3px, rgba(0,0,0,0.24) 0 1px 2px' }}
      {...variants}
    >
      <div className={`p-2 mb-2 rounded-md flex items-center justify-between bg-slate-100`}>
        <div className="flex items-center w-12 justify-between">
          <GrDrag />
          <button className="border-2 border-gray-400 rounded-sm w-5 h-5 " onClick={() => completedTodo(item.id)}>
            {item.isComplete ? <FiCheck /> : null}
          </button>
        </div>
        <p className={`text-left w-52 font-medium mx-2 ${item.isComplete ? 'line-through' : ''}`}>{item.title}</p>
        <button id="btn-delete" className="bg-red-200 p-2 rounded-md" onClick={() => deleteTodo(item.id)}>
          <AiOutlineDelete />
        </button>
      </div>
    </Reorder.Item>
  );
};

ToDoItem.propTypes = {
  item: PropTypes.object,
  completedTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
};

export default ToDoItem;
