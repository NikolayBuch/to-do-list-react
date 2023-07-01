import React from 'react';

import Text from 'components/common/Text';
import Container from 'components/common/Container/';

import s from './Header.module.scss';

const Header = () => {
  return (
    <div className={s.root}>
      <Container>
        <Text size='h1' as='h1'>
          To do list
        </Text>
      </Container>
    </div>
  );
};

export default Header;
