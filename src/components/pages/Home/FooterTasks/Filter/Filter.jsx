import React from 'react';

import Button from 'components/common/Button';
import { filter } from './constants';

import s from './Filter.module.scss';
import { useLocalStorage } from 'hooks/localStorage';

const Filter = ({ renderFilter}) => {
  const [active, setActive] = useLocalStorage('active', filter);

  const activeButton = (id) => {
    setActive(active.map((item) => (item.isActive = false)));
    const newActive = [...active];
    const current = newActive.find((active) => active.id === id);
    current.isActive = !current.isActive;
    setActive(newActive);
  };
  console.log(active);

  const render = (filter) => {
    renderFilter(filter.name);
    activeButton(filter.id);
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
