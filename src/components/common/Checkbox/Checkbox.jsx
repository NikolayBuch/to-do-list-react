import React, { useState } from 'react';

import s from './Checkbox.module.scss';

const Checkbox = ({ onClick, isCompleted, item, changeTask }) => {
  const [checked, setChecked] = useState({ isCompleted });

  return (
    <div
      onClick={onClick}

      // defaultChecked={isCompleted}
      // isCompleted={isCompleted}
    >
      <input
        onChange={() => changeTask(item.id)}
        checked={item.isCompleted}
        className={s.checkbox}
        id='checkbox'
        type='checkbox'
      />
      <label onClick={() => changeTask(item.id)}></label>
    </div>
  );
};

export default Checkbox;
