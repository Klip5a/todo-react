import React, { useState } from 'react';
import { CgMathPlus } from 'react-icons/cg';
import PropTypes from 'prop-types';

const CreateTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handeleSubmit = async () => {
    addTodo(title);
    setTitle('');
  };

  return (
    <div className="my-2 flex relative">
      <input
        type="text"
        onChange={(event) => setTitle(event.target.value)}
        value={title}
        className="border-2 w-full border-gray-300 p-1 rounded-md"
      />
      <button className="bg-green-200 rounded-md absolute right-0" style={{ padding: '10px' }} onClick={handeleSubmit}>
        <CgMathPlus />
      </button>
    </div>
  );
};

CreateTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default CreateTodo;
