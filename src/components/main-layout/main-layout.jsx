import React from 'react';
import styles from './main-layout.module.css';
import PropTypes from 'prop-types';

const MainLayout = ({ children, testId = 'main-layout-testId' }) => (<div className={ styles.container } data-testId={ testId }>{ children }</div>);

MainLayout.propTypes = {
  children: PropTypes.element,
  testId: PropTypes.string
};
export default MainLayout;