import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import modsClasses from 'utils/modsClasses';

import s from './Container.module.scss';

const Container = ({ className, size, children }) => {
  const mods = modsClasses(s, {
    size,
  });

  return <div className={cx(s.root, className, mods)}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  size: PropTypes.oneOf(['normal', 'big']),
};

Container.defaultProps = {
  size: 'normal',
};

export default Container;
