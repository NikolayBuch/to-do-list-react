import React from 'react';

import Task from 'components/common/Task';
import Container from 'components/common/Container';

import s from './Tasks.module.scss';

const Tasks = ({ filter, changeTask, removeTask, editedNewTask }) => {
  return (
    <div className={s.root}>
      <Container>
        {filter.map((item) => (
          <Task
            editedNewTask={editedNewTask}
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
