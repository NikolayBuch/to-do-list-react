import React, { useState } from 'react';
import PropTypes from 'prop-types';


import Input from 'components/common/Input';
import Container from 'components/common/Container';
import Button from 'components/common/Button';

import s from './Form.module.scss';

const Form = ({ create, completeAll }) => {
  const [task, setTask] = useState('');

  const addNewTask = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      task,
      isCompleted: false,
    };

    if (task === '') return;
    create(newTask);
    setTask('');
  };

  return (
    <form className={s.root} onSubmit={addNewTask}>
      <Container>
        <Input
          onBlur={addNewTask}
          onChange={(e) => setTask(e.target.value)}
          value={task}
          type='text'
          placeholder='What needs to be done?'
        />
      </Container>
      <Container>
        <div className={s.button}>
          <Button type='reset' onClick={() => completeAll()} color='check'>
            <img src='./img/check.svg' alt='check' />
          </Button>
          <Button onClick={addNewTask} type='submit'>
            Add
          </Button>
        </div>
      </Container>
    </form>
  );
};

Form.propTypes = {
  create: PropTypes.func, 
  completeAll: PropTypes.func, 
}

export default Form;
