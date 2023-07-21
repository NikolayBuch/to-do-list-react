import React from 'react';
import PropTypes from 'prop-types';

import s from './Checkbox.module.scss';

const Checkbox = ({ onClick, item, changeTask }) => {
  return (
    <div onClick={onClick}>
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

Checkbox.propTypes = {
  onClick: PropTypes.func,
  item: PropTypes.shape({
    id: PropTypes.number,
    isCompleted: PropTypes.bool,
  }),
  changeTask: PropTypes.func,
};

export default Checkbox;
