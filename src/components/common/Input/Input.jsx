import React, { useEffect, useRef, useState } from 'react';

import Text from 'components/common/Text';

import s from './Input.module.scss';

const MyInput = ({ type, placeholder, value, onChange, onBlur }) => {
  return (
    <Text size='normal' className={s.root}>
      <input
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
