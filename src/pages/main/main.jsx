import React from 'react';
import Planet from 'components/planet/planet';
import styles from './main.module.css'

import planet from 'assets/images/earth6.jpg';

const Main = ({ testId = 'main-page-test-id' }) => {
  return (
    <div className={styles.container} data-testId={ testId }>
      <Planet planet={planet} />
    </div>
  );
};

export default Main;