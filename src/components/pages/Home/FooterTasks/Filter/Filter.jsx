import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/common/Button';
import { filter } from './constants';

import s from './Filter.module.scss';

const Filter = ({ onRenderFilter, currentFilter}) => {

  const valueFilter = (value) => {
    onRenderFilter(value);
  };

  return (
    <div className={s.root}>
      {filter.map((item) => (
        <Button
          onClick={(e) => {
            valueFilter(item.name);
          }}
          isActive={item.name === currentFilter}
          color='filter'
          key={item.id}
        >{item.name}</Button>
      ))}
    </div>
  );
};


Filter.propTypes = {
  onRenderFilter: PropTypes.func,
  currentFilter: PropTypes.string,
}

export default Filter;
