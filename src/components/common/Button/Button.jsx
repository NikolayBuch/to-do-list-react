import React from 'react';
import PropTypes from 'prop-types';
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
  disabled,
}) => {
  const mods = modsClasses(s, {
    type,
    color,
  });

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cx(
        s.root,
        mods,
        completedTasks === 0 ? s.hide : s.visible,
        item ? { [s.active]: item.isActive } : ''
      )}
      type={type}>
      {item ? item.name : children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  color: PropTypes.oneOf(['check', 'close', 'filter']),
  completedTasks: PropTypes.number,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  item: PropTypes.object,
};

Button.defaultProps = {
  color: 'filter',
};

export default Button;
