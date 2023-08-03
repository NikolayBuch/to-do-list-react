import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import Task from 'components/common/Task';
import Container from 'components/common/Container';

import s from './Tasks.module.scss';

const Tasks = ({ filter, tasks, changeTask, removeTask, editedNewTask }) => {
  const filterTasks = (tasks, tab) => {
    return tasks.filter((todo) => {
      // if (tab === 'All') {
      //   return true;
      // } else if (tab === 'Pending') {
      //   return !todo.isCompleted;
      // } else if (tab === 'Completed') {
      //   return todo.isCompleted;
      // }
      switch (tab) {
        case 'All':
          return true;
          break;
        case 'Pending':
          return !todo.isCompleted;
          break;
        case 'Completed':
          return todo.isCompleted;
          break;
        default:
          return true;
      }
    });
  };

  const filteredTasks = useMemo(
    () => filterTasks(tasks, filter),
    [tasks, filter]
  );

  return (
    <div className={s.root}>
      <Container>
        {filteredTasks.map((item) => (
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

Tasks.propTypes = {
  filter: PropTypes.string,
  tasks: PropTypes.array,
  changeTask: PropTypes.func,
  removeTask: PropTypes.func,
  editedNewTask: PropTypes.func,
};

export default Tasks;
