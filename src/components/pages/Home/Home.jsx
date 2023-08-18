import React from 'react';

import Header from './Header';
import Form from './Form';
import Tasks from './Tasks';
import FooterTasks from './FooterTasks';
import Footer from './Footer/Footer';

import s from './Home.module.scss';
import { useLocalStorage } from 'hooks/localStorage';

const Home = () => {
  const [tasks, setTasks] = useLocalStorage('todoList', []);
  const [filter, setFilter] = useLocalStorage('filter', 'All');

  const completed = tasks.filter((task) => task.isCompleted);
  const uncompleted = tasks.filter((item) => !item.isCompleted);

  const createTask = (newTask) => {
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  const editedNewTask = (newTask) => {

    // const todo = [...tasks];
    // let current = todo.find((todo) => todo.id === newTask.id);
    // if (newTask.task.trim() === '') {
    //   const remove = todo.filter((task) => task.id !== current.id);
    //   setTasks(remove);
    // } else {
    //   current.task = newTask.task;
    //   setTasks(todo);
    // }
    if (newTask.task.trim() === '') {
      const removedItems = tasks.filter((task) => task.id !== newTask.id);
      setTasks(removedItems);
    } else {
      const newTasks = tasks.map(task => {
       if (task.id === newTask.id) {
        return {
         ...task,
         task: newTask.task,
        }
       };

       return task;
      });

      setTasks(newTasks);
    }

  };

  const changeTask = (id) => {
    console.log(tasks)

    const newChangeTask = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted:  true ? false : true
        }
      }
      return task
    })

    setTasks(newChangeTask)


    // const todo = [...tasks];
    // const current = todo.find((todo) => todo.id === id);
    // current.isCompleted = !current.isCompleted;
    // setTasks(todo);
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

  const renderFilter = (render) => {
    setFilter(render);
  };

  return (
    <main className={s.root}>
      <Header />
      <Form create={createTask} completeAll={completeAll} />
      <Tasks
        filter={filter}
        tasks={tasks}
        changeTask={changeTask}
        removeTask={removeTask}
        editedNewTask={editedNewTask}
      />
      <FooterTasks
        filter={filter}
        renderFilter={renderFilter}
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
