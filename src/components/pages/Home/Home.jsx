import React, { useEffect, useState } from 'react';

import Header from './Header';
import Form from './Form';
import Tasks from './Tasks/';
import FooterTasks from './FooterTasks';

import s from './Home.module.scss';

const Home = () => {
  const [tasks, setTasks] = useState(
    //   [
    //   { id: 1, task: 'Task1', isCompleted: false },
    //   { id: 2, task: 'Task2', isCompleted: false },
    //   { id: 3, task: 'Task3', isCompleted: false },
    //   { id: 4, task: 'Task4', isCompleted: false },
    //   { id: 5, task: 'Task5', isCompleted: false },
    //   { id: 6, task: 'Task6', isCompleted: false },

    // ]
    JSON.parse(localStorage.getItem('todoList'))
  );
  const [filter, setFilter] = useState(tasks);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(tasks))
    setFilter(tasks)
  }, [tasks])

  console.log(tasks);

  const completed = tasks.filter((task) => task.isCompleted);
  const uncompleted = tasks.filter((item) => !item.isCompleted);

  const createTask = (newTask) => {
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  const renderFilter = (filter) => {
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

  const changeTask = (id) => {
    const todo = [...tasks];
    const current = todo.find((todo) => todo.id === id);
    current.isCompleted = !current.isCompleted;
    setTasks(todo);
  };

  const removeTask = (item) => {
    const remove = tasks.filter((task) => task.id !== item.id);
    setTasks(remove);
  };

  // const editTask = () => {
  //   console.log('click');
  // };

  const completeAll = (e) => {
    const todo = [...tasks];
    const isChecked =
      todo.filter((elem) => !!elem.isCompleted).length === todo.length;
    todo.map((elem) => (elem.isCompleted = !isChecked));
    setTasks(todo);
    console.log(tasks);
  };
  const removeCompleted = () => {
    setTasks(uncompleted);
  };

  return (
    <main className={s.root}>
      <Header />
      <Form create={createTask} completeAll={completeAll} />
      <Tasks
        renderFilter={renderFilter}
        completed={completed}
        uncompleted={uncompleted}
        filter={filter}
        changeTask={changeTask}
        removeTask={removeTask}
        // editTask={editTask}
      />
      <FooterTasks
        renderFilter={renderFilter}
        count={uncompleted.length}
        completedTasks={completed.length}
        removeCompleted={removeCompleted}
      />
    </main>
  );
};

export default Home;
