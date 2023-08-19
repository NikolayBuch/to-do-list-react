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

  const editedTask = (newTask) => {
    if (newTask.task.trim() === '') {
      const removedItems = tasks.filter((task) => task.id !== newTask.id);
      setTasks(removedItems);
    } else {
      const newTasks = tasks.map((task) => {
        if (task.id === newTask.id) {
          return {
            ...task,
            task: newTask.task,
          };
        }

        return task;
      });

      setTasks(newTasks);
    }
  };

  const changeTask = (id) => {
    setTasks((prev) => {
      return prev.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        }
        return { ...task };
      });
    });
  };

  const changeAllTask = (e) => {
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

  const renderFilter = (name) => {
    setFilter(name);
  };

  return (
    <main className={s.root}>
      <Header />
      <Form onCreateTask={createTask} onChangeAllTask={changeAllTask} />
      <Tasks
        currentFilter={filter}
        tasks={tasks}
        onChangeTask={changeTask}
        onRemoveTask={removeTask}
        onEditedTask={editedTask}
      />
      <FooterTasks
        currentFilter={filter}
        onRenderFilter={renderFilter}
        onRemoveCompleted={removeCompleted}
        tasks={tasks}
        completed={completed}
        uncompleted={uncompleted}
      />
      <Footer />
    </main>
  );
};

export default Home;
