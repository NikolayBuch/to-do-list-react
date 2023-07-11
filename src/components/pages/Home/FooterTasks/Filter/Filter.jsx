import React, { useState } from 'react';

import Button from 'components/common/Button';
import { filter } from './constants';

import s from './Filter.module.scss';

const Filter = ({ renderFilter, tasks, completed, uncompleted }) => {
  const [active, setActive] = useState(filter);

  const activeButton = (item) => {
    setActive(active.map((item) => (item.isActive = false)));
    const newActive = [...active];
    const current = newActive.find((active) => active.id === item.id);
    current.isActive = !current.isActive;
    setActive(newActive);
  };

  const render = (filter) => {
    switch (filter.name) {
      case 'All':
        renderFilter(tasks);
        activeButton(filter);
        break;
      case 'Completed':
        renderFilter(completed);
        activeButton(filter);

        break;
      case 'Pending':
        renderFilter(uncompleted);
        activeButton(filter);
        break;
      default:
        renderFilter(tasks);
        activeButton(filter);
    }
  };

  return (
    <div className={s.root}>
      {filter.map((item) => (
        <Button
          active={active}
          onClick={(e) => {
            render(item);
          }}
          color='filter'
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
};

export default Filter;
