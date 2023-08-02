import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import modsClasses from 'utils/modsClasses';

import s from './Button.module.scss';

const Button = ({
  type,
  color,
  children,
  onClick,
  disabled,
  isActive,
  isHide,
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
        { [s.hide]: isHide },
        { [s.active]: isActive }
      )}
      type={type}>
      {' '}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  color: PropTypes.oneOf(['check', 'close', 'filter']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  isHide: PropTypes.bool,
};

Button.defaultProps = {
  color: 'filter',
};

export default Button;
