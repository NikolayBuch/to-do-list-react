import React from 'react';

import Text from 'components/common/Text';

import s from './Input.module.scss';

const MyInput = ({ type, placeholder, value, onChange, onBlur, autoFocus }) => {
  return (
    <Text size='normal' className={s.root}>
      <input
        autoFocus={autoFocus}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        type={type}
        className={s.newToDo}
      />
      <label className={s.labelToDo}>
        <span>{placeholder}</span>
      </label>
    </Text>
  );
};

export default MyInput;
