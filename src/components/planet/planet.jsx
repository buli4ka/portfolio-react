import React from 'react';

const Planet = ({planet='', styles}) => (<div className={ styles } style={ { backgroundImage: `url(${ planet })` } } />);

export default Planet;