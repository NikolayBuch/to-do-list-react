import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import Input from 'components/common/Input';
import Text from 'components/common/Text';
import Checkbox from 'components/common/Checkbox';
import Button from 'components/common/Button';

import s from './Task.module.scss';

const Task = ({ item, changeTask, removeTask, editedNewTask }) => {
  const [edit, setEdit] = useState(false);

  const [editsTask, setEditsTask] = useState(item.task);

  const editTask = () => {
    setEdit(true);
  };

  const editedTask = useCallback(() => {
    const newTask = {
      ...item,
      task: editsTask,
    };
    editedNewTask(newTask);
    setEdit(false);
  }, [editsTask, item, editedNewTask]);

  const handleChange = (e) =>  setEditsTask(e.target.value);

  const handleKeyDown = (e) => e.key === 'Enter' && editedTask();

  return (
    <div>
      {edit ? (
        <Input
          autoFocus
          value={editsTask}
          onChange={handleChange}
          onBlur={editedTask}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <div className={s.root}>
          <Checkbox
            isCompleted={item.isCompleted}
            onChange={changeTask}
            value={item.id}
          />
          <div className={s.task} 
          onDoubleClick={(e) => editTask()}>
            <Text
              as='p'
              className={item.isCompleted ? s.completed : ''}>
              {item.task}
            </Text>
          </div>

          <Button onClick={() => removeTask(item)} color='close'>
            <img src='./img/close.svg' alt='close' />
          </Button>
        </div>
      )}
    </div>
  );
};

Task.propTypes = {
  item: PropTypes.object,
  changeTask: PropTypes.func,
  removeTask: PropTypes.func,
  editedNewTask: PropTypes.func,
};

export default Task;
