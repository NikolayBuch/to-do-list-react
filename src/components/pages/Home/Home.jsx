import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import Form from './Form';
import Tasks from './Tasks';
import TasksCompleted from './Tasks/TasksCompleted';
import TasksUncompleted from './Tasks/TasksUncompleted';
import FooterTasks from './FooterTasks';
import Footer from './Footer/Footer';

import s from './Home.module.scss';

const Home = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('todoList')) || []
    //   [
    //   { id: 1, task: 'Task1', isCompleted: false },
    //   { id: 2, task: 'Task2', isCompleted: false },
    //   { id: 3, task: 'Task3', isCompleted: false },
    //   { id: 4, task: 'Task4', isCompleted: false },
    //   { id: 5, task: 'Task5', isCompleted: false },
    //   { id: 6, task: 'Task6', isCompleted: false },

    // ]
  );

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(tasks));
    setTasks(tasks);
  }, [tasks]);

  const completed = tasks.filter((task) => task.isCompleted);
  const uncompleted = tasks.filter((item) => !item.isCompleted);

  const createTask = (newTask) => {
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  const editedNewTask = (newTask) => {
    const todo = [...tasks];
    let current = todo.find((todo) => todo.id === newTask.id);
    if (newTask.task.trim() === '') {
      const remove = todo.filter((task) => task.id !== current.id);
      setTasks(remove);
    } else {
      current.task = newTask.task;
      setTasks(todo);
    }
  };

  const changeTask = (id) => {
    const todo = [...tasks];
    const current = todo.find((todo) => todo.id === id);
    current.isCompleted = !current.isCompleted;
    setTasks(todo);
  };

  const completeAll = (e) => {
    const todo = [...tasks];
    const isChecked =
      todo.filter((elem) => !!elem.isCompleted).length === todo.length;
    todo.map((elem) => (elem.isCompleted = !isChecked));
    setTasks(todo);
  };

  const removeTask = (item) => {
    const remove = tasks.filter((task) => task.id !== item.id);
    setTasks(remove);
  };

  const removeCompleted = () => {
    setTasks(uncompleted);
  };

  return (
    <main className={s.root}>
      <Header />
      <Form create={createTask} completeAll={completeAll} />
      <Routes>
        <Route
          path='/'
          element={
            <Tasks
              tasks={tasks}
              changeTask={changeTask}
              removeTask={removeTask}
              editedNewTask={editedNewTask}
            />
          }
        />
        <Route
          path='completed'
          element={
            <TasksCompleted
              completed={completed}
              changeTask={changeTask}
              removeTask={removeTask}
              editedNewTask={editedNewTask}
            />
          }
        />
        <Route
          path='pending'
          element={
            <TasksUncompleted
              uncompleted={uncompleted}
              changeTask={changeTask}
              removeTask={removeTask}
              editedNewTask={editedNewTask}
            />
          }
        />
      </Routes>
      <FooterTasks
        removeCompleted={removeCompleted}
        tasks={tasks}
        completed={completed}
        uncompleted={uncompleted}
      />
      <Footer />
    </main>
  );
};

export default Home;
