import React, { useState } from 'react';

import Input from 'components/common/Input';
import Text from 'components/common/Text';
import Checkbox from 'components/common/Checkbox';
import Button from 'components/common/Button';

import s from './Task.module.scss';

const Task = ({ item, changeTask, removeTask, editTask }) => {

 
 
  return (
    <div className={s.root}>
          <Checkbox
            item={item}
            changeTask={changeTask}
            
          />
          <Text onClick={() => editTask()} as='p' className={s.task}>
            {item.task}
          </Text>
          <Button  onClick={() => removeTask(item)} color='close'>
            <img src='./img/close.svg' alt='close' />
          </Button>
    </div>
  );
};

export default Task;
