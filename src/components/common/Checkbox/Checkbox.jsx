import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import s from './Checkbox.module.scss';

const Checkbox = ({ value, isCompleted, onChange }) => {
  const handleChange = useCallback(() => {
    if (onChange) onChange(value);
  }, [value]);
  return (
    <div className={s.root}>
      <input
        onChange={() => handleChange()}
        checked={isCompleted}
        className={s.checkbox}
        id='checkbox'
        type='checkbox'
      />
      <label></label>
    </div>
  );
};

Checkbox.propTypes = {
  isCompleted: PropTypes.bool,
  value: PropTypes.number,
  onChange: PropTypes.func,
};

export default Checkbox;
