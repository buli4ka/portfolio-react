import React from 'react';
import styles from './header.module.css';

import MultiColorSvg from 'assets/images/multi-color.png';
import Button from 'components-ui/button/button';

const Header = () => {
  
  
  return (
    <div className={styles.header}>
      <Button image={MultiColorSvg} title={'Choose background color'}/>
    </div>
  );
};

export default Header;