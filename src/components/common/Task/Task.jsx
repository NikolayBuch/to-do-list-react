import React, { useState } from 'react';

import Input from 'components/common/Input';
import Text from 'components/common/Text';
import Checkbox from 'components/common/Checkbox';
import Button from 'components/common/Button';

import s from './Task.module.scss';

const Task = ({ item, changeTask, removeTask }) => {
  // const [edit, setEdit] = useState(null);

  const editTask = (id, task) => {
    // setEdit(id)
    console.log('click')
  }

  // console.log(item.isCompleted);
  return (
    <div className={s.root}>
      {/* {edit === item.id ? (
        <Input placeholder={item.task}/> 
      ) : ( */}
        {/* <div  className={s.root}> */}
          <Checkbox
            isCompleted={item.isCompleted}
            onClick={() => changeTask(item.id)}
          />
          <Text onClick={editTask()}  as='p' className={s.task}>
            {item.task}
          </Text>
          <Button  onClick={() => removeTask(item)} color='close'>
            <img src='./img/close.svg' alt='close' />
          </Button>
        {/* </div> */}
      {/* )} */}

      {/* <Input/> */}
    </div>
  );
};

export default Task;
