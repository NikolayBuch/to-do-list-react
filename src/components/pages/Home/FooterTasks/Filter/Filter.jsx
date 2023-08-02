import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/common/Button';
import { filter } from './constants';

import s from './Filter.module.scss';

const Filter = ({ renderFilter, currentFilter}) => {

  const render = (filter) => {
    renderFilter(filter.name);
  };

  return (
    <div className={s.root}>
      {filter.map((item) => (
        <Button
          onClick={(e) => {
            render(item);
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
  renderFilter: PropTypes.func,
  currentFilter: PropTypes.string,
}

export default Filter;
