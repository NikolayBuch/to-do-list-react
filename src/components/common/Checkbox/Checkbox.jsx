import React, { useState } from 'react';

import s from './Checkbox.module.scss';

const Checkbox = ({ onClick, isCompleted }) => {
  const [checked, setChecked] = useState({isCompleted});
  // const isChecked = () => {
  //   if (isCompleted) {
  //     setChecked(!checked);
  //   } 
  // };
  // console.log({isCompleted})
  // console.log(checked)

  return (
    <div onClick={onClick}
    defaultChecked={isCompleted}
    isCompleted={isCompleted}
    // checked={checked}
    // onChange={isChecked}
    >
      <input
        className={s.checkbox}
        id='checkbox'
        type='checkbox'
      />
      <label></label>
    </div>
  );
};

export default Checkbox;
