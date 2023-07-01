import React from 'react';
import cx from 'classnames';

import modsClasses from 'utils/modsClasses';

import s from './Button.module.scss';

const Button = ({
  type,
  color,
  children,
  item,
  onClick,
  completedTasks,
}) => {
  const mods = modsClasses(s, {
    type,
    color,
  });

  return (
    <button
      onClick={onClick}
      className={cx(s.root, mods, (completedTasks === 0) ? s.hide : s.visible)}
      type={type}>
      {item ? item.name : children}
    </button>
  );
};

export default Button;
