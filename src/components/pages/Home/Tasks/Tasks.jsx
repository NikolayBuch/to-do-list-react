import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import Task from 'components/common/Task';
import Container from 'components/common/Container';

import s from './Tasks.module.scss';

const Tasks = ({ currentFilter, tasks, onChangeTask, onRemoveTask, onEditedTask }) => {
  const filterTasks = (tasks, tab) => {
    return tasks.filter((todo) => {
      switch (tab) {
        case 'All':
          return true;
        case 'Pending':
          return !todo.isCompleted;
        case 'Completed':
          return todo.isCompleted;
        default:
          return true;
      }
    });
  };

  const filteredTasks = useMemo(
    () => filterTasks(tasks, currentFilter),
    [tasks, currentFilter]
  );

  return (
    <div className={s.root}>
      <Container>
        {filteredTasks.map((item) => (
          <Task
            onEditedTask={onEditedTask}
            key={item.id}
            item={item}
            onChangeTask={onChangeTask}
            onRemoveTask={onRemoveTask}
          />
        ))}
      </Container>
    </div>
  );
};

Tasks.propTypes = {
  currentFilter: PropTypes.string,
  tasks: PropTypes.array,
  onChangeTask: PropTypes.func,
  onRemoveTask: PropTypes.func,
  onEditedTask: PropTypes.func,
};

export default Tasks;
