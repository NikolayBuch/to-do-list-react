import React from 'react';

import Button from 'components/common/Button';
import { filter } from './constants';

import s from './Filter.module.scss';

const Filter = ({renderFilter}) => {
  // console.log(renderFilter())
  return (
    <div className={s.root}>
      {filter.map((item) => (
        <Button onClick={(e)=> renderFilter(item.name)} color='filter' key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Filter;
