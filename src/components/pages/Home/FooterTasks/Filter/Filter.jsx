import React, { useEffect, useState } from 'react';

import Button from 'components/common/Button';
import { filter } from './constants';

import s from './Filter.module.scss';

const Filter = ({ renderFilter, tasks, completed, uncompleted }) => {
  const [active, setActive] = useState(filter);

  const activeButton = (id) => {
    setActive(active.map((item) => (item.isActive = false)));
    const newActive = [...active];
    const current = newActive.find((active) => active.id === id);
    current.isActive = !current.isActive;
    setActive(newActive);
  };

  useEffect(() => {
    setActive(active);
  }, [active]);

  const render = (filter) => {
    switch (filter.name) {
      case 'All':
        renderFilter(tasks);
        activeButton(filter.id);
        break;
      case 'Completed':
        renderFilter(completed);
        activeButton(filter.id);

        break;
      case 'Pending':
        renderFilter(uncompleted);
        activeButton(filter.id);
        break;
      default:
        renderFilter(tasks);
        activeButton(filter.id);
    }
  };

  return (
    <div className={s.root}>
      {filter.map((item) => (
        <Button
          onClick={(e) => {
            render(item);
          }}
          active={active}
          color='filter'
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
};

export default Filter;
