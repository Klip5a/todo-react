import React from 'react';
import PropTypes from 'prop-types';

const FilterToDo = ({ filterTodo, setFilterTodo }) => {
  const handleFilterList = (currentTab) => {
    if (currentTab === 'all') {
      setFilterTodo({ all: true, completed: false, uncompleted: false });
    } else if (currentTab === 'completed') {
      setFilterTodo({ all: false, completed: true, uncompleted: false });
    } else if (currentTab === 'uncompleted') {
      setFilterTodo({ all: false, completed: false, uncompleted: true });
    }
  };

  return (
    <div className="flex">
      <button
        className={`m-2 pb-2 cursor-pointer border-b-2 ${!filterTodo.all ? 'border-white' : 'border-black'}`}
        onClick={() => handleFilterList('all')}
      >
        All
      </button>
      <button
        className={`m-2 pb-2 cursor-pointer border-b-2 ${!filterTodo.completed ? 'border-white' : 'border-black'}`}
        onClick={() => handleFilterList('completed')}
      >
        Completed
      </button>
      <button
        className={`m-2 pb-2 cursor-pointer border-b-2 ${!filterTodo.uncompleted ? 'border-white' : 'border-black'}`}
        onClick={() => handleFilterList('uncompleted')}
      >
        Uncompleted
      </button>
    </div>
  );
};

FilterToDo.propTypes = {
  filterTodo: PropTypes.object,
  setFilterTodo: PropTypes.func.isRequired,
};

export default FilterToDo;
