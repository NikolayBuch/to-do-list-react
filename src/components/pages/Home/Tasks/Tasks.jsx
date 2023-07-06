import React, { useState } from 'react';

import Task from 'components/common/Task';
import Input from 'components/common/Input';
import Container from 'components/common/Container';

import s from './Tasks.module.scss';

const Tasks = ({ filter, changeTask, removeTask }) => {

  
  const editTask =() => {
    console.log('click')
  }

  return (
    <div className={s.root}>
      <Container>
        {filter.map((item) => (
          <Task
          editTask={editTask}
            key={item.id}
            item={item}
            changeTask={changeTask}
            removeTask={removeTask}
          />
        ))}
      </Container>
    </div>
  );
};

export default Tasks;
