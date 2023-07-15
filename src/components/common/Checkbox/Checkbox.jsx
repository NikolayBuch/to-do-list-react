import React from 'react';

import s from './Checkbox.module.scss';

const Checkbox = ({ onClick, item, changeTask }) => {
  return (
    <div
      onClick={onClick}
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
