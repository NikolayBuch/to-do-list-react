import React from 'react';
import PropTypes from 'prop-types';

import Container from 'components/common/Container';
import Text from 'components/common/Text';
import Button from 'components/common/Button';
import Filter from './Filter';

import s from './FooterTasks.module.scss';

const FooterTasks = ({
  onRemoveCompleted,
  onRenderFilter,
  completed,
  uncompleted,
  currentFilter,
}) => {
  return (
    <div className={s.root}>
      <Container>
        <div className={s.filter}>
          <Filter onRenderFilter={onRenderFilter} currentFilter={currentFilter} />

          <div className={s.button}>
            <Text className={s.count} as='p'>
              {uncompleted.length} items left
            </Text>

            <Button
              onClick={() => onRemoveCompleted()}
              isHide={completed.length === 0}
              color='filter'>
              Clear Completed
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

FooterTasks.propTypes = {
  omRemoveCompleted: PropTypes.func,
  onRenderFilter: PropTypes.func,
  currentFilter: PropTypes.string,
  completed: PropTypes.array,
  uncompleted: PropTypes.array,
};

export default FooterTasks;
