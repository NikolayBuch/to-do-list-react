import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Button from 'components/common/Button';
import { filter } from './constants';

import s from './Filter.module.scss';

const Filter = () => {
  const [active, setActive] = useState(filter);

  const location = useLocation();
 
  const activeButton = (id) => {
    setActive(active.map((item) => (item.isActive = false)));
    const newActive = [...active];
    const current = newActive.find((active) => active.id === id);
    current.isActive = !current.isActive;
    setActive(newActive);
  };

  const render = (item) => {
    switch (item.pathname) {
      case '/':
        activeButton(1);
        break;
      case '/pending':
        activeButton(2);
        break;
      case '/completed':
        activeButton(3);
        break;
      default:
        activeButton(1);
    }
  };

  useEffect(() => {
    render(location);
  }, [location]);


  return (
    <div className={s.root}>
      {filter.map((item) => (
        <Link to={item.to} className={s.link} key={item.id}>
          <Button active={active} color='filter' item={item} />
        </Link>
      ))}
    </div>
  );
};

export default Filter;
