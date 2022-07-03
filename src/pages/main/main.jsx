import React from 'react';
import cn from 'classnames';
import styles from './main.module.css'
import planetStyles from 'genetal-styles/spinning-about-axis.module.css'
import moonStyles from 'genetal-styles/circle-moving.module.css';
import planet from 'assets/images/earth.jpg';
import moon from 'assets/images/moon.png';

import Planet from 'components/planet/planet';

const Main = ({ testId = 'main-page-test-id' }) => {
  return (
    <div className={styles.container} data-testId={ testId }>
      <Planet planet={planet} styles={cn(planetStyles.planet, styles.planetPosition)}/>
      <Planet planet={moon} styles={cn(planetStyles.planet, styles.moonPosition, moonStyles.move)}/>

    </div>
  );
};

export default Main;