import React from 'react';
import PropTypes from 'prop-types';


import Container from 'components/common/Container';
import Text from 'components/common/Text';
import Button from 'components/common/Button';
import Filter from './Filter';

import s from './FooterTasks.module.scss';

const FooterTasks = ({
  removeCompleted,
  renderFilter,
  completed,
  uncompleted,
}) => {
  return (
    <div className={s.root}>
      <Container>
        <div className={s.filter}>
          <Filter
            renderFilter={renderFilter}
          />

          <div className={s.button}>
            <Text className={s.count} as='p'>
              {uncompleted.length} items left
            </Text>

            <Button
              onClick={() => removeCompleted()}
              completedTasks={completed.length}
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
  removeCompleted: PropTypes.func,
  renderFilter: PropTypes.func,
  completed: PropTypes.array,
  uncompleted: PropTypes.array,
}

export default FooterTasks;
