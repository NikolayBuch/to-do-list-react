import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from 'components/common/Input';
import Text from 'components/common/Text';
import Checkbox from 'components/common/Checkbox';
import Button from 'components/common/Button';

import s from './Task.module.scss';

const Task = ({ item, changeTask, removeTask, editedNewTask }) => {
  const [edit, setEdit] = useState(false);

  const [editsTask, setEditsTask] = useState(item.task);

  const editTask = (item) => {
    setEdit(true);
  };

  const editedTask = () => {
    const newTask = {
      id: item.id,
      task: editsTask,
      isCompleted: item.isCompleted,
    };
    editedNewTask(newTask);
    setEdit(false);
  };

  return (
    <div>
      {edit ? (
        <Input
          autoFocus
          value={editsTask}
          onChange={(e) => setEditsTask(e.target.value)}
          onBlur={editedTask}
        />
      ) : (
        <div className={s.root}>
          <Checkbox item={item} changeTask={changeTask} />
          <div className={s.task}>
            <Text
              onDoubleClick={(e) => editTask(item)}
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

}

export default Task;
