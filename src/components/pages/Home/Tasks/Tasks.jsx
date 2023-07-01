import React, { useState } from 'react';

import Task from 'components/common/Task';
import Input from 'components/common/Input';
import Container from 'components/common/Container';

import s from './Tasks.module.scss';

const Tasks = ({ completed, uncompleted, tasks, changeTask, removeTask,  }) => {
  const [task, setTask] = useState(tasks);
  const [edit, setEdit] = useState(false);
  const [filter, setFilter] = useState(tasks)


  const editTask = (id, task) => {
    // setEdit(true)
    console.log('click')
  }

  const renderFilter = (filter) => {
    const todo = [...tasks];
    switch (filter) {
      case 'All':
        setFilter(tasks);
        break;
      case 'Completed':
        setFilter(completed);
        break;
      case 'Pending':
        setFilter(uncompleted);
        break;
      default:
        setFilter(tasks);
    }
  };

  // const changeTodo = (id) => {
  //   const todo = [...task];
  //   const current = todo.find((todo) => todo.id === id);
  //   current.isCompleted = !current.isCompleted;
  //   setTask(todo);
  //   console.log(current);
  // };

  return (
    <div className={s.root}>
      <Container>
        {filter.map((item) => (
          // <div key={item.id}>
          //   {edit === item.id  ? (
          //     <Input  />
          //   ) : (
          //     <Task
          //     editTask={editTask}
          //       item={item}
          //       changeTask={changeTask}
          //       removeTask={removeTask}

          //     />
          //   )}
          // </div>
          <Task
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
