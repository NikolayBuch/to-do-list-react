import React from 'react';

import Container from 'components/common/Container';
import Text from 'components/common/Text';
import Button from 'components/common/Button';
import Filter from './Filter';

import s from './FooterTasks.module.scss';

const FooterTasks = ({ count, completedTasks, removeCompleted, renderFilter }) => {

  
  return (
    <div className={s.root}>
      <Container>
        <div className={s.filter}>
          <Text className={s.count} as='p'>
            {count} items left
          </Text>
          <div className={s.button}>
            <Filter  renderFilter={renderFilter}/>
            <Button
              onClick={()=>removeCompleted()}
              removeCompleted={removeCompleted}
              completedTasks={completedTasks}
              color='filter'>
              Clear Completed
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FooterTasks;
