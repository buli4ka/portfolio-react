import React from 'react';
import styles from './planet.module.css';

const Planet = ({planet}) => (<div className={ styles.planet } style={ { backgroundImage: `url(${ planet })` } } />);

export default Planet;