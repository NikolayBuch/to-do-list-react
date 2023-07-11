import React from 'react';

import Text from 'components/common/Text';

import s from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={s.root}>
      <Text as='p' size='small' className={s.info}>
        Created by{' '}
        <a className={s.link} href='https://github.com/NikolayBuch'>
          Nikolay Buch
        </a>
      </Text>
      <Text as='p' size='small' className={s.info}>
        Created for{' '}
        <a className={s.link} href='https://snp.agency/en'>
          SnP
        </a>
      </Text>
    </div>
  );
};

export default Footer;
